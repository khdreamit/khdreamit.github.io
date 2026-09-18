import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

// =====================================================
// Existing Components
// =====================================================

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Youtube from "./components/Youtube/Youtube";
import Website from "./components/Website/Website";
import Facebook from "./components/Facebook/Facebook";
import Google from "./components/Google/Google";
import Amazon from "./components/Amazon/Amazon";
import SocialMediaManage from "./components/SocialMediaManage/SocialMediaManage";
import Skills from "./components/Skills/Skills";
import ClientMeeting from "./components/ClientMeeting/ClientMeeting";
import ClientReview from "./components/ClientReview/ClientReview";
import Contact from "./components/Contact/Contact";
import AuditPlan from "./components/AuditPlan/AuditPlan";
import OnPageSeo from "./components/onPage/OnPageSeo";
import TechnicalSeo from "./components/TechnicalSeo/TechnicalSeo";
import OffPageSeo from "./components/OffPageSeo/OffPageSeo";
import LocalSeo from "./components/LocalSeo/LocalSeo";
import Shopify from "./components/Shopify/Shopify";
import Certificates from "./components/Certificates/Certificates";

// =====================================================
// Website Development Components
// =====================================================

import WebsiteRedesign from "./components/WebsiteRedesign/WebsiteRedesign";
import FrontendDevelopment from "./components/FrontendDevelopment/FrontendDevelopment";
import BackendDevelopment from "./components/BackendDevelopment/BackendDevelopment";
import FullStackDevelopment from "./components/FullStackDevelopment/FullStackDevelopment";
import LandingPage from "./components/LandingPage/LandingPage";
import EcommerceWebsite from "./components/EcommerceWebsite/EcommerceWebsite";


// =====================================================
// App
// =====================================================

function App() {
  const location = useLocation();

  // -----------------------------------------------------
  // Only these Website Development pages get Footer
  // from App.jsx.
  //
  // Other old pages already have their own Footer.
  // -----------------------------------------------------

  const websiteDevelopmentPaths = [
    "/website-redesign",
    "/frontend-development",
    "/backend-development",
    "/full-stack-development",
    "/landing-page",
    "/ecommerce-website",
  ];

  const isWebsiteDevelopmentPage =
    websiteDevelopmentPaths.includes(location.pathname);


  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />


      {/* =================================================
          SCROLL TO TOP
      ================================================= */}

      <ScrollToTop />


      {/* =================================================
          ROUTES
      ================================================= */}

      <Routes>

        {/* =================================================
            MAIN PAGES
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/youtube"
          element={<Youtube />}
        />

        <Route
          path="/website"
          element={<Website />}
        />


        {/* =================================================
            WEBSITE DEVELOPMENT
        ================================================= */}

        <Route
          path="/website-redesign"
          element={<WebsiteRedesign />}
        />

        <Route
          path="/frontend-development"
          element={<FrontendDevelopment />}
        />

        <Route
          path="/backend-development"
          element={<BackendDevelopment />}
        />

        <Route
          path="/full-stack-development"
          element={<FullStackDevelopment />}
        />

        <Route
          path="/landing-page"
          element={<LandingPage />}
        />

        <Route
          path="/ecommerce-website"
          element={<EcommerceWebsite />}
        />


        {/* =================================================
            ABOUT
        ================================================= */}

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/certificates"
          element={<Certificates />}
        />


        {/* =================================================
            MARKETING SERVICES
        ================================================= */}

        <Route
          path="/facebook"
          element={<Facebook />}
        />

        <Route
          path="/google"
          element={<Google />}
        />

        <Route
          path="/amazon"
          element={<Amazon />}
        />

        <Route
          path="/socialMediaManage"
          element={<SocialMediaManage />}
        />

        <Route
          path="/shopify"
          element={<Shopify />}
        />


        {/* =================================================
            SEO SERVICES
        ================================================= */}

        <Route
          path="/auditplan"
          element={<AuditPlan />}
        />

        <Route
          path="/onpage"
          element={<OnPageSeo />}
        />

        <Route
          path="/technical"
          element={<TechnicalSeo />}
        />

        <Route
          path="/offpage"
          element={<OffPageSeo />}
        />

        <Route
          path="/local"
          element={<LocalSeo />}
        />


        {/* =================================================
            CLIENT
        ================================================= */}

        <Route
          path="/meeting"
          element={<ClientMeeting />}
        />

        <Route
          path="/review"
          element={<ClientReview />}
        />


        {/* =================================================
            OTHER
        ================================================= */}

        <Route
          path="/skills"
          element={<Skills />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>


      {/* =================================================
          FOOTER
          
          Website Development pages:
          Footer comes from App.jsx.
          
          Other pages:
          Their existing Footer remains.
      ================================================= */}

      {isWebsiteDevelopmentPage && <Footer />}

    </>
  );
}

export default App;