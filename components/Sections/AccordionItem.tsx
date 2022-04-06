import { FC, useRef } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionItemProps {
  data: {
    title: string;
    content: string;
  };
  active: boolean;
  handleToggle: (id: number) => void;
  id: number;
}

const AccordionItem: FC<AccordionItemProps> = ({
  data,
  active,
  handleToggle,
  id,
}) => {
  const contentEl = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className={`accordion_item ${active ? "active" : ""}`}>
        <button className="accordion-header" onClick={() => handleToggle(id)}>
          <p>{data.title}</p>
          <IconContext.Provider
            value={{ className: active ? "accordion-icon-active" : "accordion-icon" }}
          >
            <IoIosArrowDown />
          </IconContext.Provider>
        </button>
        <div
          ref={contentEl}
          className="accordion-content-wrapper"
          style={
            active
              ? { height: contentEl.current!.scrollHeight }
              : { height: "0px" }
          }
        >
          <div className="accordion-content">
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionItem;
