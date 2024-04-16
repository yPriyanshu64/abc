import React from "react";
import Header from "../Header/Header";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123"
            title="Honor MagicBook 14, AMD Ryzen 5 5500U 14-inch (35.56 cm) FHD IPS Anti-Glare Thin and Light Laptop (16GB/512GB PCIe SSD/Windows 11/Fingerprint Login/Metal Body/Backlit KB/1.38Kg), Gray, NobelM-WFQ9AHNE"
            price={(40, 990)}
            rating={5}
            image="https://m.media-amazon.com/images/I/71tHNTGasKL._SX569_.jpg"
          />
          <Product
            id="1234"
            title="Set Wet Hair Wax For Men - Matte Wax, 60g | Matte Look, Strong Hold, Restylable Anytime, Easy Wash Off | No Paraben, No Sulphate, No Alcohol"
            price={133}
            rating={5}
            image="https://m.media-amazon.com/images/I/41T1jHxLuHL._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1235"
            title="Redmi 10A (Charcoal Black, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster"
            price={(8, 590)}
            rating={5}
            image="https://m.media-amazon.com/images/I/41WpD4fqT4L._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="1236"
            title="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
            price={(18, 999)}
            rating={5}
            image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SX679_.jpg"
          />
          <Product
            id="1237"
            title="New Fastrack Reflex Beat+ 1.69” UltraVU Display|500 Nits Brightness|60 Sports Modes|24*7 Heart Rate Monitor|SpO2 Monitor|Sleep Tracker|IP68 Water Resistant|Music & Camera Control"
            price={(1, 695)}
            rating={5}
            image="https://m.media-amazon.com/images/I/71E-b8o-1hL._UL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1238"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={499}
            rating={5}
            image="https://m.media-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
