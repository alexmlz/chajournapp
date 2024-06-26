import { Grid, GridItem } from "@chakra-ui/react";
import JournalGrid from "../components/JournalGrid";

const JournalPage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
        //lg: `"aside main"`,
        //not sure if we need master detail for this one
      }}
    >
      <GridItem area="main">
        <JournalGrid></JournalGrid>
      </GridItem>
    </Grid>
  );
};

export default JournalPage;
