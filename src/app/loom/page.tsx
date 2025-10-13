'use client'

import styles from "./Loom.module.css";
import Navbar from "@/components/navabr/Navbar";
import MoreInfo from "@/components/moreInfo/MoreInfo";
import Footer from "@/components/footer/Footer";
import { useState } from "react";
import { shrikhand, ubuntu } from "@/fonts";

export default function Loom() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={`${styles.content} animate__animated animate__fadeIn animate__delay-1s`}>
                <h3 className={`${ubuntu.className}`}>(Currently a work in progress; stay tuned for updates!)</h3>
                <h1>Loom</h1>
                <p className={`${ubuntu.className}`}><i>"Do the martyrs of ages past have a claim to the sinful ashes?"</i></p>
                <p className={`${ubuntu.className}`}>Loom is a world building project I have been crafting for years both in drawing, animating, and writing. Along the way, I have had countless friends and family inspire me and encourage my creative endeavors. To this, I owe them everything I have become today and am always and forever grateful for what they have pushed me to achieve. Without jumping into too many spoilers or general information, I encourage you to instead explore the writing, illustrations, and animations below.  Please don't hesitate to reach out to me privately through my contact page if you have any questions or inquiries at all regarding this project or my art. </p>
                <p className={`${ubuntu.className}`}>Thank you again to all my supporters—and to you for stopping by my site!</p>
            </div>
            <Footer className={styles.footer}></Footer>
        </div>
    );
}
