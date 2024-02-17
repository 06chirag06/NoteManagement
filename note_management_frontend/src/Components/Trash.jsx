import {useEffect, React, useState} from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Trash() {
  const plusStyle = {
    position: "fixed",
    bottom: "4%",
    right: "2%",
    color: "yellow",
  };

  // const username = useSelector((state) => state.username.value);
  const username = "adarsh";

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([axios.get(`http://localhost:8000/notes/getAll/${username}`)]);
  }, [username]);

  return (
    <>
      <div>Trash</div>
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
