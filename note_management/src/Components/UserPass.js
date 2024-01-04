import React from "react";

function UserPass({ onChange }) {
  const handleInput = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <>
      <div>
        <label htmlFor="username" className="form-label mt-2">
          Username
        </label>
        <input
          className="form-control"
          type="text"
          id="username"
          name="username"
          onChange={handleInput}
        />
      </div>
      <div>
        <label htmlFor="password" className="form-label mt-2">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          id="password"
          name="password"
          onChange={handleInput}
        />
      </div>
    </>
  );
}

export default UserPass;
