import React, { useEffect, useState } from "react";
import { fetchAPI, submitAPI } from "./api";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Button,
  Card,
  Heading,
} from "@chakra-ui/react";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../contexts/useAlertContext";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const navigate = useNavigate();
  const [availableTimes, setAvailableTimes] = useState([]);
  // const { isLoading, response, submit } = useSubmit();
  // const { onOpen, onClose } = useAlertContext();
  const initialValues = {
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  };
  // useEffect(() => {
  //   if (response !== null) {
  //     onOpen(response.type, response.message);
  //     if (response.type === "success");
  //   }

  //   return () => setTimeout(() => onClose(), 3000);
  // }, [response]);

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const success = await submitAPI(values);
      if (success) {
        navigate("/success");
      } else {
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      // handle error
    } finally {
      setSubmitting(false);
    }
  };
  const reservationSchema = Yup.object().shape({
    date: Yup.date().required("Please choose a date"),
    time: Yup.string().required("Please choose a time"),
    guests: Yup.number()
      .min(1, "At least one guest is required")
      .max(10, "Maximum 10 guests allowed")
      .required("Please enter number of guests"),
    occasion: Yup.string().required("Please choose an occasion"),
  });

  return (
    <Card margin="4rem auto !important" p="20" maxWidth="380px">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={reservationSchema}
      >
        {({
          values,
          errors,
          touched,
          getFieldProps,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isLoading,
          isValid,
          setFieldValue,
        }) => (
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
          >
            <Heading as="h1">Booking Form</Heading>
            <FormControl isInvalid={errors.date && touched.date}>
              <FormLabel htmlFor="date">Choose date</FormLabel>
              <Input
                type="date"
                id="date"
                onChange={async (event) => {
                  setFieldValue("date", event.target.value);
                  try {
                    const times = await fetchAPI(new Date(event.target.value));
                    setAvailableTimes(times);
                  } catch (error) {
                    console.error(error);
                    // handle error
                  }
                }}
                {...getFieldProps("date")}
              />
              <FormErrorMessage>{errors.date}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.time && touched.time}>
              <FormLabel htmlFor="time">Choose time</FormLabel>
              <Select id="time" {...getFieldProps("time")}>
                <option value="" disabled>
                  Select time
                </option>
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </Select>
              <FormErrorMessage>{errors.time}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.guests && touched.guests}>
              <FormLabel htmlFor="guests">Number of guests</FormLabel>
              <Input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                {...getFieldProps("guests")}
              />
              <FormErrorMessage>{errors.guests}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.occasion && touched.occasion}>
              <FormLabel htmlFor="occasion">Occasion</FormLabel>
              <Select id="occasion" {...getFieldProps("occasion")}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </Select>
              <FormErrorMessage>{errors.occasion}</FormErrorMessage>
            </FormControl>

            <Button
              isLoading={isLoading}
              loadingText="Submitting..."
              backgroundColor="#F4CE14"
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              Make Your reservation
            </Button>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default BookingPage;
