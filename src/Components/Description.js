import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// this is for the description of each plush toy
const Description = (props) => {
  const { id } = useParams();
  const { cartDetail, setCartDetail, cartNum, setCartNum } = props;
  
  const description = [
    {
      id: 1,
      desp: "Meet Tentacle Terry - a friendly plush toy with eight squishy tentacles, big expressive eyes, and a winning smile. Perfect for imaginative play or as a decorative addition to any ocean-themed room, he's a must-have for marine life enthusiasts!",
    },
    {
      id: 2,
      desp: "Introducing Octo Oscar, the perfect plush toy for lovers of all things oceanic! With his bright colors and soft, squishy tentacles, Octo Oscar is sure to delight and entertain children and adults alike. Whether you're looking for a cuddly companion or a fun addition to your ocean-themed decor, Octo Oscar is the perfect choice.",
    },
    {
      id: 3,
      desp: "Introducing Huggable Horror, the plush toy that combines the thrill of fright with the comfort of a cuddle! With its adorably spooky design, soft and huggable texture, and mischievous grin, Huggable Horror is the perfect companion for those who love a touch of darkness. Whether you want a unique addition to your toy collection or a playful scare, Huggable Horror is ready to bring a thrillingly delightful experience to your embrace.",
    },
    {
      id: 4,
      desp: "Meet Whimsical Whispers, the enchanting plush toy that will spark your child's imagination and creativity! With its magical appearance and gentle expression, Whimsical Whispers is the perfect companion for any young dreamer. Whether your child wants to go on a fairy tale adventure or simply have a friend to confide in, Whimsical Whispers is always ready to listen and inspire.",
    },
    {
      id: 5,
      desp: "Meet Cozy Kraken, the cuddliest creature of the sea! With its soft and fluffy texture, adorable expression, and playful tentacles, Cozy Kraken is sure to become your child's new best friend. Whether your little one wants a bedtime companion or a toy for imaginative play, Cozy Kraken is ready to wrap its arms around them and provide endless snuggles.",
    },
    {
      id: 6,
      desp: "Introducing Wise Watchtower, the owl plush toy that will captivate you with its wisdom and charm! With its majestic appearance, captivating eyes, and super-soft feathers, Wise Watchtower is the perfect companion for any nature lover or owl enthusiast. Whether you want to cuddle up with a wise old friend or add a touch of forest magic to your room, Wise Watchtower is ready to bring the wisdom of the woods to your embrace.",
    },
    {
      id: 7,
      desp: "Introducing Funny Woodsy, the silly and cuddly plush toy that's perfect for imaginative playtime! With his colorful outfit, goofy expression, and soft and furry texture, Funny Woodsy is sure to be your child's new favorite playmate. Whether your little one wants to go on a wild adventure or simply have a silly companion by their side, Funny Woodsy is ready to bring hours of laughter and fun.",
    },

    {
      id: 8,
      desp: "Introducing All Nighty, the adorable and cozy plush toy that's perfect for snuggles and sweet dreams! With her sleepy expression, soft and plush texture, and cozy pajamas, All Nighty is the perfect bedtime companion for your little one. Whether your child needs a comforting friend to help them drift off to sleep or a soft and cuddly toy for peaceful dreaming, All Nighty is ready to bring warmth and comfort to their night.",
    },
    {
      id: 9,
      desp: "Introducing Bunny Bonbon, the sweet and huggable plush toy that will hop right into your heart! With its adorable floppy ears, fluffy tail, and soft velvety fur, Bunny Bonbon is the perfect cuddly companion for children and bunny enthusiasts of all ages. Whether you want a snuggle buddy for nap time or a delightful friend for imaginative play, Bunny Bonbon is ready to bring joy and warmth to your world.",
    },
    {
      id: 10,
      desp: "Meet Cinnamon Cottontail, the charming and adorable plush bunny that's sure to capture your heart! With her soft and velvety fur, delicate pink nose, and signature cottontail, Cinnamon Cottontail is the perfect cuddly friend for any bunny lover. Whether you want a snuggly companion for nap time or a playful friend for imaginative adventures, Cinnamon Cottontail is ready to bring warmth and comfort to your embrace.",
    },
    {
      id: 11,
      desp: "Introducing Pom Pom Pup, the fluffy and lovable plush toy that's sure to wag its way into your heart! With its soft and fluffy fur, cute button nose, and adorable pom-pom tail, Pom Pom Pup is the perfect cuddly companion for dog lovers of all ages. Whether you want a snuggle buddy for nap time or a playful friend for imaginative adventures, Pom Pom Pup is ready to bring joy and warmth to your world.",
    },
    {
      id: 12,
      desp: "Introducing Fifi Fluffball, the irresistibly cute and fluffy plush toy that will steal your heart! With her silky soft fur, adorable pink bow, and a playful twinkle in her eyes, Fifi Fluffball is the perfect companion for snuggles and smiles. Whether you want a cuddly friend for nap time or a delightful partner for imaginative play, Fifi Fluffball is ready to bring endless joy and fluffy fun to your world.",
    },
  ];

  const toy_description = description.find((toy) => toy.id.toString() === id).desp;
  const toy_selected = cartDetail.find((toy) => toy.id.toString() === id);
  const toy_name = toy_selected.name;
  const toy_src = toy_selected.src;
  const toy_price = toy_selected.price;

  const [count, setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  

  const updateCart = (id, count) => {
    const newArray = [...cartDetail];
    const productIndex = cartDetail.findIndex((item) => item.id.toString() === id);
    
      newArray[productIndex].bought = true;
    
      newArray[productIndex].count += count;
    
    setCartDetail(newArray);
    console.log(newArray)
    setCartNum(cartNum + count);
  };

  
  const addToCart = () => {
    updateCart(id, count);
  }

  return (
    <div className="description">
      <div className="img-intro">
        <img src={process.env.PUBLIC_URL + toy_src} alt="A plush toy" />
        <p>{toy_description}</p>
      </div>
      <div className="description-detail">
        <p className="detail-toy-name">{toy_name}</p>
        <p className="detail-toy-price">{"$"+toy_price}</p>
        <p style={{ fontSize: '2em' }}>🧸 🐰 🐶 🐻 🦊 🐻‍❄️ 🐨 🐙 🦁 🐯</p>
        <p className="free-ship-label">Free shipping over $65 ❤️</p>
        <p className="cart-count">
          <button onClick={handleDecrement} className="cart-count-icon">
            ➖
          </button>
          {count}
          <button onClick={handleIncrement} className="cart-count-icon">
            ➕
          </button>
        </p>
        <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default Description;
