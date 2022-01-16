import React, { useState, Fragment } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import "../index.css";

import { Table, Thead, Tr, Th, Tbody, Box } from "@chakra-ui/react";

export default function Inventory({
  inventory,
  handleDelete,
  editInventory,
  setEditInventory,
}) {
  const [rowId, setRowId] = useState(null);
  return (
    <Box p={4}>
      <form>
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
