import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Features, Home, NoPage } from "./pages";
import { ScrollToTop } from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          
      </BrowserRouter>
    </div>
  )
}

export default App
