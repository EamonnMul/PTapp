import React from 'react'
import Carousel from 'react-elastic-carousel';
import Hero from '../Components/Hero';
import Navbar from '../Components/navbar';
import Slider from '../Components/Slider';

function LandingPage() {
const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={''} />
      <Slider
        imageSrc={''}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={''}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
  );
}

export default LandingPage
