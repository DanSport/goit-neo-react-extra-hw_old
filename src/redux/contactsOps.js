import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://6716349233bc2bfe40bce21c.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
        return response.data.map((contact) => ({
        ...contact,
        name:
          typeof contact.name === "string" ? contact.name : "Unnamed Contact",
        number:
          typeof contact.number === "string"
            ? contact.number
            : "Unknown Number",
      }));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post(API_URL, { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
/*
export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    
  }
);}*/

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://6716349233bc2bfe40bce21c.mockapi.io/contacts/${id}`
      );
      if (response.status === 200) {
        return id;
      } else {
        return thunkAPI.rejectWithValue("Failed to delete contact.");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);