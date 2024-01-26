import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import styles from "@/components/frontend/header/header.module.css"

export default function Header() {
  return (
    <section className={styles.sectionOuter}>
      <div className={styles.headerInner}>
        <div className={styles.upperSection}>
          <div className={styles.upperNavNumber}>
            <div className={styles.upperNavLinks}>Email: <Link href="/" className={styles.navLinks} >9874563211</Link></div>
            <div className={styles.upperNavLinks}>India: <Link href="/" className={styles.navLinks} >9874563211</Link></div>
            <div className={styles.upperNavLinks}>Canada: <Link href="/" className={styles.navLinks} >9874563211</Link></div>
            <div className={styles.upperNavLinks}>US: <Link href="/" className={styles.navLinks} >9874563211</Link></div>
          </div>
        </div>
        <div className={styles.midSection}>
          <div className={styles.midLogoSec}>
            <Image src="/logo.png" alt="" title="" width={180} height={120} className={styles.midLogoImage} />
          </div>
          <div className={styles.midButtonsOuter}>
            <Button variant="destructive">Button</Button>
            <Button variant="main">Button</Button>
          </div>
        </div>
        <div className={styles.lowerSection}>
          <nav className={styles.lowerNav}>
            <ul className={styles.lowerNavUl}>
              <li className={styles.lowerNavLi}>Digital Marketing</li>
              <li className={styles.lowerNavLi}>Web Development</li>
              <li className={styles.lowerNavLi}>Packages</li>
              <li className={styles.lowerNavLi}>About Us</li>
              <li className={styles.lowerNavLi}>Our Work</li>
              <li className={styles.lowerNavLi}>Contact Us</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
