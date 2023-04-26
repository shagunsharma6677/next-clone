import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Components/Auth-Router/AllRouter";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      <AllRoutes/>
      {/* <Cards/> */}
      {/* <Access_cards /> */}
      {/* <Flash_card/> */}
      {/* <Shop/> */}
      {/* <Banner/> */}
      {/* <video autoPlay muted loop>
        <source src={our} type="video/mp4" />
      </video> */}
      {/* <Grid_Banner/> */}
      {/* <Ipad/> */}
      {/* <Iphone/> */}
      {/* <Watch/> */}
      {/* <Tv/> */}
      {/* <Music/> */}
      {/* <Anim_Page/> */}
      {/* <CarouselCards/> */}
      <Footer/>
  
      
    </> 
  );
}

export default App;
