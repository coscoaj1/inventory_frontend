import Admin from "./components/Admin";
import { Grid, GridItem } from "@chakra-ui/react";
import Inventory from "./components/Inventory";
function App() {
  return (
    <Grid
      h="200px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={1}>
        <Admin />
      </GridItem>
      <GridItem colSpan={4} rowSpan={2}>
        <Inventory />
      </GridItem>
    </Grid>
  );
}

export default App;
