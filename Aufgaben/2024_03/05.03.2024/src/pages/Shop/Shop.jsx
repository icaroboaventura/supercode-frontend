import "./Shop.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [megaData, setMegaData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setMegaData(data))
      .catch((err) => console.error("Fehler :-(", err));
  }, []);

  console.log(megaData);

  return (
    <>
      <h2>Shop</h2>
      <Link to="/">Welcome</Link>
      <section className="products">
        {megaData ? (
          megaData.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              <img src={item.image} alt="" />
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>Laden...</p>
        )}
      </section>
    </>
  );
};

export default Shop;
