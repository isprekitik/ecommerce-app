// Icons
import cartIcon from "./cart_icon.png";
import dropdownIcon from "./dropdown_icon.png";
import heroImage from "./hero.png";
import logo from "./logo.png";
import menuIcon from "./menu_icon.png";
import profileIcon from "./profile_icon.png";
import searchIcon from "./search_icon.png";
import backIcon from "./back.png";
import exchange_icon from "./exchange_icon.png";
import quality_icon from "./quality_icon.png";
import support_icon from "./support_icon.png";
import cross_icon from "./cross_icon.png";
import star_icon from "./star_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import bin_icon from "./bin_icon.png";
import gcash_logo from "./gcash_logo.png";
import paymaya_logo from "./paymaya_logo.png";
import banktransfer_logo from "./banktransfer_logo.png";
import cashondelivery_logo from "./cashondelivery_logo.png";

// Product Main Images
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

// Product Gallery Images
import joggersImage1 from "./joggersImage1.png";
import joggersImage2 from "./joggersImage2.png";
import joggersImage3 from "./joggersImage3.png";
import joggersImage4 from "./joggersImage4.png";
import joggersImage5 from "./joggersImage5.png";

import leatherJacketImage1 from "./leatherJacketImage1.png";
import leatherJacketImage2 from "./leatherJacketImage2.png";
import leatherJacketImage3 from "./leatherJacketImage3.png";
import leatherJacketImage4 from "./leatherJacketImage4.png";

import shortsImage1 from "./shortsImage1.png";
import shortsImage2 from "./shortsImage2.png";
import shortsImage3 from "./shortsImage3.png";
import shortsImage4 from "./shortsImage4.png";
import shortsImage5 from "./shortsImage5.png";
import shortsImage6 from "./shortsImage6.png";
import shortsImage7 from "./shortsImage7.png";
import shortsImage8 from "./shortsImage8.png";
import shortsImage9 from "./shortsImage9.png";
import shortsImage10 from "./shortsImage10.png";
import shortsImage11 from "./shortsImage11.png";

import sweaterImage1 from "./sweaterImage1.png";
import sweaterImage2 from "./sweaterImage2.png";

import blazerImage1 from "./blazerImage1.png";
import blazerImage2 from "./blazerImage2.png";
import blazerImage3 from "./blazerImage3.png";
import blazerImage4 from "./blazerImage4.png";

import Classic_Cotton1 from "./Classic_Cotton1.png";
import Classic_Cotton2 from "./Classic_Cotton2.png";
import Classic_Cotton3 from "./Classic_Cotton3.png";
import Classic_Cotton4 from "./Classic_Cotton4.png";

import graphicTeeImage1 from "./graphicTeeImage1.png";
import graphicTeeImage2 from "./graphicTeeImage2.png";

import hoodieImage1 from "./hoodieImage1.png";
import hoodieImage2 from "./hoodieImage2.png";
import hoodieImage3 from "./hoodieImage3.png";
import hoodieImage4 from "./hoodieImage4.png";

import jacketImage1 from "./jacketImage1.png";
import jacketImage2 from "./jacketImage2.png";
import jacketImage3 from "./jacketImage3.png";

import jeansImage1 from "./jeansImage1.png";
import jeansImage2 from "./jeansImage2.png";

export const assets = {
  backIcon,
  cartIcon,
  dropdownIcon,
  heroImage,
  logo,
  menuIcon,
  profileIcon,
  searchIcon,
  exchange_icon,
  quality_icon,
  support_icon,
  cross_icon,
  star_icon,
  star_dull_icon,
  bin_icon,
  gcash_logo,
  paymaya_logo,
  banktransfer_logo,
  cashondelivery_logo,
};

export const products = [
  {
    _id: "1",
    name: "Classic Cotton T-Shirt",
    description:
      "A comfortable and stylish cotton t-shirt, perfect for casual wear.",
    price: 19,
    image: [
      Classic_Cotton,
      Classic_Cotton1,
      Classic_Cotton2,
      Classic_Cotton3,
      Classic_Cotton4,
    ],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2025-03-20",
    bestseller: true,
  },
  {
    _id: "2",
    name: "Denim Jacket",
    description: "A trendy denim jacket that adds a cool edge to your outfit.",
    price: 49,
    image: [jacketImage, jacketImage1, jacketImage2, jacketImage3],
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
    price: 39,
    image: [jeansImage, jeansImage1, jeansImage2],
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
    price: 29,
    image: [
      hoodieImage,
      hoodieImage1,
      hoodieImage2,
      hoodieImage3,
      hoodieImage4,
    ],
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
    price: 89,
    image: [
      blazerImage,
      blazerImage1,
      blazerImage2,
      blazerImage3,
      blazerImage4,
    ],
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
    price: 34,
    image: [
      joggersImage,
      joggersImage1,
      joggersImage2,
      joggersImage3,
      joggersImage4,
      joggersImage5,
    ],
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
    price: 119,
    image: [
      leatherJacketImage,
      leatherJacketImage1,
      leatherJacketImage2,
      leatherJacketImage3,
      leatherJacketImage4,
    ],
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
    price: 24,
    image: [
      shortsImage,
      shortsImage1,
      shortsImage2,
      shortsImage3,
      shortsImage4,
      shortsImage5,
      shortsImage6,
      shortsImage7,
      shortsImage8,
      shortsImage9,
      shortsImage10,
      shortsImage11,
    ],
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
    price: 54,
    image: [sweaterImage, sweaterImage1, sweaterImage2],
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
    price: 22,
    image: [graphicTeeImage, graphicTeeImage1, graphicTeeImage2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: "2025-03-10",
    bestseller: false,
  },
];
