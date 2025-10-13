import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navabr/Navbar";
import MoreInfo from "@/components/moreInfo/MoreInfo";
import { shrikhand } from "@/fonts";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>

      </div>
      <Navbar />
      {/* <div className={styles.imageWrapper}>
        <Image 
          src="/Name_Art.avif"
          alt="Hero image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div> */}
      <div className={`${styles.name}`}>
        <div className={`${styles.header} animate__animated animate__fadeInLeft animate__delay-1s`}>
          <h1>Jacob Grasser</h1>
        </div>
        <div className={`${styles.sub} animate__animated animate__fadeInUp animate__delay-1s`}>
          <p>-Animator | Illustrator | World Builder-</p>
        </div>
      </div>
      <div className={`${styles.learnMore} animate__animated animate__fadeInUp animate__delay-2s`}>
        <p>Learn More...</p>
      </div>
      <MoreInfo />
      <Footer className={styles.footer} />
    </div>
  );
}
