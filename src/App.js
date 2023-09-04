
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from './Components/Pages/Blog'
import BlogReadmore from './Components/Pages/Blog-Readmore'
import FAQ from './Components/Pages/FAQ'
import ContactUS from './Components/Pages/ContactUs';
import TermCondition from './Components/Pages/TermCondition';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import Offer from './Components/Pages/Offer';
import Reviews from './Components/Pages/Reviews';
import Periodic from './Components/Service/PeriodicService';
import ServiceRepair from './Components/Service/ServiceRepair';
import Batteries from './Components/Service/Batteries';
import Tyres  from './Components/Service/Tyres';
import Denting from './Components/Service/DentingRepairing';
import Detailing from './Components/Service/DetailingService';
import SPA from './Components/Service/ServiceSpa';
import Wind from './Components/Service/WindShield';
import AddCart from './Components/Service/AddCart';
import Inspection from './Components/Service/Inspection'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/blog-article" element={<BlogReadmore/>} />
          <Route path="/faq" element={<FAQ/>} />
          <Route path="/contactUs" element={<ContactUS/>} />
          <Route path="/term-condition" element={<TermCondition/>} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
          <Route path="/offer" element={<Offer/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/periodic-services" element={<Periodic/>} />
          <Route path="/services-repair" element={<ServiceRepair/>} />
          <Route path="/batteries" element={<Batteries/>} />
          <Route path="/tyres" element={<Tyres/>} />
          <Route path="/denting-repair" element={<Denting/>} />
          <Route path="/detailing-service" element={<Detailing/>} />
          <Route path="/spa-service" element={<SPA/>} />
          <Route path="/wind-sheild" element={<Wind/>} />
          <Route path="/add-cart" element={<AddCart/>} />
          <Route path="/inspection" element={<Inspection/>} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
