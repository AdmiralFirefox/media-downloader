import { ChangeEvent, FormEvent, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import FormSection from "../components/Sections/FormSection";
import styles from "../styles/sections/Home.module.scss";
import IFrameSection from "../components/Sections/IFrameSection";

const Home: NextPage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [pastedLink, setPastedLink] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (pastedLink.includes("https://")) {
      setVideoUrl(pastedLink);
      setAlertMessage("");
    } else {
      setAlertMessage("Please enter a valid url");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPastedLink(e.target.value);
  };

  const clearVideoUrl = () => {
    setVideoUrl("");
    setPastedLink("");
    setAlertMessage("");
  };

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
        {videoUrl === "" ? (
          <>
            <FormSection
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              pastedLink={pastedLink}
              alertMessage={alertMessage}
            />
          </>
        ) : (
          <IFrameSection videoUrl={videoUrl} clearVideoUrl={clearVideoUrl} />
        )}
      </main>
    </>
  );
};

export default Home;
