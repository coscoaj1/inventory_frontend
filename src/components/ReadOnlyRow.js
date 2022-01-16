import React from "react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Tr, Td, IconButton } from "@chakra-ui/react";

const ReadOnlyRow = ({ item, handleDelete, show, setRowId }) => {
  const setData = () => {
    console.log(item);
    setRowId(item.id);
  };
  return (
    <Tr className="tr">
      <Td>{item.product_name}</Td>
      <Td>
        <img className="thumbnail" src={item.image} alt={item.product_name} />
      </Td>
      <Td>{item.sku}</Td>
      <Td>{item.location}</Td>
      <Td>{item.count}</Td>
      <Td>
        <IconButton onClick={() => setData(item)}>
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

export default ReadOnlyRow;
