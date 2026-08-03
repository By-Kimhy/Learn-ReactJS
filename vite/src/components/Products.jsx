import React from "react";
import Card from "./Card.jsx";

const Products = () => {
  const watches = [
    {
      id: 1,
      img: "src/assets/img/1-1.webp",
      brand: "Apple",
      detail: "Apple Watch",
      price: "$300",
    },
    {
      id: 2,
      img: "src/assets/img/2-1.webp",
      brand: "Samsung",
      detail: "Samsung Watch",
      price: "$388",
    },
    {
      id: 3,
      img: "src/assets/img/3-1.webp",
      brand: "Samsung",
      detail: "Fitbit Watch",
      price: "$399",
    },
  ];

  const filteredWatches = watches.filter((watch) => watch.brand === "Samsung");
  console.log(filteredWatches);
  return (
    // <div>
    //     {watches.map((watch) => <Card img={watch.img} brand={watch.brand} detail={watch.detail} price={watch.price} />)}
    // </div>
    <div>
      {filteredWatches.map(({ img, brand, detail, price, id }) => {
        return (
          <Card
            key={id}
            img={img}
            brand={brand}
            detail={detail}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default Products;
