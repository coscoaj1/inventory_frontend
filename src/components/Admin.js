import React from "react";
import { List, ListItem, Heading, Box } from "@chakra-ui/react";
import InventoryForm from "../components/InventoryForm";

export default function Admin() {
  return (
    <Box w="200px" minHeight="lg">
      <List p={4}>
        <ListItem>
          <Heading size="md">Inventory Tracker</Heading>
        </ListItem>
      </List>
      <InventoryForm />
    </Box>
  );
}
