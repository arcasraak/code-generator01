import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import useLocalStorage from "../hooks/useLocalStorage";
import Container from "@material-ui/core/Container";
import ReactStateInput from "./../components/reactStateHooks/ReactStateHooksInput";
import ReactStateHooksProps from "../components/reactStateHooks/ReactStateHooksProps";
import ReactStateHooksResult from "./../components/reactStateHooks/ReactStateHooksResult";
import Box from "@material-ui/core/Box";

const ReactStateHooks = () => {
  const [items, setItems] = useLocalStorage("reactStateHooksCodeGenerator", []);
  const [input, setInput] = useState("");

  const handleAddItems = () => {
    if (input) {
      setItems((prev) => [...prev, input]);
      setInput("");
    }
  };

  const handleDelete = (item) => {
    setItems((prev) => prev.filter((e) => e !== item));
  };

  const handleClear = () => {
    setItems([]);
    setInput("");
  };

  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <ReactStateInput
            items={items}
            input={input}
            setInput={setInput}
            handleAddItems={handleAddItems}
            handleDelete={handleDelete}
            handleClear={handleClear}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <ReactStateHooksProps items={items} />
          <Box m={4} />
          <ReactStateHooksResult items={items} />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </Container>
  );
};

export default ReactStateHooks;
