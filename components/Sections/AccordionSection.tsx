import { FC, useState } from "react";
import accordionData from "../../data/accordion_data.json";
import AccordionItem from "./AccordionItem";
import styles from "../../styles/sections/AccordionSection.module.scss";

const AccordionSection: FC = () => {
  const [clicked, setClicked] = useState<number | boolean>(false);

  const handleToggle = (id: number) => {
    if (clicked === id) {
      return setClicked(true);
    }
    setClicked(id);
  };

  return (
    <div className={styles["accordion-section-wrapper"]}>
      <div className={styles["accordion-section"]}>
        {accordionData.map((data) => {
          return (
            <AccordionItem
              key={data.id}
              data={data}
              handleToggle={() => handleToggle(data.id)}
              active={clicked === data.id}
              id={data.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccordionSection;
