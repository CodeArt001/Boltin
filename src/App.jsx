import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Hero-section/Home";
import Navbar from "./Components/nav/Navbar";
import Users from "./Components/Authsidepage/Users";
import Userr from "./Components/Authsidepage/Userr";
import Sidebars from "./Components/Dashboard/Sidebars";
import Dashboard from "./Components/Dashboard/Dashboard";
import Mydevice from "./Components/Device/Mydevice";
import Devicedetail from "./Components/Device/Devicedetail";
import Registerdevice from "./Components/Registerdevice/Registerdevice";
import Registersuccessful from "./Components/Registerdevice/Registersuccessful";
import Missing from "./Components/DeclareMissing/Missing";
import Missingupload from "./Components/DeclareMissing/Missingupload";
import Missingaction from "./Components/DeclareMissing/Missingaction";
import Stolen from "./Components/DeclareStolen/Stolen";
import Stolenupload from "./Components/DeclareStolen/Stolenupload";
import Stolenaction from "./Components/Declarestolen/Stolenaction";
import Ownership from "./Components/Ownership/Ownership";
import Uploadownership from "./Components/Ownership/Uploadownership";
import Complete from "./Components/Ownership/Complete";
import Request from "./Components/Ownership/Request";
import Notifications from "./Components/Notifications/Notifications";
import Settings from "./Components/Settings/Settings";
import Profileinfo from "./Components/Profile/Profileinfo";

import Accountsecurity from "./Components/Settings/Accountsecurity";
import { Suspense } from "react";
import DashboardLoadingSkeleton from "./Components/Dashboard/DashboardLoadingSkeleton";

import Chatbot from "./Components/ChatBox/Chatbot";
import Transferhistory from "./Components/Ownership/Transferhistory";

function App() {
  const location = useLocation();
  const dashboardRoutes = [
    "/dashboard",
    "/mydevice",
    "/device-detail",
    "/registerdevice",
    "/missing",
    "/missing-upload",
    "/missing-action",
    "stolen-upload",
    "/stolen",
    "stolen-action",
    "/ownership",
    "/upload-ownership",
    "/complete",
    "/request",
    "/chat-bot",
    "/notifications",
    "/settings",
    "/profile-info/edit",
    "/profile-info",
    "/profile-change",
    "/registersuccessful",
    "/account-security",
    "/edit-profile",
    "/transfer-history",
  ];
  const isDashboardRoute = dashboardRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  const showNavbar =
    !location.pathname.includes("/users") &&
    !location.pathname.includes("/userr") &&
    !location.pathname.includes("/registersuccessful") &&
    // !location.pathname.includes("/notification-activity") &&
    !isDashboardRoute;
  return (
    <>
      {showNavbar && <Navbar />}
      {isDashboardRoute ? (
        <div className="flex ">
          <Sidebars />
          <main className="flex-1">
            <Suspense fallback={<DashboardLoadingSkeleton />}>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/mydevice" element={<Mydevice />} />
                <Route path="/device-detail/:id" element={<Devicedetail />} />
                <Route path="/registerdevice" element={<Registerdevice />} />
                <Route path="/missing" element={<Missing />} />
                <Route path="/missing-upload" element={<Missingupload />} />
                <Route path="/missing-action" element={<Missingaction />} />
                <Route path="/stolen" element={<Stolen />} />
                <Route path="/stolen-upload" element={<Stolenupload />} />
                <Route path="/stolen-action" element={<Stolenaction />} />
                <Route path="/ownership" element={<Ownership />} />
                <Route path="/upload-ownership" element={<Uploadownership />} />
                <Route path="/complete" element={<Complete />} />
                <Route path="/request" element={<Request />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />} />
                <Route
                  path="/edit-profile"
                  element={<Navigate to="/profile-info/edit" replace />}
                />
                <Route
                  path="/profile-change"
                  element={<Navigate to="/profile-info" replace />}
                />
                <Route path="/profile-info/edit" element={<Profileinfo />} />
                <Route path="/profile-info" element={<Profileinfo />} />

                <Route path="/account-security" element={<Accountsecurity />} />
                <Route path="/device-detail" element={<Devicedetail />} />
                <Route
                  path="/registersuccessful"
                  element={<Registersuccessful />}
                />
                <Route path="/chat-bot" element={<Chatbot />} />
                <Route path="/transfer-history" element={<Transferhistory />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userr" element={<Userr />} />
        </Routes>
      )}
    </>
  );
}

export default App;
