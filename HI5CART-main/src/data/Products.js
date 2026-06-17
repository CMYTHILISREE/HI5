import wardrobe from "../assets/categories/wardrobe.png";
import shoe from "../assets/categories/shoe.png";
import kitchen from "../assets/categories/kitchen.png";
import bathroom from "../assets/categories/bathroom.png";
import bathroom1 from "../assets/categories/bathroom1.png";
import bathroom2 from "../assets/categories/bathroom2.png";
import shelf from "../assets/categories/shelf.png";
import home from "../assets/categories/home.png";
import organizer from "../assets/categories/organizer.png";
import organizer1 from "../assets/categories/organizer1.png";
import organizer2 from "../assets/categories/organizer2.png";
import stepBlack from "../assets/10 STEP black/listings/1.png";
import stepWhite from "../assets/10 step white/listings/1.png";
import step12Black from "../assets/12 step black/71eaHlAwHXL._SL1500_.jpg";
import step12White from "../assets/12 step white/listings/1.png";
import box4Blue from "../assets/4 BOX BLUE/1.png";
import box4HkPink from "../assets/4 BOX HK PINK/1.png";
import box4Pink from "../assets/4 BOX PINK/1.png";
import box8Green from "../assets/8 B0X GREEN/1.png";
import box8AnimalBlue from "../assets/8 BOX ANIMAL BLUE/listings/1.png";
import box8Blue from "../assets/8 BOX BLUE/1.png";
import box8Cat from "../assets/8 BOX CAT/listings/1.jpg";
import box8HkPink from "../assets/8 BOX HK PINK/1.png";
import box8Pink from "../assets/4 BOX PINK/1.png";
import dollmount from "../assets/dollmount shelf/product-jpeg-1000x1000.webp";
import elephantMount from "../assets/Elephant mount/plastic-elephant-shaped-storage-shelf-500x500.webp";

const getImages = (modules) =>
  Object.entries(modules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, { numeric: true }))
    .map(([path, image]) => ({ path, image }));

