
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from './Components/Pages/Blog'
import BlogReadmore from './Components/Pages/Blog-Readmore'
import FAQ from './Components/Pages/FAQ'
import ContactUS from './Components/Pages/ContactUs';
import TermCondition from './Components/Pages/TermCondition';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import Offer from './Components/Pages/Offer';
import Reviews from './Components/Pages/Reviews'
import Periodic from './Components/Service/ServiceHeader'
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
