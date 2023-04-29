import Card from "./Card";
const Shop = () => {
  const toys = [
    {
      src: "/img/Octupus 1.png",
      id: 1,
      name: "Tentacle Terry",
      price: "19.99",
    },
    { src: "/img/Octupus 2.png", id: 2, name: "Octo Oscar", price: "19.99" },
    {
      src: "/img/Cthulhu 1.png",
      id: 3,
      name: "Huggable Horror",
      price: "24.99",
    },
    {
      src: "/img/Cthulhu 2.png",
      id: 4,
      name: "Whimsical Whispers",
      price: "24.99",
    },
    { src: "/img/Cthulhu 3.png", id: 5, name: "Cozy Kraken", price: "24.99" },
    { src: "/img/Owl 1.png", id: 6, name: "Wise Watchtower", price: "21.99" },
    { src: "/img/Owl 2.png", id: 7, name: "Funny Woodsy", price: "21.99" },
    { src: "/img/Owl 3.png", id: 8, name: "All Nighty", price: "22.99" },
    { src: "/img/Rabbit 1.png", id: 9, name: "Bunny Bonbon", price: "16.99" },
    {
      src: "/img/Rabbit 2.png",
      id: 10,
      name: "Cinnamon Cottontail",
      price: "16.99",
    },
    { src: "/img/Poodle 1.png", id: 11, name: "Pom Pom Pup", price: "27.99" },
    {
      src: "/img/Poodle 2.png",
      id: 12,
      name: "Fifi Fluffball",
      price: "19.99",
    },
  ];

  return (
    <div>
      <div className="products">
          {toys.map((toy) => {
            return (
              <Card
                toy_src={toy.src}
                toy_id={toy.id}
                toy_name={toy.name}
                toy_price={toy.price}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Shop;
