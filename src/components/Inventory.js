import React, { useState, Fragment } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import "../index.css";
import inventoryService from "../services/inventory";

import { Table, Thead, Tr, Th, Tbody, Box } from "@chakra-ui/react";

export default function Inventory({
  inventory,
  setInventory,
  handleDelete,
  editInventory,
  setEditInventory,
  handleRowChange,
}) {
  const [rowId, setRowId] = useState(null);

  const handleEditRowSubmit = async (event) => {
    event.preventDefault();
    const editedRow = {
      id: rowId,
      image: editInventory.image,
      product_name: editInventory.product_name,
      sku: editInventory.sku,
      location: editInventory.location,
      count: editInventory.count,
    };

    const result = await inventoryService.update(rowId, editedRow);
    console.log(result);
    setInventory(inventory.map((item) => (item.id !== rowId ? item : result)));
    setRowId(null);
  };
  return (
    <Box p={4}>
      <form onSubmit={handleEditRowSubmit}>
        <Table className="table-spacing" size="sm" p={4}>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Thumbnail</Th>
              <Th>SKU</Th>
              <Th>Location</Th>
              <Th>Count</Th>
              <Th>Update</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {inventory?.map((item) => (
              <Fragment key={item.id}>
                {rowId === item.id ? (
                  <EditableRow
                    item={item}
                    setRowId={setRowId}
                    setEditInventory={setEditInventory}
                    editInventory={editInventory}
                    handleRowChange={handleRowChange}
                  />
                ) : (
                  <ReadOnlyRow
                    handleDelete={handleDelete}
                    setEditInventory={setEditInventory}
                    item={item}
                    setRowId={setRowId}
                  />
                )}
              </Fragment>
            ))}
          </Tbody>
        </Table>
      </form>
    </Box>
  );
}
