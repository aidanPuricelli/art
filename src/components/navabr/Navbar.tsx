import styles from "./Navbar.module.css";
import { luckiestGuy } from "@/fonts";

export default function Navbar() {
  return (
    <div className={`${styles.container}`}>
        <button className={`${styles.button} ${luckiestGuy.className}`}>Contact</button>
        <button className={`${styles.button} ${luckiestGuy.className}`}>About</button>
        <button className={`${styles.button} ${luckiestGuy.className}`}>Loom</button>
        <button className={`${styles.button} ${luckiestGuy.className}`}>Sketches</button>
        <button className={`${styles.button} ${luckiestGuy.className}`}>Illustration</button>
        <button className={`${styles.button} ${luckiestGuy.className}`}>Animation</button>
        <button className={`${styles.button} ${luckiestGuy.className}`}>Home</button>
    </div>
  );
}
