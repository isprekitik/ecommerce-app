import cartIcon from "./cart_icon.png";
import dropdownIcon from "./dropdown_icon.png";
import heroImage from "./hero.png";
import logo from "./logo.png";
import menuIcon from "./menu_icon.png";
import profileIcon from "./profile_icon.png";
import searchIcon from "./search_icon.png";
import backIcon from "./back.png";
import jacketImage from "./jacketImage.jpg";
import jeansImage from "./jeansImage.jpg";
import hoodieImage from "./hoodieImage.jpg";
import blazerImage from "./blazerImage.jpg";
import joggersImage from "./joggersImage.jpg";
import leatherJacketImage from "./leatherJacketImage.jpg";
import shortsImage from "./shortsImage.jpg";
import sweaterImage from "./sweaterImage.jpg";
import graphicTeeImage from "./graphicTeeImage.jpg";
import Classic_Cotton from "./Classic_Cotton.jpg";
import exchange_icon from "./exchange_icon.png";
import quality_icon from "./quality_icon.png";
import support_icon from "./support_icon.png";
import cross_icon from "./cross_icon.png";

export const assets = {
  backIcon,
  cartIcon,
  dropdownIcon,
  heroImage,
  logo,
  menuIcon,
  profileIcon,
  searchIcon,
  jacketImage,
  jeansImage,
  hoodieImage,
  blazerImage,
  joggersImage,
  leatherJacketImage,
  shortsImage,
  sweaterImage,
  graphicTeeImage,
  Classic_Cotton,
  exchange_icon,
  quality_icon,
  support_icon,
  cross_icon,
};

export const products = [
  {
    _id: "1",
    name: "Classic Cotton T-Shirt",
    description:
      "A comfortable and stylish cotton t-shirt, perfect for casual wear.",
    price: 19.99,
    image: [Classic_Cotton],
    category: "Men",
    subCategory: "Topweara",
    sizes: ["S", "M", "L", "XL"],
    date: "2025-03-20",
    bestseller: true,
  },
  {
    _id: "2",
    name: "Denim Jacket",
    description: "A trendy denim jacket that adds a cool edge to your outfit.",
    price: 49.99,
    image: [jacketImage],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: "2025-03-18",
    bestseller: false,
  },
  {
    _id: "3",
    name: "Slim Fit Jeans",
    description: "Stylish and comfortable slim-fit jeans for everyday wear.",
    price: 39.99,
    image: [jeansImage],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["30", "32", "34", "36"],
    date: "2025-03-17",
    bestseller: true,
  },
  {
    _id: "4",
    name: "Hooded Sweatshirt",
    description: "Soft and warm hoodie for casual and sporty looks.",
    price: 29.99,
    image: [hoodieImage],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2025-03-16",
    bestseller: true,
  },
  {
    _id: "5",
    name: "Formal Blazer",
    description:
      "A sleek and elegant blazer for professional and formal occasions.",
    price: 89.99,
    image: [blazerImage],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL", "XXL"],
    date: "2025-03-15",
    bestseller: false,
  },
  {
    _id: "6",
    name: "Sports Joggers",
    description: "Lightweight joggers designed for comfort and performance.",
    price: 34.99,
    image: [joggersImage],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2025-03-14",
    bestseller: false,
  },
  {
    _id: "7",
    name: "Leather Jacket",
    description: "A stylish leather jacket for a classic and rugged look.",
    price: 119.99,
    image: [leatherJacketImage],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    date: "2025-03-13",
    bestseller: true,
  },
  {
    _id: "8",
    name: "Casual Shorts",
    description: "Breathable and lightweight shorts for summer comfort.",
    price: 24.99,
    image: [shortsImage],
    category: "Clothing",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    date: "2025-03-12",
    bestseller: false,
  },
  {
    _id: "9",
    name: "Wool Sweater",
    description: "Cozy wool sweater perfect for chilly days.",
    price: 54.99,
    image: [sweaterImage],
    category: "Women",
    subCategory: "Sweaters",
    sizes: ["S", "M", "L", "XL"],
    date: "2025-03-11",
    bestseller: true,
  },
  {
    _id: "10",
    name: "Graphic Tee",
    description: "Trendy t-shirt with a unique graphic print design.",
    price: 22.99,
    image: [graphicTeeImage],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2025-03-10",
    bestseller: false,
  },
];
