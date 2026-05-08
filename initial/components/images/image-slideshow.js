"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import burgerImg from "@/assets/burger.png";
import curryImg from "@/assets/curry.png";
import pizzaImg from "@/assets/pizza.png";
import dumplingsImg from "@/assets/dumplings.png";
import macncheeseImg from "@/assets/macncheese.png";
import schnitzenImg from "@/assets/schnitzen.png";
import tomatoSaladImg from "@/assets/tomatosalad.png";

const images = [
  { image: burgerImg, alt: "Burger" },
  { image: curryImg, alt: "Curry" },
  { image: pizzaImg, alt: "Pizza" },
  { image: dumplingsImg, alt: "Dumplings" },
  { image: macncheeseImg, alt: "Mac and Cheese" },
  { image: schnitzenImg, alt: "Schnitzen" },
  { image: tomatoSaladImg, alt: "Tomato Salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  
}
