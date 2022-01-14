import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  IconButton,
} from "@chakra-ui/react";

export default function Inventory() {
  const [data, setData] = useState();

  const Cell = ({ item }) => {
    return (
      <Tr>
        <Td>{item.product_name}</Td>
        <Td>{item.sku}</Td>
        <Td>{item.location}</Td>
        <Td>{item.count}</Td>
        <Td>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Td>
        <Td>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Td>
      </Tr>
    );
  };

  useEffect(() => {
    axios.get("http://localhost:3001/api/inventory/all").then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);

  return (
    <Box p={4}>
      <Table size="sm" p={4}>
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>SKU</Th>
            <Th>Location</Th>
            <Th>Count</Th>
            <Th>Update</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((item) => (
            <Cell key={item.id} item={item} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
