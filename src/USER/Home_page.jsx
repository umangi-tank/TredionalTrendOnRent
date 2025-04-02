import FashionUniverse from "./fashion_universe";
import Footer from "./footer";
import Header from "./header";
import Hero_section from "./hero_section";
import OurStory from "./our_story";
import CarouselWithHoverEffect from "./CarouselWithHoverEffect";
import Our_Team from "./Our_Team";

function Home() 
{
  return (
    <>
      <Header />
      <Hero_section />
      <CarouselWithHoverEffect />
      <OurStory />
      <Our_Team />
      <FashionUniverse />
      <Footer />
      </>
  );
}
//HERE
export default Home;
