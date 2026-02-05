// import Dashboardbar from "../Dashboard/DashboardBar";
import Sender from "./Sender";
import Receiver from "./Receiver";
import Messageinput from "./Messageinput";
import { useEffect, useRef, useState } from "react";
import DashboardBar from "../Dashboard/DashboardBar";
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const wsRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("✅ WebSocket Connected");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      console.log("📩 Received:", event.data);

      try {
        const data = JSON.parse(event.data);

        if (data.type === "typing") {
          setIsTyping(data.isTyping);
        } else if (data.type === "message") {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now(),
              text: data.text,
              sender: "bot",
              timestamp: new Date(),
            },
          ]);
          setIsTyping(false);
        }
      } catch (error) {
        console.log("Handling as plain text:", error);
        // Handle plain text messages
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text: event.data,
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }
    };

    // Error handling
    ws.onerror = (error) => {
      console.error("❌ WebSocket Error:", error);
      setIsConnected(false);
    };

    // Connection closed
    ws.onclose = () => {
      console.log("🔌 WebSocket Closed");
      setIsConnected(false);
    };

    // Cleanup on unmount
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  // Send message function
  const handleSendMessage = (messageText) => {
    if (!messageText.trim() || !isConnected) {
      if (!isConnected) {
        alert("Not connected to server. Please refresh.");
      }
      return;
    }

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    if (wsRef.current?.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: "message",
          text: messageText,
          timestamp: new Date().toISOString(),
        }),
      );
      setIsTyping(true);
    }
  };

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white  flex flex-col h-screen w-full  lg:pl-6 ">
      <div className="shrink-0">
        <div className="lg:py-0 xl:py-0 md:py-0 sm:py-2 py-2 shadow shadow-black/30 mt-2">
          <DashboardBar text="Notifications" />
        </div>
        <div className="flex items-center gap-2 px-4 py-2 ">
          <div
            className={`w-2 h-2 rounded-full ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <span className=" text-sm">
            {isConnected ? "Connected" : "Disconnected"}
          </span>
        </div>
      </div>

      <div className=" flex-1 overflow-y-auto px-4 py-2  flex flex-col">
        <div className="flex mt-auto flex-col justify-end min-h-full space-y-4 ">
          {messages.length === 0 && (
            <div className="text-white text-center py-10">
              Start chatting...
            </div>
          )}

          {messages.map((msg) =>
            msg.sender === "user" ? (
              <div key={msg.id} className="py-5 w-[50%]">
                <Sender message={msg.text} />
              </div>
            ) : (
              <div key={msg.id} className="py-5 w-[50%] ml-auto pr-16">
                <Receiver message={msg.text} />
              </div>
            ),
          )}
        </div>
        {isTyping && (
          <div className="py-5 w-[50%] ml-auto pr-16">
            <div className="relative">
              <p className="border border-white text-white px-7 py-2 rounded-2xl">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  <span
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></span>
                </div>
              </p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="fixed bottom-0  p-4  right-0 left-0 lg:left-[256px] shrink-0">
        <Messageinput
          onSendMessage={handleSendMessage}
          isConnected={isConnected}
        />
      </div>
    </div>
  );
};

export default Chatbot;
