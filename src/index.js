import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Buy from "./pages/Buy";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Merch from "./pages/Merch";
import UnderConstruction from "./pages/UnderConstruction";
import reportWebVitals from './reportWebVitals';

const tiktoklink = 'https://www.tiktok.com/@sarcasticbrewing';
const iglink = 'https://www.instagram.com/sarcasticbrewing';

export const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout iglink={iglink} tiktoklink={tiktoklink} openInNewTab={openInNewTab}/>}>
          <Route index element={<Home iglink={iglink} tiktoklink={tiktoklink} openInNewTab={openInNewTab}/>} />
          <Route path="about" element={<About />} />
          <Route path="merch" element={<Merch />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="buy" element={<Buy />} />
          <Route path="construction" element={<UnderConstruction />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
