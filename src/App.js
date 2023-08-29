
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from './Components/Pages/Blog'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
