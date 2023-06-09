import React, { useState } from "react";
import UserService from "../services/UserService";

const AddUser = () => {
  const initialUserState = {
    id: null,
    name: "",
    country: "",
    email: "",
  };
  const [User, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...User, [name]: value });
  };

  const saveUser = () => {
    var data = {
      name: User.name,
      email: User.email,
      country: User.country,
    };

    UserService.create(data)
      .then((response) => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          country: response.data.country,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
    <div className="edit-form">
      {submitted ? (
        <div>
          <strong>
            <p class="text-success">Registration Successsful!</p>
          </strong>
          <button className="btn btn-success" onClick={newUser}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="name"
              className="form-control"
              id="name"
              required
              value={User.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              required
              value={User.country}
              onChange={handleInputChange}
              name="country"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              required
              value={User.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>

          <button onClick={saveUser} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
