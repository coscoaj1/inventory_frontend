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

export default function Inventory({ inventory, handleDelete }) {
  const Cell = ({ item }) => {
    return (
      <Tr>
        <Td>{item.product_name}</Td>
        <Td>{item.sku}</Td>
        <Td>{item.location}</Td>
        <Td>{item.count}</Td>
        <Td>
          <IconButton size="sm">
            <EditIcon />
          </IconButton>
        </Td>
        <Td>
          <IconButton
            onClick={() => {
              handleDelete(item.id);
            }}
            size="sm"
          >
            <DeleteIcon />
          </IconButton>
        </Td>
      </Tr>
    );
  };

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
          {inventory?.map((item) => (
            <Cell key={item.id} item={item} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
