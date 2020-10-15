import React, { useState, useEffect } from 'react';
import S3ImageUpload from "../components/S3ImageUpload";
import API, {graphqlOperation} from '@aws-amplify/api';
import * as queries from "../graphql/queries";
import DropdownComponent from "../components/DropdownComponent";

// This page is used to upload photos/videos/pdf's,
// assign them to categories, and provide any necessary info about the upload.
export default function Upload() {
    const [categories, setCategories] = useState([
      { label: "Loading...", value: "" }
    ]);
    const [dropdownChoice, setDropdownChoice] = useState({});

    useEffect(() => {
      async function fetchData() {
        const result = await API.graphql(graphqlOperation(queries.listCategorys, {limit: 999}));
        setCategories(result.data.listCategorys.items.map(({ id, name }) => ({ id: id, label: name, value: name })));
      }

      fetchData();
    }, []);

  return (
    <div className="upload">
      <h1>Upload</h1>
      <DropdownComponent placeholder="Select Category" categories={categories} clickFunction={setDropdownChoice}/>
      <S3ImageUpload dropdownChoice={dropdownChoice}/>
    </div>
  )
}
