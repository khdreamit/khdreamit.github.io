import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <>
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/website" element={<Website />} />
        <Route path="/about" element={<About />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/google" element={<Google />} />
        <Route path="/amazon" element={<Amazon />} />
        <Route path="/socialMediaManage" element={<SocialMediaManage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/meeting" element={<ClientMeeting />} />
        <Route path="/review" element={<ClientReview />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auditplan" element={<AuditPlan />} />
        <Route path="/onpage" element={<OnPageSeo />} />
        <Route path="/technical" element={<TechnicalSeo />} />
        <Route path="/offpage" element={<OffPageSeo />} />
        <Route path="/local" element={<LocalSeo />} />
        <Route path="/shopify" element={<Shopify />} />
      </Routes>

      
    </>
  );
}

export default App;