import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ArchiveNotes() {
  const plusStyle = {
    position: "fixed",
    bottom: "4%",
    right: "2%",
    color: "yellow",
  };

  const username = "adarsh";

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([axios.get(`http://localhost:8000/notes/${username}`)]);
  }, [username]);
  return (
    <>
      <div>Archive</div>
      <Link to="/userid/newnote">
        <IoAddCircleOutline
          style={plusStyle}
          size={50}
          className="add-button"
        />
      </Link>
    </>
  );
}
