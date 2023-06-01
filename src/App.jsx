import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';
import Showcase from './components/Showcase';
import Categories from './components/Categories';
import FullSectionBanner from './components/FullSectionBanner';
import { fullBanners } from './constants/data';
import FiftyBanners from './components/FiftyBanners';
import Stories from './components/Stories';
import Experience from './components/Experience';

function App() {

  return (
    <>
      <Header />
      <VideoPlayer
      video="//media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Mobile"
      videoMobile="//media.tiffany.com/is/content/tiffanydm/ZOE_HARDWEAR_LIKEYOUMEANIT_Desktop-1"
      title="This Is Tiffany HardWear"
      subtitle="Our brand ambassadors redefine Tiffany HardWear in our latest campaign."
      link="#"
      buttonText="Shop the Collection"
      customClass="float"
      />
      <Showcase />
      <FiftyBanners />
      <Categories />
      <section>
      <VideoPlayer
        video="//media.tiffany.com/is/content/tiffanydm/TiffanyLandmark_6sCutdownFloral_1920x1080"
        videoMobile="//media.tiffany.com/is/content/tiffanydm/TiffanyLandmark_6sCutdownFloral_1080x1080"
        title="Now Open: The Landmark"
        subtitle="A legacy of brilliance continues with The Landmark. Discover a new Tiffany & Co. for a new era at 727 Fifth Avenue, New York."
        link="#"
        buttonText="Learn More"
        customClass="no-float"
      />
      </section>
      <Stories />
        {fullBanners.map((item, index) => {
          return (
            <FullSectionBanner 
            key={index}
            mobileBanner={item.backgroundMobile}
            desktopBanner={item.backgroundDesktop}
            bannerTitle={item.title}
            bannerSubtitle={item.subtitle}
            bannerLink={item.link}
            btnText={item.buttonText}
            position={item.position}
            />
          )
        })}
       <Experience />
      <Footer /> 
    </>
  )
}

export default App
