import React from "react";
import { Tr, Td, IconButton, Button } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import "../index.css";
function EditableRow({ item, setRowId, editInventory, handleRowChange }) {
  return (
    <Tr className="tr">
      <Td>
        <input
          className="editable"
          onChange={handleRowChange}
          type="text"
          required="required"
          name="product_name"
          value={editInventory.product_name}
        />
      </Td>
      <Td>
        <img className="thumbnail" src={item.image} alt={item.product_name} />
      </Td>
      <Td>
        <input
          className="editable"
          onChange={handleRowChange}
          type="text"
          required="required"
          placeholder="sku"
          name="sku"
          value={editInventory.sku}
        />
      </Td>
      <Td>
        <input
          className="editable"
          onChange={handleRowChange}
          type="text"
          required="required"
          name="location"
          value={editInventory.location}
        />
      </Td>
      <Td>
        <input
          className="editable"
          onChange={handleRowChange}
          type="text"
          required="required"
          name="count"
          value={editInventory.count}
        />
      </Td>
      <Td>
        <Button type="submit" size="sm">
          Save
        </Button>
      </Td>
      <Td>
        <IconButton onClick={() => setRowId(null)} size="sm">
          <SmallCloseIcon />
        </IconButton>
      </Td>
    </Tr>
  );
}

export default EditableRow;
