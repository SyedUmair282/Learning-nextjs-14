import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div
      className={`${styles.container} w-full flex flex-row items-center justify-between`}
    >
      <div>©2023 Nextian. All right reserved.</div>
      <div className="flex flex-row items-center gap-2">
        <Link href={"https://www.facebook.com"} target="_blank">
          <Image src={"/1.png"} alt="fb" width={15} className="cursor-pointer" height={15} />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <Image src={"/2.png"} alt="ins" width={15} className="cursor-pointer" height={15} />
        </Link>
        <Link href="https://www.twitter.com" target="_blank">
          <Image src={"/3.png"} alt="tw" width={15} className="cursor-pointer" height={15} />
        </Link>
        <Link href="https://www.youtube.com" target="_blank">
          <Image src={"/4.png"} alt="yt" width={15} className="cursor-pointer" height={15} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
