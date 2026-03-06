import React, { useState } from "react";
import {
  Shield,
  Settings,
  Lock,
  Cookie,
  Globe,
  User,
  RefreshCw,
  Mail,
  Phone,
  ChevronRight,
  Receipt,
  Eye,
  Bell,
  FileText,
  Clock,
  Sparkles,
  CreditCard,
  Building,
  Zap,
  Smartphone,
  Calendar,
  XCircle
} from "lucide-react";

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      id: 1,
      icon: <CreditCard className="w-6 h-6" />,
      title: "Digital Payment Transactions (POS / Collect)",
      subtitle: "Instant processing and bank reversals",
      content: [
        "All payment transactions are processed instantly through banking networks.",
        "Once a transaction is successfully completed, it cannot be reversed by AbheePay.",
        "In case of wrong payment made by a customer, the customer must contact their bank directly.",
        "AbheePay is not responsible for incorrect payments made due to customer error."
      ],
    },
    {
      id: 2,
      icon: <Clock className="w-6 h-6" />,
      title: "Failed or Pending Transactions",
      subtitle: "When a transaction fails but the amount is debited",
      content: [
        "The amount is generally auto-reversed by the bank.",
        "Refund timeline is usually 3–7 working days (depending on bank policy).",
        "If refund is delayed beyond this period, users should contact their respective bank first.",
        "AbheePay support can assist by providing transaction reference details."
      ],
    },
    {
      id: 3,
      icon: <Building className="w-6 h-6" />,
      title: "MATM / AEPS Transactions",
      subtitle: "Cash withdrawals and banking transactions",
      content: [
        "Cash withdrawal and banking transactions once successfully processed cannot be refunded.",
        "In case of failed transactions with debit, refund will be processed by the bank within standard settlement timelines.",
        "AbheePay is not responsible for delays caused by banking partners."
      ],
    },
    {
      id: 4,
      icon: <Zap className="w-6 h-6" />,
      title: "Recharge & BBPS Services",
      subtitle: "Mobile and utility bill payments",
      content: [
        "Mobile recharge and bill payment transactions are final once processed.",
        "Refunds are not applicable after successful recharge or bill payment.",
        "In case of failed recharge with amount debited, refund will be processed automatically as per bank timelines."
      ],
    },
    {
      id: 5,
      icon: <Smartphone className="w-6 h-6" />,
      title: "Soundbox & POS Device Policy",
      subtitle: "Purchase, rental and replacement rules",
      content: [
        {
          type: "Device Purchase",
          desc: "Devices once delivered are non-refundable. Replacement is allowed only for manufacturing defects. Defect must be reported within 7 days of delivery."
        },
        {
          type: "Device Rental",
          desc: "Rental charges are non-refundable. Security deposit (if applicable) will be refunded after device return in good condition. Damaged devices may attract repair or replacement charges."
        }
      ],
    },
    {
      id: 6,
      icon: <CreditCard className="w-6 h-6" />,
      title: "Loan & Credit Card Services",
      subtitle: "AbheePay as a referral partner",
      content: [
        "AbheePay acts as a referral or distribution partner for banks/NBFCs.",
        "Loan processing fees charged by lending partners are non-refundable.",
        "Loan approval and disbursal are subject to partner policies.",
        "Credit card issuance and related charges are governed by the issuing bank.",
        "AbheePay does not guarantee loan approval."
      ],
    },
    {
      id: 7,
      icon: <Shield className="w-6 h-6" />,
      title: "Insurance Products",
      subtitle: "Premium refunds and free-look periods",
      content: [
        "Insurance premium refunds depend on the cancellation policy of the respective insurance company.",
        "Free-look period (if applicable) will be governed by insurer terms.",
        "AbheePay is not responsible for insurer claim decisions."
      ],
    },
    {
      id: 8,
      icon: <FileText className="w-6 h-6" />,
      title: "Service Charges & Subscription Fees",
      subtitle: "Activation and processing fees",
      content: [
        "Activation fees, Platform fees, Processing fees, and Subscription charges are non-refundable unless there is a verified technical error from AbheePay’s side."
      ],
    },
    {
      id: 9,
      icon: <Calendar className="w-6 h-6" />,
      title: "Refund Processing Timeline",
      subtitle: "When to expect an approved refund",
      content: [
        "If a refund is approved, it will be processed within 7–10 working days.",
        "Refund will be credited to the original payment method.",
        "Processing time may vary depending on banking partners."
      ],
    },
    {
      id: 10,
      icon: <XCircle className="w-6 h-6" />,
      title: "Cancellation Policy",
      subtitle: "Service and subscription cancellation",
      content: [
        "Services once activated cannot be cancelled.",
        "Subscription-based services must be cancelled before renewal date.",
        "Cancellation requests must be submitted through official support channels."
      ],
    },
    {
      id: 11,
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Policy Updates",
      subtitle: "Modifications and revisions",
      content: [
        "AbheePay reserves the right to modify this Refund Policy at any time. Updated policies will be published on this page."
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1E] py-12 px-4 sm:px-6 lg:py-20 relative overflow-hidden mt-[80px]">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E2A4A_1px,transparent_1px),linear-gradient(to_bottom,#1E2A4A_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D3CD] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1E2A4A]/50 backdrop-blur-sm border border-[#00D3CD]/20 rounded-full px-4 py-2 mb-6">
            <Receipt className="w-4 h-4 text-[#00D3CD]" />
            <span className="text-xs font-medium text-[#00D3CD] tracking-wider">
              ABHEEPAY POLICIES
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00D3CD] via-white to-[#00D3CD] bg-clip-text text-transparent animate-gradient">
              Refund Policy
            </span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Effective Date: This Refund Policy governs the use of services provided by <span className="text-[#00D3CD] font-semibold">AbheePay</span>, including POS services, MATM, BBPS, recharge services, loan distribution, credit card services, and other financial products.
          </p>

          <p className="text-gray-500 max-w-3xl mx-auto mt-4">
            <span className="text-gray-400">
              By using our services, you agree to this Refund Policy.
            </span>
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left column - Navigation/Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#151F33]/80 backdrop-blur-sm border border-[#2A3A5A] rounded-2xl p-6 sticky top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#00D3CD]/10 rounded-xl flex items-center justify-center">
                  <Receipt className="w-5 h-5 text-[#00D3CD]" />
                </div>
                <h3 className="text-white font-semibold">Policy Sections</h3>
              </div>

              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onMouseEnter={() => setActiveSection(section.id)}
                    onMouseLeave={() => setActiveSection(null)}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-[#1E2A4A] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeSection === section.id
                            ? "bg-[#00D3CD] text-black"
                            : "bg-[#1E2A4A] text-gray-400"
                          }`}
                      >
                        {section.icon}
                      </div>
                      <span
                        className={`text-sm text-left transition-colors duration-300 leading-tight ${activeSection === section.id
                            ? "text-[#00D3CD]"
                            : "text-gray-400"
                          }`}
                      >
                        {section.title}
                      </span>
                    </div>
                    <ChevronRight
                      className={`flex-shrink-0 w-4 h-4 transition-all duration-300 ${activeSection === section.id
                          ? "text-[#00D3CD] translate-x-1"
                          : "text-gray-600"
                        }`}
                    />
                  </button>
                ))}
              </div>

              {/* Quick stats */}
              <div className="mt-8 pt-6 border-t border-[#2A3A5A]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">7-10</div>
                    <div className="text-xs text-gray-500">Days for Refunds</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-xs text-gray-500">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Content cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* dynamic content cards */}
            {sections.map((section) => (
              <div
                key={section.id}
                className="group relative"
                onMouseEnter={() => setActiveSection(section.id)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-[#00D3CD] to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur ${activeSection === section.id ? "opacity-75" : ""
                    }`}
                ></div>

                <div className="relative bg-[#151F33] backdrop-blur-sm border border-[#2A3A5A] rounded-2xl p-8 hover:bg-[#1A253C] transition-all duration-500 flex flex-col h-full z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br from-[#00D3CD]/20 to-transparent flex flex-shrink-0 items-center justify-center group-hover:scale-110 transition-transform duration-300 ${activeSection === section.id ? "from-[#00D3CD]/40" : ""
                        }`}
                    >
                      <div className="text-[#00D3CD] group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                        {section.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00D3CD] transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-500">{section.subtitle}</p>
                    </div>

                    <div className="text-6xl font-bold text-[#2A3A5A] opacity-20 group-hover:opacity-30 transition-opacity flex-shrink-0">
                      {String(section.id).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="space-y-4 relative z-20">
                    {Array.isArray(section.content) ? (
                      section.content.map((item, i) =>
                        typeof item === "string" ? (
                          <div key={i} className="flex items-start gap-3 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#00D3CD] mt-2 group-hover/item:scale-150 transition-transform flex-shrink-0"></div>
                            <p className="text-gray-300 group-hover/item:text-gray-200 transition-colors">
                              {item}
                            </p>
                          </div>
                        ) : (
                          <div
                            key={i}
                            className="bg-[#1E2A4A]/50 rounded-xl p-4 hover:bg-[#1E2A4A] transition-all duration-300"
                          >
                            <h4 className="text-[#00D3CD] font-semibold mb-2 flex items-center gap-2">
                              <span className="w-1 h-4 bg-[#00D3CD] rounded-full"></span>
                              {item.type}
                            </h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        )
                      )
                    ) : (
                      <p className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                  </div>

                  <div className="absolute bottom-4 right-4 opacity-5 z-0">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            ))}

            {/* Contact section */}
            <div className="bg-gradient-to-br from-[#1E2A4A] to-[#151F33] rounded-2xl p-8 border border-[#2A3A5A] relative overflow-hidden mt-8">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00D3CD] rounded-full filter blur-3xl opacity-10"></div>

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Bell className="w-6 h-6 text-[#00D3CD]" />
                Customer Support Contact
              </h3>

              <p className="text-gray-400 mb-6">
                If you have any questions about our Refund Policy or need assistance regarding a failed transaction, please contact us.
              </p>

              <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="group/contact">
                  <div className="bg-[#1A253C] rounded-xl p-5 hover:bg-[#1E2A4A] transition-all duration-300 border border-[#2A3A5A] hover:border-[#00D3CD]/30 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#00D3CD]/10 rounded-lg flex items-center justify-center group-hover/contact:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-[#00D3CD]" />
                      </div>
                      <span className="text-gray-400">Email Support</span>
                    </div>
                    <a
                      href="mailto:care@abheepay.in"
                      className="text-white font-semibold text-lg hover:text-[#00D3CD] transition-colors break-all"
                    >
                      care@abheepay.in
                    </a>
                  </div>
                </div>

                <div className="group/contact">
                  <div className="bg-[#1A253C] rounded-xl p-5 hover:bg-[#1E2A4A] transition-all duration-300 border border-[#2A3A5A] hover:border-[#00D3CD]/30 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#00D3CD]/10 rounded-lg flex items-center justify-center group-hover/contact:scale-110 transition-transform">
                        <Phone className="w-5 h-5 text-[#00D3CD]" />
                      </div>
                      <span className="text-gray-400">Phone Support</span>
                    </div>
                    <a
                      href="tel:+918860037218"
                      className="text-white font-semibold text-lg hover:text-[#00D3CD] transition-colors"
                    >
                      +91 88600 37218
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RefundPolicy;
