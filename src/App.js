import Admin from "./components/Admin";
import { Grid, GridItem } from "@chakra-ui/react";
import Inventory from "./components/Inventory";
import inventoryService from "./services/inventory";
import React, { useState, useEffect } from "react";

function App() {
  const [inventory, setInventory] = useState();
  const [editInventory, setEditInventory] = useState({
    image: "",
    product_name: "",
    sku: "",
    location: "",
    count: "",
  });

  useEffect(() => {
    inventoryService.getAll().then((inventory) => setInventory(inventory));
  }, []);

  const handleDelete = async (id, awskey) => {
    const myInventory = inventory.find((i) => i.id === id);
    if (window.confirm(`Delete ${myInventory.product_name}?`)) {
      const filteredInventory = inventory.filter((i) => i.id !== id);
      await inventoryService.remove(id, awskey);
      setInventory(filteredInventory);
    }
  };

  const handleRowChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editInventory };
    newFormData[fieldName] = fieldValue;

    setEditInventory(newFormData);
  };

  return (
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
          inventory={inventory}
          setInventory={setInventory}
          setEditInventory={setEditInventory}
          editInventory={editInventory}
          handleDelete={handleDelete}
          handleRowChange={handleRowChange}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
