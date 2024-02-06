import { useState } from "react";

const useAccordion = () => {
    const [accordionActive, setAccordionActive] = useState(false);
    const [nestedAccordionActive, setNestedAccordionActive] = useState([]);
    const toggleAccordion = () => {
        setAccordionActive(!accordionActive);
      };

      const toggleNestedAccordion = (index) => {
        const newNestedAccordionState = [...nestedAccordionActive];
        newNestedAccordionState[index] = !newNestedAccordionState[index];
        setNestedAccordionActive(newNestedAccordionState);
      };
  return {accordionActive, toggleAccordion, nestedAccordionActive, toggleNestedAccordion};
}

export default useAccordion
