import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Acess-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      //mockapi is used
      .post("https://668b73a00b61b8d23b099e92.mockapi.io/crud-operations", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/read">
          <button className="btn btn-secondary">Show Data</button>
        </Link>
      </div>
      <br />
      <br />
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div classNameName="mb-3">
          <label classNameName="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-3 form-check"></div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Create;
