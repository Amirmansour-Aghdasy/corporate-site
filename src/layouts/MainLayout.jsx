import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="container min-h-screen pt-5">
      <Navbar />
      <div className="flex flex-col justify-center gap-5 py-5">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
