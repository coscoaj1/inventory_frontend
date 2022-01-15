import React from "react";
import { List, ListItem, Heading } from "@chakra-ui/react";

export default function Admin() {
  return (
    <List w="200px" minHeight="lg" p={4}>
      <ListItem>
        <Heading size="md">Inventory Tracker</Heading>
      </ListItem>
    </List>
  );
}
