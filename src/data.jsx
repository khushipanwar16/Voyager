// import images
import DestinationImg1 from "./assets/images/dest1.png";
import DestinationImg2 from "./assets/images/dest2.png";
import DestinationImg3 from "./assets/images/dest3.png";

// import icons
import ServiceIcon1 from "./assets/images/service-icon-1.png";
import ServiceIcon2 from "./assets/images/service-icon-2.png";
import ServiceIcon3 from "./assets/images/service-icon-3.png";

export const serviceData = [
  {
    icons: ServiceIcon1,
    title: "All-in-One Travel Platform",
    text: <p style={{ textAlign: 'justify' }}>"Voyager simplifies travel by providing destination exploration, flight bookings, accommodations, and activities in one place."</p>
  },
  {
    icons: ServiceIcon2,
    title: "Up-to-Date Pricing Info ",
    text: <p style={{ textAlign: 'justify' }}>"Enjoy accurate, up-to-date information on flights and accommodations for seamless booking experiences."</p>
  },
  {
    icons: ServiceIcon3,
    title: " Highlight Hidden Gems",
    text: <p style={{ textAlign: 'justify' }}> "Discover lesser  known destinations that offer unique experiences beyond typical tourist spots."</p>
  },
  
];

export const destinationData = [
  {
    image: DestinationImg1,
    title: "Lofoten Islands, Norway",
    text:<p style={{ textAlign: 'justify' }}>"A breathtaking archipelago known for dramatic peaks, secluded beaches, and rich outdoor adventures."</p> 
  },
  {
    image: DestinationImg2,
    title: "Matera, Italy",
    text: <p style={{ textAlign: 'justify' }}>"A UNESCO World Heritage Site famed for its ancient cave dwellings and captivating historical atmosphere."</p> 
  },
  {
    image: DestinationImg3,
    title: "Socotra Island, Yemen",
    text: <p style={{ textAlign: 'justify' }}>"An untouched paradise with unique biodiversity and stunning landscapes, often called the Galápagos of the Indian Ocean."</p> 
  },
];
