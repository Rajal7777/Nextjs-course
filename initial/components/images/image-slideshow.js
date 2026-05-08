"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "Burger" },
  { image: curryImg, alt: "Curry" },
  { image: pizzaImg, alt: "Pizza" },
  { image: dumplingsImg, alt: "Dumplings" },
  { image: macncheeseImg, alt: "Mac and Cheese" },
  { image: schnitzelImg, alt: "Schnitzel" },
  { image: tomatoSaladImg, alt: "Tomato Salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //runs setInterval on component mount and clears on unmount.
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
    {images.map((image, index) => (
        <Image 
         key={index}
         src={image.image}
         alt={image.alt}
         className={index === currentImageIndex ? classes.active : ''}
        />
    )   )}
  </div>
  )
}
