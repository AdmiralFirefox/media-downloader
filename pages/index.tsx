import type { NextPage } from "next";
import Image from "next/image";
import FormSection from "../components/FormSection";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <header className={styles["web-header"]}>
        <h1>Media Downloader</h1>
        <div>
          <Image
            src="/assets/WebLogo.png"
            alt="Web Logo"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </header>

      <main>
        <FormSection />
      </main>
    </>
  );
};

export default Home;
