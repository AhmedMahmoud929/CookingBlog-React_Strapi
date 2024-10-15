import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import RecipePage from "./views/RecipePage";
import BlogPage from "./views/BlogPage";
import ArticlePage from "./views/ArticlePage";
import ContactPage from "./views/ContactPage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "aos/dist/aos.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
