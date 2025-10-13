'use client'

import styles from "./Sketches.module.css";
import Navbar from "@/components/navabr/Navbar";
import MoreInfo from "@/components/moreInfo/MoreInfo";
import Footer from "@/components/footer/Footer";
import { useState } from "react";

export default function Sketches() {
    const images = [
        "/sketches/s1.png",
        "/sketches/s2.png",
        "/sketches/s3.png",
        "/sketches/s4.png",
        "/sketches/s5.png",
        "/sketches/s6.png",
        "/sketches/s7.png",
        "/sketches/s8.png",
        "/sketches/s9.png",
        "/sketches/s10.png",
        "/sketches/s11.png",
        "/sketches/s12.png",
        "/sketches/s13.png",
        "/sketches/s14.png",
        "/sketches/s15.png"
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const openImage = (index: number) => setActiveIndex(index);
    const closeImage = () => setActiveIndex(null);
  
    const showPrev = (e: React.MouseEvent) => {
      e.stopPropagation();
      setActiveIndex((prev) =>
        prev === 0 ? images.length - 1 : (prev ?? 0) - 1
      );
    };
  
    const showNext = (e: React.MouseEvent) => {
      e.stopPropagation();
      setActiveIndex((prev) =>
        prev === images.length - 1 ? 0 : (prev ?? 0) + 1
      );
    };

    return (
        <div className={styles.container}>
        <Navbar />
        <div className={`${styles.content} animate__animated animate__fadeIn animate__delay-1s`}>
            <div className={styles.grid}>
            {images.map((src, index) => (
                <div key={index} className={styles.imageWrapper}>
                <img src={src} alt={`Illustration ${index + 1}`} className={styles.image} onClick={() => openImage(index)} />
                </div>
            ))}
            </div>
        </div>

        {activeIndex !== null && (
            <div className={styles.overlay} onClick={closeImage}>
            <button className={styles.closeBtn} onClick={closeImage}>
                ✕
            </button>
            <button className={styles.leftArrow} onClick={showPrev}>
                ‹
            </button>
            <img
                src={images[activeIndex]}
                alt="Fullscreen illustration"
                className={styles.fullscreenImage}
            />
            <button className={styles.rightArrow} onClick={showNext}>
                ›
            </button>
            </div>
        )}

        <Footer className={styles.footer}></Footer>
        </div>
    );
}
