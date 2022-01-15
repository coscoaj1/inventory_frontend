import Admin from "./components/Admin";
import { Grid, GridItem } from "@chakra-ui/react";
import Inventory from "./components/Inventory";
import inventoryService from "./services/inventory";
import React, { useState, useEffect } from "react";

function App() {
  const [inventory, setInventory] = useState();

  useEffect(() => {
    inventoryService.getAll().then((inventory) => setInventory(inventory));
  }, []);
  console.log(inventory);

  const handleDelete = async (id) => {
    const myInventory = inventory.find((i) => i.id === id);
    console.log(myInventory);
    if (window.confirm(`Delete ${myInventory.product_name}?`)) {
      const filteredInventory = inventory.filter((i) => i.id !== id);
      console.log(filteredInventory);
      await inventoryService.remove(id);
      setInventory(filteredInventory);
      // setNotificationMessage(`Deleted ${blog.title}`);
    }
  };

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
        <Inventory inventory={inventory} handleDelete={handleDelete} />
      </GridItem>
    </Grid>
  );
}

export default App;
