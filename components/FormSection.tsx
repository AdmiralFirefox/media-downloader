import { FC } from "react";
import styles from "../styles/FormSection.module.scss";

const FormSection: FC = () => {
  return (
    <>
      <div className={styles["form-container"]}>
        <form className={styles["form-wrapper"]}>
          <input type="text" placeholder="Enter Valid Link" />
          <button type="submit">Convert</button>
        </form>
      </div>
    </>
  );
};

export default FormSection;
