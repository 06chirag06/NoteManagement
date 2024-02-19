import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { useState } from "react";

const AddNoteButton = (props) => {
  const [data, setData] = useState([]);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const plusStyle = {
    position: "fixed",
    bottom: "4%",
    right: "2%",
    color: props.isDark ? "yellow" : "#3B60E4",
  };

  const handleInsertNote = async () => {
    try {
      // const response = await axios.post(endpoints.insertNote, data);
      // dispatch(updateNotesId(response.data._id));
      navigate("/userid/newnote", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Link to="/userid/newnote">
      <IoAddCircleOutline
        style={plusStyle}
        size={50}
        className="add-button"
        // onClick={handleInsertNote}
        role="button"
      />
    </Link>
  );
};

export default AddNoteButton;
