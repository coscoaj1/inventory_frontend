import React from "react";
import { List, ListItem, Heading, Box } from "@chakra-ui/react";
import InventoryForm from "../components/InventoryForm";

export default function Admin({ inventory, setInventory }) {
  return (
    <Box w="200px" minHeight="lg">
      <List p={4}>
        <ListItem>
          <Heading textAlign="center" size="md">
            Inventory Tracker
          </Heading>
        </ListItem>
      </List>
      <InventoryForm inventory={inventory} setInventory={setInventory} />
    </Box>
  );
}
