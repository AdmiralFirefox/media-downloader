import { FC } from "react";
import IframeResizer from "iframe-resizer-react";
import styles from "../../styles/sections/IFrameSection.module.scss";

interface IFrameSectionProps {
  videoUrl: string;
  resetVideoUrl: () => void;
}

const IFrameSection: FC<IFrameSectionProps> = ({ videoUrl, resetVideoUrl }) => {
  return (
    <>
      <div className={styles["clear-url-button-wrapper"]}>
        <button onClick={resetVideoUrl} className={styles["clear-url-button"]}>
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
          marginTop: "1em",
          background: "transparent",
        }}
      />
    </>
  );
};

export default IFrameSection;
