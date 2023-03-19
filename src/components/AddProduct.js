import React, { useState } from "react";

const AddProduct = ({ addProduct }) => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [edition, setEdition] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [coverPhoto, setCoverPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      bookName,
      authorName,
      price,
      description,
      year,
      edition,
      serialNumber,
      coverPhoto,
    };
    addProduct(product);
    setBookName("");
    setAuthorName("");
    setPrice("");
    setDescription("");
    setYear("");
    setEdition("");
    setSerialNumber("");
    setCoverPhoto("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverPhoto(`${bookName}.jpg`);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCoverPhoto(reader.result);
    };
  };

  return (
    <div className="container">
      <form className="row" onSubmit={handleSubmit}>
        <div className="input-group mb-3 w-50">
          <span className="input-group-text">Book Name</span>
          <input
            type="text"
            className="form-control"
            placeholder="ex.The lenordo"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-50">
          <span className="input-group-text">Author Name</span>
          <input
            type="text"
            className="form-control"
            placeholder="ex. Meron Devider"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">Description</span>
          <textarea
            type="text"
            className="form-control"
            placeholder="ex. This book use to learn how to build idea..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-25">
          <span className="input-group-text">Price ₹</span>
          <input
            type="text"
            className="form-control"
            placeholder="ex. 10,000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-25">
          <span className="input-group-text">Year</span>
          <input
            type="text"
            className="form-control"
            placeholder="ex. 1995"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-25">
          <span className="input-group-text">Edition</span>
          <input
            type="text"
            className="form-control"
            placeholder="ex. 1st"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3 w-50">
          <span className="input-group-text">Serial Number</span>
          <input
            type="text"
            className="form-control"
            placeholder="ex. 3871313898"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="mb-3 d-flex">
          <label className="input-group-text me-2">Cover Photo</label>
          <input className="form-control w-25" type="file" id="formFile" />
        </div>

        <button type="button" className="btn btn-primary w-25">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
