import React from "react";
import Grid from "@material-ui/core/Grid";
import useLocalStorage from "../hooks/useLocalStorage";
import Container from "@material-ui/core/Container";
import Input from "../components/contextAPI/Input";
import Result from "../components/contextAPI/Result";
import Imports from "../components/contextAPI/Imports";

const ContextAPI = () => {
  const [nameSingular, setNameSingular] = useLocalStorage(
    "ContextAPINameSingular",
    ""
  );
  const [namePlural, setNamePlural] = useLocalStorage(
    "ContextAPINamePlural",
    ""
  );
  const [uniqueSelector, setUniqueSelector] = useLocalStorage(
    "ContextAPIUniqueSelector",
    ""
  );

  const [actions, setActions] = useLocalStorage("ContextAPIActions", {
    get: {
      checked: false,
    },
    add: {
      checked: false,
    },
    delete: {
      checked: false,
    },
    edit: {
      checked: false,
    },
    setLoading: {
      checked: false,
    },
  });
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} lg={5}>
          <Input
            nameSingular={nameSingular}
            setNameSingular={setNameSingular}
            namePlural={namePlural}
            setNamePlural={setNamePlural}
            uniqueSelector={uniqueSelector}
            setUniqueSelector={setUniqueSelector}
            actions={actions}
            setActions={setActions}
          />
        </Grid>
        <Grid item xs={12} lg={7}>
          <Imports nameSingular={nameSingular} namePlural={namePlural} />
        </Grid>
        <Result
          nameSingular={nameSingular}
          namePlural={namePlural}
          uniqueSelector={uniqueSelector}
          actions={actions}
        />
      </Grid>
    </Container>
  );
};

export default ContextAPI;
