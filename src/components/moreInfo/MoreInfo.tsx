"use client";

import styles from "./MoreInfo.module.css";
import Image from "next/image";
import { useState } from "react";
import { ubuntu } from "@/fonts";
import { Plus, Minus } from "lucide-react";
import Footer from "../footer/Footer";

export default function MoreInfo() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.moreInfo}>
      {/* Panel 1 */}
      <section className={styles.panel}>
        <div className={styles.panelContent}>
          <div className={styles.imageContainer}>
            <Image
              src="/hero.png"
              alt="Hero illustration"
              width={250}
              height={150}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.textContainer}>
            {/* Accordion 1 */}
            <div
              className={`${styles.textBlock} ${
                openIndex === 0 ? styles.active : ""
              }`}
              onClick={() => toggleAccordion(0)}
            >
              <div className={styles.headerRow}>
                <h2>Who Am I?</h2>
                {openIndex === 0 ? (
                  <Minus className={styles.icon} size={22} />
                ) : (
                  <Plus className={styles.icon} size={22} />
                )}
              </div>
              <div className={styles.accordionContent}>
                <p className={ubuntu.className}>
                  Jacob Grasser (b. 2002, Saint Louis Missouri) is an animator. He recently graduated from the University of Missouri in 2025 with a bachelors degree in digital story telling with an emphasis in animation. Jacob interned at Fulton Street Media Group as an animator for a sport commercial animated in a Studio Ghibli like art style and then was was asked to come back to help in the creation of animated work for a music documentary. From a young age, Jacob has always loved exploration on the frontier of both creativity and storytelling. Through animation he saw the themes you can portray to an audience both philosophical and representational.
                </p>
              </div>
            </div>

            {/* Accordion 2 */}
            <div
              className={`${styles.textBlock} ${
                openIndex === 1 ? styles.active : ""
              }`}
              onClick={() => toggleAccordion(1)}
            >
              <div className={styles.headerRow}>
                <h2>What is it I Actually Do?</h2>
                {openIndex === 1 ? (
                  <Minus className={styles.icon} size={22} />
                ) : (
                  <Plus className={styles.icon} size={22} />
                )}
              </div>
              <div className={styles.accordionContent}>
                <p className={ubuntu.className}>
                  I make a wide variety of different fantasy characters and landscapes in which I bring to life the world around them. I do all of my designs through online programs such as Procreate, Adobe Photoshop, Adobe Illustrator, and Blender. Once I have finished the designs there I export them to Adobe After Effects and Adobe Premier for post production when needed. 
                </p>
                <p className={ubuntu.className}>
                  I discovered my love for animation when I was in elementary school. Being an imaginative kid I was always obsessed with creating my own stories through my many different toys and open backyard. I soon started making stop motion animations, each with a unique story. This passion only grew as I discovered new forms of animation. My craft brings me endless freedom and joy as I am able to mold my own stories and worlds while reaching a broader audience globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel 2: Contact Form */}
      <section className={`${styles.panel} ${styles.contactPanel}`}>
        <div className={styles.formContainer}>
          <h2>Get in Touch</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent!");
            }}
            className={styles.form}
          >
            <input className={ubuntu.className} type="text" name="name" placeholder="Your Name" required />
            <input className={ubuntu.className} type="email" name="email" placeholder="Your Email" required />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className={ubuntu.className}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
