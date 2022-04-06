import { ChangeEvent, FC, FormEvent } from "react";
import styles from "../../styles/sections/FormSection.module.scss";

interface FormSectionProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  pastedLink: string;
  alertMessage: string;
}

const FormSection: FC<FormSectionProps> = ({
  handleSubmit,
  pastedLink,
  handleChange,
  alertMessage,
}) => {
  return (
    <>
      <div className={styles["form-container"]}>
        <form className={styles["form-wrapper"]} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Valid Link"
            value={pastedLink}
            onChange={handleChange}
          />
          <button type="submit">Convert</button>
        </form>
      </div>

      <p className={styles["alert-message"]}>{alertMessage}</p>
    </>
  );
};

export default FormSection;
