"use client";

import styles from "./Navbar.module.css";
import { luckiestGuy } from "@/fonts";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className={styles.container}>
      <div className={styles.navbarInner}>
        <img
          src="/nav/moon.png"
          alt="Navbar icon"
          className={styles.logo}
          onClick={toggleMenu}
        />

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
          <Link href="/">
            <button className={`${styles.button} ${luckiestGuy.className}`}>
              Home
            </button>
          </Link>
          <Link href="/loom">
            <button className={`${styles.button} ${luckiestGuy.className}`}>
              Loom
            </button>
          </Link>
          <Link href="/sketches">
            <button className={`${styles.button} ${luckiestGuy.className}`}>
              Sketches
            </button>
          </Link>
          <Link href="/illustration">
            <button className={`${styles.button} ${luckiestGuy.className}`}>
              Illustration
            </button>
          </Link>
          <Link href="/animation">
            <button className={`${styles.button} ${luckiestGuy.className}`}>
              Animation
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
