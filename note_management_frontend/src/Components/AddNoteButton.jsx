import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useState } from "react";

const AddNoteButton = (props) => {
  const [data, setData] = useState([]);
  const username = "adarsh";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const plusStyle = {
    position: "fixed",
    bottom: "4%",
    right: "2%",
    color: props.isDark ? "yellow" : "#3B60E4",
  };

  const handleInsertNote = async () => {
    const data = {
      username: username,
      title: "Untitled Note",
      content: "",
      location: "main",
      collaborator: "",
    };
    try {
      // const response = await axios.post(endpoints.insertNote, data);
      // dispatch(updateNotesId(response.data._id));
      navigate("/userid/newnote", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <IoAddCircleOutline
      style={plusStyle}
      size={50}
      className="add-button"
      onClick={handleInsertNote}
      role="button"
    />
  );
};

export default AddNoteButton;
