import React from "react";
import { createBrowserRouter, ScrollRestoration, RouterProvider, Outlet } from "react-router-dom";

// --- Website Imports ---
import WebsiteNavbar from "./website/common/Navbar";
import WebsiteFooter from "./website/common/Footer";
import Home from "./website/page/home/Home";
import ContactUs from "./website/page/contact/Contact";
import AboutPage from "./website/page/about/About-us";
import BlogPage from "./website/page/blog/Blog";
import BlogDetails from "./website/page/blog/Blogdetails";
import EnquiryPopup from "./website/components/Enquiryform";
import InsurancePage from "./website/page/insurance/Insurance";
import PrivacyPolicy from "./website/page/privacy-policy/Privacy-Policy";
import RefundPolicy from "./website/page/refund-policy/Refund-Policy";
import TermsConditions from "./website/page/term-condition/Terms-conditions";
import Services from "./website/page/services/Services";
import ServicesDetail from "./website/page/services/Servicesdetails";
import Join from "./website/page/join-as-retailer/Join-as-retailer";
import Joins from "./website/page/join-as-distributor/Join-as-distributor";

// --- Admin Imports ---
import AdminLayout from './admin/components/Layout';
import Dashboard from './admin/pages/Dashboard';
import AddUser from './admin/pages/AddUser';
import AllMembers from './admin/pages/AllMembers';
import KycRequested from './admin/pages/KycRequested';
import CommissionPlans from './admin/pages/CommissionPlans';
import FundRequest from './admin/pages/FundRequest';
import Aeps from './admin/pages/Aeps';
import MoneyTransfer from './admin/pages/MoneyTransfer';
import CreditCardBill from './admin/pages/CreditCardBill';
import BankVerification from './admin/pages/BankVerification';
import NsdlPanApply from './admin/pages/NsdlPanApply';
import CreditCardApply from './admin/pages/CreditCardApply';

const WebsiteLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <WebsiteNavbar />
      <Outlet />
      <WebsiteFooter />
      {/* Optional: Enquiry Popup globally */}
      <EnquiryPopup />
    </>
  );
};

const router = createBrowserRouter([
  // Website Routes
  {
    element: <WebsiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/insurance", element: <InsurancePage /> },
      { path: "/join-as-retailer", element: <Join /> },
      { path: "/join-as-distributor", element: <Joins /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/blog/:id", element: <BlogDetails /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:id", element: <ServicesDetail /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/refund-policy", element: <RefundPolicy /> },
      { path: "/term-condition", element: <TermsConditions /> },
    ],
  },

  // Admin Login Route (standalone) - temporarily disabled
  // {
  //   path: "/login",
  //   element: <Login />,
  // },

  // Admin Layout Routes
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "add-member", element: <AddUser /> },
      { path: "all-members", element: <AllMembers /> },
      { path: "kyc-requested", element: <KycRequested /> },
      { path: "commission-plans", element: <CommissionPlans /> },
      { path: "fund-request", element: <FundRequest /> },
      { path: "assisted-banking/aeps", element: <Aeps /> },
      { path: "assisted-banking/dmt", element: <MoneyTransfer /> },
      { path: "bbps/credit-card", element: <CreditCardBill /> },
      { path: "bank-verification", element: <BankVerification /> },
      { path: "nsdl-pan", element: <NsdlPanApply /> },
      { path: "credit-card-apply", element: <CreditCardApply /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
