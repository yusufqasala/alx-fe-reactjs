import React from "react";

const UserProfile = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        margin: "10px",
        borderRadius: "5px",
      }}
    >
      <h2 style={{ color: "blue", fontSize: "24px" }}>{props.name}</h2>
      <p>
        Age:{" "}
        <span style={{ fontWeight: "bold", color: "green" }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
