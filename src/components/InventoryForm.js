import React, { useRef } from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Box, Text, Button } from "@chakra-ui/react";
import "../index.css";

const validationSchema = Yup.object().shape({
  product_name: Yup.string()
    .min(2, "Too short!")
    .max(25, "Too Long!")
    .required("Required"),
  sku: Yup.number().typeError("must specify sku").required("Required"),
  location: Yup.string().min(2, "Too short!").required("Required"),
  count: Yup.number().min(1, "Too short!").required("Required"),
});

export default function InventoryForm({ inventory, setInventory }) {
  const ref = useRef();
  return (
    <Box p={4}>
      <Text className="label" size="md">
        Enter new item
      </Text>
      <Formik
        initialValues={{
          image: "",
          product_name: "",
          sku: "",
          location: "",
          count: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          setTimeout(() => {
            alert("product added!");
            ref.current.value = null;
            resetForm();
          }, 1000);
          const formData = new FormData();
          formData.append("image", values.image);
          formData.append("product_name", values.product_name);
          formData.append("sku", values.sku);
          formData.append("location", values.location);
          formData.append("count", values.count);
          const result = await axios.post(
            "http://localhost:3001/api/inventory",
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          setInventory(inventory.concat(result.data));
        }}
      >
        {(props) => (
          <Form autoComplete="off">
            <Field
              type="text"
              id="product_name"
              name="product_name"
              placeholder="Item name"
              className="field"
            />
            <Field
              type="text"
              id="sku"
              name="sku"
              placeholder="SKU"
              className="field"
            />
            <Field
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              className="field"
            />
            <Field
              type="text"
              id="count"
              name="count"
              placeholder="Count"
              className="field"
            />
            <label className="label" htmlFor="image">
              Thumbnail Image
            </label>
            <input
              ref={ref}
              type="file"
              id="image"
              name="image"
              onChange={(event) => {
                props.setFieldValue("image", event.target.files[0]);
              }}
              accept="image/*"
            />
            <Button mt={4} type="submit" size="sm">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
