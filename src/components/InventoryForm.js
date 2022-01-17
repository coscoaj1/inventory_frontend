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
    .required("Required!"),
  sku: Yup.number().typeError("Must specify sku!").required("Required"),
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
          formData.set("product_name", values.product_name);
          formData.set("sku", values.sku);
          formData.set("location", values.location);
          formData.set("count", values.count);
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
            {props.errors.product_name && props.touched.product_name ? (
              <div className="error-text">{props.errors.product_name}</div>
            ) : null}
            <Field
              type="text"
              id="sku"
              name="sku"
              placeholder="SKU"
              className="field"
            />
            {props.errors.sku && props.touched.sku ? (
              <div className="error-text">{props.errors.sku}</div>
            ) : null}
            <Field
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              className="field"
            />
            {props.errors.location && props.touched.location ? (
              <div className="error-text">{props.errors.location}</div>
            ) : null}
            <Field
              type="text"
              id="count"
              name="count"
              placeholder="Count"
              className="field"
            />
            {props.errors.count && props.touched.count ? (
              <div className="error-text">{props.errors.count}</div>
            ) : null}
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
