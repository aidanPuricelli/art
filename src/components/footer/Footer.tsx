import styles from "./Footer.module.css";
import { luckiestGuy, ubuntu } from "@/fonts";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <div className={`${styles.container} ${className || ""}`}>
        <div className={styles.content}>
            <div className={styles.left}>
                <p>Jacob Grasser</p>
                <p className={`${ubuntu.className}`}>Copyright © 2025</p>
            </div>
            <div className={styles.right}>
                {/* <p className={`${ubuntu.className}`}>Instagram</p> */}
            </div>
        </div>
    </div>
  );
}
