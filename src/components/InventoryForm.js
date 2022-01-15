import React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import "../index.css";
const baseUrl = "http://localhost:3001/api/inventory";

const validationSchema = Yup.object().shape({
  product_name: Yup.string()
    .min(2, "Too short!")
    .max(25, "Too Long!")
    .required("Required"),
  sku: Yup.number().typeError("must specify sku").required("Required"),
  location: Yup.string().min(2, "Too short!").required("Required"),
  count: Yup.number().min(1, "Too short!").required("Required"),
});

export default function InventoryForm({ createInventory }) {
  console.log(baseUrl);
  return (
    <Box p={4}>
      <Text size="md">Enter new item</Text>
      <Formik
        initialValues={{
          product_name: "",
          sku: "",
          location: "",
          count: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const formData = new FormData();
          //   formData.append("image", values.image);
          formData.append("product_name", values.product_name);
          formData.append("sku", values.sku);
          formData.append("location", values.location);
          formData.append("count", values.count);
          console.log(formData);
          const result = await axios.post(`${baseUrl}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });
          return result.data;
        }}
      >
        {(props) => (
          <Form autoComplete="off">
            <Field
              type="text"
              id="product_name"
              name="product_name"
              placeholder="Enter product name"
              className="field"
            />
            <Field
              type="text"
              id="sku"
              name="sku"
              placeholder="Enter sku"
              className="field"
            />
            <Field
              type="text"
              id="location"
              name="location"
              placeholder="Enter location"
              className="field"
            />
            <Field
              type="text"
              id="count"
              name="count"
              placeholder="Enter count on hand."
              className="field"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
