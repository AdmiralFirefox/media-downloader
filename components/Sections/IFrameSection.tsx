import { FC } from "react";
import IframeResizer from "iframe-resizer-react";
import styles from "../../styles/sections/IFrameSection.module.scss";

interface IFrameSectionProps {
  videoUrl: string;
  clearVideoUrl: () => void;
}

const IFrameSection: FC<IFrameSectionProps> = ({ videoUrl, clearVideoUrl }) => {
  return (
    <>
      <div className={styles["clear-url-button-wrapper"]}>
        <button onClick={clearVideoUrl} className={styles["clear-url-button"]}>
          Convert Another Video
        </button>
      </div>
      <IframeResizer
        heightCalculationMethod="lowestElement"
        inPageLinks
        scrolling={false}
        src={`https://yt-download.org/api/widget?url=${videoUrl}`}
        style={{
          minWidth: "100%",
          minHeight: "10em",
          width: "80%",
          border: "none",
          marginTop: "-3.5em",
          background: "transparent",
        }}
      />
    </>
  );
};

export default IFrameSection;
