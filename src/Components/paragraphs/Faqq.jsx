import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const Faqq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "How do i register a device",
      answer:
        "Boltin is a platform that helps you track and secure your gadgets using digital ownership identity and invisible barcodes.",
    },
    {
      question: "How do I register my gadget?",
      answer:
        "You can register your gadget by adding its IMEI, images, receipt, and digital signature through our mobile app or website.",
    },
    {
      question: "Can I track my gadget?",
      answer:
        "Yes, once registered, you can track your gadget's location and status through our dashboard.",
    },
    {
      question: "How do I register my gadget?",
      answer:
        "You can register your gadget by adding its IMEI, images, receipt, and digital signature through our mobile app or website.",
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          FAQs
        </h2>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
          >
            {/* Question Header */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <RiArrowDropUpLine className="text-3xl text-gray-600 dark:text-gray-400 flex-shrink-0" />
              ) : (
                <RiArrowDropDownLine className="text-3xl text-gray-600 dark:text-gray-400 flex-shrink-0" />
              )}
            </button>

            {/* Answer - Only show when open */}
            {openIndex === index && (
              <div className="px-6 pb-6 pt-2">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqq;
