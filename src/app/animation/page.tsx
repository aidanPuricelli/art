import styles from "./Animation.module.css";
import Navbar from "@/components/navabr/Navbar";
import MoreInfo from "@/components/moreInfo/MoreInfo";
import Footer from "@/components/footer/Footer";

export default function Animation() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={`${styles.content} animate__animated animate__fadeIn animate__delay-1s`}>
        <h1>Demo Reel</h1>
        <iframe
            width="720"
            height="405"
            src="https://player.vimeo.com/video/1095469345"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
      </div>
      <Footer className={styles.footer}></Footer>
    </div>
  );
}
