import { MainLayout } from "../layouts";
import { Sliders, Services, ContactUs, LastPosts } from "../components";

const Home = () => {
  return (
    <MainLayout>
      <Sliders />
      <Services />
      <ContactUs />
      <LastPosts />
    </MainLayout>
  );
};

export default Home;
