import React, { useState, useEffect } from "react";
import Paper02 from "./../Paper02";
import CodeBlock from "./../CodeBlock";

const ValidationReact = (props) => {
  const [items, setItems] = useState("");
  const capitalizedVariable =
    props.variable.charAt(0).toUpperCase() + props.variable.slice(1);
  const variable = props.variable ? props.variable : "NO_VARIABLE_SELECTED";
  const setContent = () => {
    setItems("");
    props.items.forEach((e) => {
      setItems((prev) => prev + generateContent(e));
    });
  };

  useEffect(() => {
    setContent();
    // eslint-disable-next-line
  }, [props.items, props.variable]);

  const type = (input) => {
    return `typeof ${variable}.${input.myKey} === "${input.type}"`;
  };

  const rangeType = (input) => {
    if (input.rangeType) {
      const inputRange =
        input.type === "string" ? `"${input.range}"` : input.range;
      const rangeSymbol = () => {
        switch (input.rangeType) {
          case "equal":
            return "===";
          case "notEqual":
            return "!==";
          case "lessThan":
            return "<";
          case "lessThanOrEqualTo":
            return "<=";
          case "greaterThan":
            return ">";
          case "greaterThanOrEqualTo":
            return ">=";
          case "between":
            return ">=";
          default:
            return "";
        }
      };
      return `${variable}.${input.myKey} ${rangeSymbol()} ${inputRange}`;
    } else return "";
  };

  const range2 = (input) => {
    if (input.range2) {
      const inputRange =
        input.type === "string" ? `"${input.range2}"` : input.range2;
      return `${variable}.${input.myKey} <= ${inputRange}`;
    } else return "";
  };

  const isRequired = (input) => {
    if (input.isRequired) {
      return `${variable}.${input.myKey} !== ""`;
    }
  };

  const generateContent = (item) => {
    const brk = " &&\n";
    const space = "    ";
    const comment = item.myKey ? `\n${space}// ${variable}.${item.myKey}` : "";
    const curType = item.type ? "\n" + space + type(item) : "";
    const curRangeType = item.rangeType ? brk + space + rangeType(item) : "";
    const curRange2 = item.range2 ? brk + space + range2(item) : "";
    const curRequired = item.isRequired ? brk + space + isRequired(item) : "";
    const allContent =
      comment + curType + curRangeType + curRange2 + curRequired + " &&";
    return allContent;
  };

  // slice used to delete last &&
  const content = `function isValid${capitalizedVariable}(${variable}) {
  return (${items.slice(0, -2)}
  )   
}`;

  return (
    <Paper02 title="React Validation">
      <CodeBlock content={content} />
    </Paper02>
  );
};

export default ValidationReact;
