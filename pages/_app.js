import '../styles/globals.css'
import Navbar from "../components/structure/navbar/Navbar";
import Footer from "../components/structure/footer/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
