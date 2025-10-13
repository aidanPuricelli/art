'use client'

import styles from "./Navbar.module.css";
import { luckiestGuy } from "@/fonts";
import Link from "../../../node_modules/next/link";
import { useState } from "react";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);

  const handleImageClick = () => {
    setToggled((prev) => !prev);
  };

  return (
    <div className={`${styles.container} animate__animated animate__fadeInDown animate__delay-2s`}>
        {/* <button className={`${styles.button} ${luckiestGuy.className}`}>Contact</button> */}
        {/* <button className={`${styles.button} ${luckiestGuy.className}`}>About</button> */}

        <img
          src={toggled ? "/nav/sun.png" : "/nav/moon.png"}
          alt="Navbar icon"
          className={styles.logo}
          onClick={handleImageClick}
        />
        <Link href="/loom">
          <button className={`${styles.button} ${luckiestGuy.className}`}>Loom</button>
        </Link>
        <Link href="/sketches">
          <button className={`${styles.button} ${luckiestGuy.className}`}>Sketches</button>
        </Link>
        <Link href="/illustration">
          <button className={`${styles.button} ${luckiestGuy.className}`}>Illustration</button>
        </Link>
        <Link href="/animation">
          <button className={`${styles.button} ${luckiestGuy.className}`}>Animation</button>
        </Link>
        <Link href="/">
          <button className={`${styles.button} ${luckiestGuy.className}`}>Home</button>
        </Link>
    </div>
  );
}
