import React from "react";
import { Tr, Td, Button } from "@chakra-ui/react";
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
        <Button onClick={() => setRowId(null)} size="sm">
          Cancel
        </Button>
      </Td>
    </Tr>
  );
}

export default EditableRow;
