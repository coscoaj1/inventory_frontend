import React from "react";
import { Tr, Td, IconButton, Button } from "@chakra-ui/react";
import { SmallCloseIcon, CheckIcon } from "@chakra-ui/icons";

function EditableRow({ item, setRowId, setEditInventory, editInventory }) {
  return (
    <Tr className="tr">
      <Td>
        <input
          onChange={setEditInventory}
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
          onChange={setEditInventory}
          type="text"
          required="required"
          placeholder="sku"
          name="sku"
          value={editInventory.sku}
        />
      </Td>
      <Td>
        <input
          onChange={setEditInventory}
          type="text"
          required="required"
          name="location"
          value={editInventory.location}
        />
      </Td>
      <Td>
        <input
          onChange={setEditInventory}
          type="text"
          required="required"
          name="count"
          value={editInventory.count}
        />
      </Td>
      <Td>
        <IconButton onClick={() => setRowId(null)} size="sm">
          <SmallCloseIcon />
        </IconButton>
      </Td>
      <Td>
        <Button size="sm">Save</Button>
      </Td>
    </Tr>
  );
}

export default EditableRow;
