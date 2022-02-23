import React, { useState, Fragment } from "react";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import "../index.css";
import inventoryService from "../services/inventory";
import {
  useInventoryData,
  useDeleteItem,
  useUpdateItem,
} from "../services/useInventoryData";

import { Table, Thead, Tr, Th, Tbody, Box } from "@chakra-ui/react";

export default function Inventory({
  inventory,
  setInventory,
  editInventory,
  setEditInventory,
  handleRowChange,
}) {
  const [rowId, setRowId] = useState(null);

  const onSuccess = (data) => {
    // console.log("Perform side effect after fetching data", data);
  };
  const onError = (error) => {
    // console.log("Perform side effect after encountering error", error);
  };

  const { isLoading, error, data } = useInventoryData(onSuccess, onError);
  const { mutate: deleteItem } = useDeleteItem();
  const { mutate: updateItem } = useUpdateItem();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  if (error) {
    return <span>Error: {error.message}</span>;
  }

  const handleDelete = async (id, awskey) => {
    console.log(data);
    const myInventory = data.data.find((i) => i.id === id);
    if (window.confirm(`Delete ${myInventory.product_name}?`)) {
      deleteItem(id, awskey);
    }
  };
  const useHandleEditRowSubmit = (event) => {
    event.preventDefault();
    const updatedItem = {
      id: rowId,
      image: editInventory.image,
      product_name: editInventory.product_name,
      sku: editInventory.sku,
      location: editInventory.location,
      count: editInventory.count,
    };
    console.log(updatedItem);

    updateItem(updatedItem, rowId);
    // const result = await inventoryService.update(rowId, editedRow);
    // setInventory(inventory.map((item) => (item.id !== rowId ? item : result)));
    setRowId(null);
  };
  return (
    <Box p={4}>
      <form onSubmit={useHandleEditRowSubmit}>
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
            {data?.data.map((item) => (
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
