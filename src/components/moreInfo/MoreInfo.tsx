"use client";

import styles from "./MoreInfo.module.css";
import { luckiestGuy, shrikhand, ubuntu } from "@/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function MoreInfo() {
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
  
    if (showModal) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
  
    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [showModal]);  

  return (
    <div className={styles.all}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.image}>
            <Image 
              src="/hero.png"
              alt="Hero image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.sect}>
              <h1>Who Am I?</h1>
              <p className={`${ubuntu.className}`}>Jacob Grasser (b. 2002, Saint Louis Missouri) is an animator. He recently graduated from the University of Missouri in 2025 with a bachelors degree in digital story telling with an emphasis in animation. Jacob interned at Fulton Street Media Group as an animator for a sport commercial animated in a Studio Ghibli like art style and then was was asked to come back to help in the creation of animated work for a music documentary. From a young age, Jacob has always loved exploration on the frontier of both creativity and storytelling. Through animation he saw the themes you can portray to an audience both philosophical and representational.</p>
            </div>
            <div className={styles.sect}>
              <h1>What is it I actually do?</h1>
              <p className={`${ubuntu.className}`}>I make a wide variety of different fantasy characters and landscapes in which I bring to life the world around them. I do all of my designs through online programs such as Procreate, Adobe Photoshop, Adobe Illustrator, and Blender. Once I have finished the designs there I export them to Adobe After Effects and Adobe Premier for post production when needed. </p>
              <p className={`${ubuntu.className}`}>I discovered my love for animation when I was in elementary school. Being an imaginative kid I was always obsessed with creating my own stories through my many different toys and open backyard. I soon started making stop motion animations, each with a unique story. This passion only grew as I discovered new forms of animation. My craft brings me endless freedom and joy as I am able to mold my own stories and worlds while reaching a broader audience globally.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerTwo}>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <form className={styles.form}
            onSubmit={async (e) => {
              e.preventDefault();
              setSending(true);
              const form = e.currentTarget;
              const data = {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value,
              };
            
              const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              });
            
              setSending(false);
            
              if (res.ok) {
                form.reset();
                setShowModal(true);
              } else {
                alert("Something went wrong. Please try again later.");
              }
          }}>
            <div>
              <label htmlFor="name" className={`${ubuntu.className} ${styles.label}`}>Name</label>
              <input
                id="name"
                name="name"
                required
                className={styles.input}
                placeholder="Your name..."
              />
            </div>

            <div>
              <label htmlFor="email" className={`${ubuntu.className} ${styles.label}`}>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={styles.input}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className={`${ubuntu.className} ${styles.label}`}>Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={styles.textArea}
                placeholder="Write a message..."
              />
            </div>

            <button type="submit" className={styles.submit} disabled={sending}>
              {sending ? (
                <span className={ubuntu.className}>Sending...</span>
              ) : (
                <span className="material-symbols-outlined">send</span>
              )}
            </button>
          </form>
          {showModal && (
            <div className={styles.overlay} onClick={() => setShowModal(false)}>
              <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <h2 className={luckiestGuy.className}>Message Sent!</h2>
                <p className={ubuntu.className}>
                  Thanks for reaching out — I’ll get back to you soon.
                </p>
                <button
                  className={styles.closeButton}
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
