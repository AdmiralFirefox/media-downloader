import { ChangeEvent, FC, FormEvent } from "react";
import { IconContext } from "react-icons";
import { BsFillTrashFill } from "react-icons/bs";
import styles from "../../styles/sections/FormSection.module.scss";

interface FormSectionProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearText: () => void;
  pastedLink: string;
  alertMessage: string;
}

const FormSection: FC<FormSectionProps> = ({
  handleSubmit,
  pastedLink,
  handleChange,
  alertMessage,
  clearText,
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

      <div className={styles["icons-wrapper"]}>
        <button className={styles["trash-icon-wrapper"]} onClick={clearText}>
          <IconContext.Provider
            value={{
              className: styles["trash-icon"],
            }}
          >
            <BsFillTrashFill />
          </IconContext.Provider>
        </button>
      </div>
    </>
  );
};

export default FormSection;
