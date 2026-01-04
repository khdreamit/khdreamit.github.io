import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import App from './App.jsx'
import { HashRouter, Route, Routes } from 'react-router';
import About from '../src/components/About/About.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Youtube from './components/Youtube/Youtube.jsx';
import Website from './components/Website/Website.jsx';
import Facebook from './components/Facebook/Facebook.jsx';
import Google from './components/Google/Google.jsx';
import Amazon from './components/Amazon/Amazon.jsx';
import SocialMediaManage from './components/SocialMediaManage/SocialMediaManage.jsx';
import Skills from './components/Skills/Skills.jsx';
import ClientMeeting from './components/ClientMeeting/ClientMeeting.jsx';
import ClientReview from './components/ClientReview/ClientReview.jsx';
import Contact from './components/Contact/Contact.jsx';
import AuditPlan from './components/AuditPlan/AuditPlan.jsx';
import OnPageSeo from './components/onPage/OnPageSeo.jsx';
import TechnicalSeo from './components/TechnicalSeo/TechnicalSeo.jsx';
import OffPageSeo from './components/OffPageSeo/OffPageSeo.jsx';
import LocalSeo from './components/LocalSeo/LocalSeo.jsx';
import Shopify from './components/Shopify/Shopify.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Routes>
      <Route path='/' element= {<App />} />
      <Route path='/portfolio' element= {<Portfolio />} />
      <Route path='/youtube' element= {<Youtube />} />
      <Route path='/website' element= {<Website />} />
      <Route path='/about' element= {<About />} />      
      <Route path='/facebook' element= {<Facebook />} />
      <Route path='/google' element= {<Google />} />
      <Route path='/amazon' element= {<Amazon />} />      
      <Route path='/socialMediaManage' element= {<SocialMediaManage />} />
      <Route path='/skills' element= {<Skills />} />
      <Route path='/meeting' element= {<ClientMeeting />} />
      <Route path='/review' element= {<ClientReview />} />
      <Route path='/contact' element= {<Contact />} />
      <Route path='/auditplan' element= {<AuditPlan />} />
      <Route path='/onpage' element= {<OnPageSeo />} />
      <Route path='/technical' element= {<TechnicalSeo />} />
      <Route path='/offpage' element= {<OffPageSeo />} />
      <Route path='/local' element= {<LocalSeo />} />
      <Route path='/shopify' element= {<Shopify />} />
      
      
      
      
      
               
    </Routes>
    </HashRouter>
    
  </StrictMode>,
)
