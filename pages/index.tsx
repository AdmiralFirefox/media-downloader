import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Image from "next/image";
import FormSection from "../components/Sections/FormSection";
import IFrameSection from "../components/Sections/IFrameSection";
import AccordionSection from "../components/Sections/AccordionSection";
import Switch from "../components/Switch";
import FooterWaves from "../components/Sections/FooterWaves";
import styles from "../styles/sections/Home.module.scss";

const Home: NextPage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [pastedLink, setPastedLink] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const { resolvedTheme } = useTheme();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pastedLink.includes("https://") && pastedLink !== "") {
      setVideoUrl(pastedLink);
      setAlertMessage("");
    } else {
      setAlertMessage("Please enter a valid url");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPastedLink(e.target.value);
  };

  const resetVideoUrl = () => {
    setVideoUrl("");
    setPastedLink("");
    setAlertMessage("");
  };

  const clearText = () => {
    setPastedLink("");
  };

  // Change Darkmode Background
  useEffect(() => {
    document.getElementsByTagName("body")[0].className =
      resolvedTheme === "dark"
        ? styles["dark-background"]
        : styles["light-background"];
  }, [resolvedTheme]);

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

      <Switch />

      <main>
        {videoUrl === "" ? (
          <>
            <FormSection
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              pastedLink={pastedLink}
              alertMessage={alertMessage}
              clearText={clearText}
            />
          </>
        ) : (
          <IFrameSection videoUrl={videoUrl} resetVideoUrl={resetVideoUrl} />
        )}

        <AccordionSection />
      </main>

      <FooterWaves />
    </>
  );
};

export default Home;
