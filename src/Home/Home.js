import React from "react";
import "./Home.css";
import Product from "../Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MTc0Y2M5Y2Mt/MTc0Y2M5Y2Mt-ZTMzMTk5Yjct-w1500._CB406837584_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id={1}
            title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition"
            price={26.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg"
          />
          <Product
            id={2}
            title="KitchenAid KSM180QHGSD Queen of Hearts Stand Mixer, 5 Qt, Passion Red"
            price={346.07}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71V2DtObsPL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={4}
            title="Logitech MX Master 3 Advanced Wireless Mouse - Graphite"
            price={99.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/614w3LuZTYL._AC_SX522_.jpg"
          />
          <Product
            id={3}
            title="All-new Ring Video Doorbell – Ring's #1 selling video doorbell – Satin Nickel – 2020 release"
            price={99.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71mlE7vPglL._SY355_.jpg"
          />
          <Product
            id={5}
            title="Costa Farms Money Tree Pachira, Medium Ships in Premium Ceramic Planter, 16-Inches Tall, Gift"
            price={31.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71vYvA467bL._AC_SY606_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="LG 34WN80C-B 34 inch 21:9 Curved UltraWide WQHD IPS Monitor with USB Type-C Connectivity sRGB 99% Color Gamut and HDR10 Compatibility, Black (2019)"
            price={548.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81WBbFOEHwL._AC_SX466_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
