import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import { AppContextProvider } from "../context/AppContext";
import { MainLayout } from "../layouts";
import { router } from "../routes";

const AppContainer = () => {
  return (
    <HelmetProvider>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </HelmetProvider>
  );
};

export default AppContainer;
