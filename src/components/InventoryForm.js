import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const InventorySchema = Yup.object().shape({
  product_name: Yup.string("Enter product name")
    .min(2, "Too short!")
    .max(25, "Too Long!")
    .required("Required"),
  sku: Yup.number("Enter SKU")
    .min(4, "Too short!")
    .max(10, "Too Long!")
    .required("Required"),
  location: Yup.string("Enter location")
    .min(2, "Too short!")
    .required("Required"),
  count: Yup.number("Enter count").min(1, "Too short!").required("Required"),
});

export default function InventoryForm({ createInventory }) {
  return (
    <Formik
      initialValues={{
        product_name: "",
        sku: "",
        location: "",
        count: "",
      }}
      validationSchema={validationSchema}
      onSubmit={}
    ></Formik>
  );
}