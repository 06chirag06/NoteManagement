import {useEffect, React, useState} from "react";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import axios from "axios";
import AddNoteButton from "./AddNoteButton";

export default function Trash(props) {

  // const username = useSelector((state) => state.username.value);
  const username = "adarsh";

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([axios.get(`http://localhost:8000/notes/getAll/${username}`)]);
  }, [username]);

  return (
    <>
      <div>Trash</div>
      <AddNoteButton isDark={props.isDark}/>
    </>
  );
}
