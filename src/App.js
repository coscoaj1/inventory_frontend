import Admin from "./components/Admin";
import { Grid, GridItem } from "@chakra-ui/react";
import Inventory from "./components/Inventory";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [inventory, setInventory] = useState();
  const [editInventory, setEditInventory] = useState({
    image: "",
    product_name: "",
    sku: "",
    location: "",
    count: "",
  });
  //migrating to react-query
  // useEffect(() => {
  //   inventoryService.getAll().then((inventory) => setInventory(inventory));
  // }, []);

  const handleRowChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editInventory };
    newFormData[fieldName] = fieldValue;
    setEditInventory(newFormData);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Admin inventory={inventory} setInventory={setInventory} />
        </GridItem>
        <GridItem colSpan={4} rowSpan={2}>
          <Inventory
            setInventory={setInventory}
            setEditInventory={setEditInventory}
            editInventory={editInventory}
            handleRowChange={handleRowChange}
          />
        </GridItem>
      </Grid>
    </QueryClientProvider>
  );
}

export default App;