const fourBoxBlueImages = getImages(
  import.meta.glob("../assets/4 BOX BLUE/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const fourBoxHkPinkImages = getImages(
  import.meta.glob("../assets/4 BOX HK PINK/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const fourBoxPinkImages = getImages(
  import.meta.glob("../assets/4 BOX PINK/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const eightBoxGreenImages = getImages(
  import.meta.glob("../assets/8 B0X GREEN/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const eightBoxAnimalBlueImages = getImages(
  import.meta.glob("../assets/8 BOX ANIMAL BLUE/**/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const eightBoxBlueImages = getImages(
  import.meta.glob("../assets/8 BOX BLUE/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const eightBoxCatImages = getImages(
  import.meta.glob("../assets/8 BOX CAT/**/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const eightBoxHkPinkImages = getImages(
  import.meta.glob("../assets/8 BOX HK PINK/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const eightBoxPinkImages = getImages(
  import.meta.glob("../assets/8 BOX PINK/**/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const tenStepBlackImages = getImages(
  import.meta.glob("../assets/10 STEP black/**/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const tenStepWhiteImages = getImages(
  import.meta.glob("../assets/10 step white/**/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const twelveStepBlackImages = getImages(
  import.meta.glob("../assets/12 step black/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const twelveStepWhiteImages = getImages(
  import.meta.glob("../assets/12 step white/**/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const dollMountImages = getImages(
  import.meta.glob("../assets/dollmount shelf/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const elephantMountImages = getImages(
  import.meta.glob("../assets/Elephant mount/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" })
);

const flowerShelfImages = getImages(
  import.meta.glob("../assets/L shape corner shelf/{2.webp,Flower.webp}", { eager: true, import: "default" })
);

const hookShelfImages = getImages(
  import.meta.glob("../assets/L shape corner shelf/4 hook.jpeg", { eager: true, import: "default" })
);

const lShapeCornerShelfImages = getImages(
  import.meta.glob("../assets/L shape corner shelf/{1.jpg,1.webp,product-jpeg-1000x1000.webp,product-jpeg-1000x1000 (1).webp,product-jpeg.jpg,whatsapp-image-2025-05-15-at-3-55-36-pm-1000x1000.webp,combo.jpeg}", { eager: true, import: "default" })
);

const fourBoxProducts = [
  {
    id: 1000,
    name: "4 Box Blue Wardrobe",
    category: "4 Box Kids Wardrobe",
    price: 1099,
    image: fourBoxBlueImages[0].image,
    images: fourBoxBlueImages.map(({ image }) => image),
  },
  {
    id: 1001,
    name: "4 Box Hello Kitty Pink Wardrobe",
    category: "4 Box Kids Wardrobe",
    price: 1099,
    image: fourBoxHkPinkImages[0].image,
    images: fourBoxHkPinkImages.map(({ image }) => image),
  },
  {
    id: 1002,
    name: "4 Box Pink Wardrobe",
    category: "4 Box Kids Wardrobe",
    price: 1099,
    image: fourBoxPinkImages[0].image,
    images: fourBoxPinkImages.map(({ image }) => image),
  },
];

const eightBoxProducts = [
  {
    id: 1100,
    name: "8 Box Green Wardrobe",
    category: "8 Box Kids Wardrobe",
    price: 1999,
    image: eightBoxGreenImages[0].image,
    images: eightBoxGreenImages.map(({ image }) => image),
  },
  {
    id: 1101,
    name: "8 Box Animal Blue Wardrobe",
    category: "8 Box Kids Wardrobe",
    price: 1999,
    image: eightBoxAnimalBlueImages[0].image,
    images: eightBoxAnimalBlueImages.map(({ image }) => image),
  },
  {
    id: 1102,
    name: "8 Box Blue Wardrobe",
    category: "8 Box Kids Wardrobe",
    price: 1999,
    image: eightBoxBlueImages[0].image,
    images: eightBoxBlueImages.map(({ image }) => image),
  },
  {
    id: 1103,
    name: "8 Box Cat Wardrobe",
    category: "8 Box Kids Wardrobe",
    price: 1999,
    image: eightBoxCatImages[0].image,
    images: eightBoxCatImages.map(({ image }) => image),
  },
  {
    id: 1104,
    name: "8 Box Hello Kitty Pink Wardrobe",
    category: "8 Box Kids Wardrobe",
    price: 1999,
    image: eightBoxHkPinkImages[0].image,
    images: eightBoxHkPinkImages.map(({ image }) => image),
  },
  {
    id: 1105,
    name: "8 Box Pink Wardrobe",
    category: "8 Box Kids Wardrobe",
    price: 1999,
    image: eightBoxPinkImages[0].image,
    images: eightBoxPinkImages.map(({ image }) => image),
  },
];

const shoeRackProducts = [
  {
    id: 1200,
    name: "10 Step Black Shoe Rack",
    category: "10 Step Shoe Rack",
    price: 1799,
    image: tenStepBlackImages[0].image,
    images: tenStepBlackImages.map(({ image }) => image),
  },
  {
    id: 1201,
    name: "10 Step White Shoe Rack",
    category: "10 Step Shoe Rack",
    price: 1799,
    image: tenStepWhiteImages[0].image,
    images: tenStepWhiteImages.map(({ image }) => image),
  },
  {
    id: 1202,
    name: "12 Step Black Shoe Rack",
    category: "12 Step Shoe Rack",
    price: 1799,
    image: twelveStepBlackImages[0].image,
    images: twelveStepBlackImages.map(({ image }) => image),
  },
  {
    id: 1203,
    name: "12 Step White Shoe Rack",
    category: "12 Step Shoe Rack",
    price: 1799,
    image: twelveStepWhiteImages[0].image,
    images: twelveStepWhiteImages.map(({ image }) => image),
  },
];

const wallMountProducts = [
  {
    id: 1300,
    name: "Doll Wall Mount",
    category: "Doll Wall Mount",
    price: 120,
    image: dollMountImages[0].image,
    images: dollMountImages.map(({ image }) => image),
  },
  {
    id: 1301,
    name: "Elephant Wall Mount",
    category: "Elephant Wall Mount",
    price: 150,
    image: elephantMountImages[0].image,
    images: elephantMountImages.map(({ image }) => image),
  },
];

const shelfProducts = [
  {
    id: 1399,
    name: "L Shape Corner Shelf",
    category: "L Shape Corner Shelf",
    price: 150,
    image: lShapeCornerShelfImages[0].image,
    images: lShapeCornerShelfImages.map(({ image }) => image),
  },
  {
    id: 1402,
    name: "2 L Shape Corner Shelf Combo",
    category: "L Shape Corner Shelf",
    price: 250,
    image: lShapeCornerShelfImages[0].image,
    images: lShapeCornerShelfImages.map(({ image }) => image),
  },
  {
    id: 1400,
    name: "Flower Shelf",
    category: "Flower Shelf",
    price: 150,
    image: flowerShelfImages[0].image,
    images: flowerShelfImages.map(({ image }) => image),
  },
  {
    id: 1403,
    name: "2 Flower Shelf Combo",
    category: "Flower Shelf",
    price: 250,
    image: flowerShelfImages[0].image,
    images: flowerShelfImages.map(({ image }) => image),
  },
  {
    id: 1401,
    name: "4 Hook Shelf",
    category: "4 Hook Shelf",
    price: 150,
    image: hookShelfImages[0].image,
    images: hookShelfImages.map(({ image }) => image),
  },
  {
    id: 1404,
    name: "2 Four Hook Shelf Combo",
    category: "4 Hook Shelf",
    price: 250,
    image: hookShelfImages[0].image,
    images: hookShelfImages.map(({ image }) => image),
  },
];

const addWebsiteOffer = (product) => {
  const sellingPrice = product.sellingPrice || product.price;
  const categoryName = product.category.toLowerCase();
  const discountPercentage = categoryName.includes("wardrobe")
    ? 40
    : categoryName.includes("shoe")
      ? 45
      : 50;
  const mrp = product.mrp || Math.ceil((sellingPrice / (1 - discountPercentage / 100)) / 10) * 10;

  return {
    ...product,
    price: sellingPrice,
    sellingPrice,
    mrp,
    discountPercentage,
    websiteOffer: `${discountPercentage}% OFF only on Hi5Cart`,
  };
};

export const products = [
  ...fourBoxProducts,
  ...eightBoxProducts,
  ...shoeRackProducts,
  ...wallMountProducts,
  ...shelfProducts,
  {
    id: 1,
    name: "Modular Wardrobe",
    category: "Wardrobes",
    price: 1099,
    image: wardrobe,
  },
  {
    id: 2,
    name: "10-Step Shoe Rack",
    category: "Shoe Rack",
    price: 1799,
    image: shoe,
  },
  {
    id: 3,
    name: "Designer Kitchen Shelf",
    category: "Kitchen",
    price: 150,
    image: kitchen,
  },
  {
    id: 4,
    name: "Bathroom Essentials Rack",
    category: "Bathroom Essentials",
    price: 150,
    image: bathroom,
  },
  {
    id: 5,
    name: "Bathroom Storage Trio",
    category: "Bathroom Storage",
    price: 150,
    image: bathroom1,
  },
  {
    id: 6,
    name: "Home Decor Organizer",
    category: "Home Essentials",
    price: 150,
    image: home,
  },
  {
    id: 7,
    name: "Elephant Wall Mount",
    category: "Wall Shelves",
    price: 150,
    image: shelf,
  },
  {
    id: 8,
    name: "Doll Wall Mount",
    category: "Wall Shelves",
    price: 120,
    image: shelf,
  },
  {
    id: 9,
    name: "L Corner Shelf",
    category: "Wall Shelves",
    price: 150,
    image: shelf,
  },
  {
    id: 10,
    name: "Organizer Caddy",
    category: "Organizers",
    price: 150,
    image: organizer,
  },
  {
    id: 11,
    name: "Storage Boxes Set",
    category: "Storage Boxes",
    price: 1799,
    image: organizer1,
  },
  {
    id: 12,
    name: "Multi Organizer Tower",
    category: "Multi Organizers",
    price: 150,
    image: organizer2,
  },
  {
    id: 13,
    name: "Bathroom Corner Shelf",
    category: "Bathroom Storage",
    price: 150,
    image: bathroom2,
  },
 ].map(addWebsiteOffer);
