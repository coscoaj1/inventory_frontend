import React from "react";
import { Tr, Td, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

function EditableRow({ item }) {
  return (
    <Tr className="tr">
      <Td>
        <input
          type="text"
          required="required"
          placeholder="Enter product name"
          name="product_name"
        />
      </Td>
      <Td>
        <img className="thumbnail" src={item.image} alt={item.product_name} />
      </Td>
      <Td>
        <input
          type="text"
          required="required"
          placeholder="Enter sku"
          name="sku"
        />
      </Td>
      <Td>
        <input
          type="text"
          required="required"
          placeholder="Enter location"
          name="location"
        />
      </Td>
      <Td>
        <input
          type="text"
          required="required"
          placeholder="Enter count"
          name="count"
        />
      </Td>
      <Td>
        <IconButton className="disabled" variant="disabled" size="sm">
          <EditIcon />
        </IconButton>
      </Td>
      <Td>
        <IconButton className="disabled" variant="disabled" size="sm">
          <DeleteIcon />
        </IconButton>
      </Td>
    </Tr>
  );
}

export default EditableRow;
