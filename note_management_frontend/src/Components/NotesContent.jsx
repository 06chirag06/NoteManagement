import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import { fakeNotesRepo } from "../data/fakeNotesRepo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import NotesOutline from "./NotesOutline";
import { endpoints } from "../utils/Constants";
import { updateNotesId } from "../App/reducers/notesIdSlice";
import AddNoteButton from "./AddNoteButton";

export default function NotesContent(props) {
  // const _id = useSelector((state) => state.notesId.value);

  const [data, setData] = useState([]);
  const username = "adarsh";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const handleInsertNote = async () => {
  //   const data = {
  //     username: username,
  //     title: "Untitled Note",
  //     content: "",
  //     location: "main",
  //     collaborator: "",
  //   };
  //   try {
  //     // const response = await axios.post(endpoints.insertNote, data);
  //     // dispatch(updateNotesId(response.data._id));
  //     navigate("/userid/newnote", { replace: true });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  // const username = useSelector((state) => state.userInfo.username);

  // const fetchData = useCallback(async () => {
  //   setData([
  //     await axios.get(`http://localhost:8000/notes/getAll/${username}`),
  //   ]);
  //   console.log(data);
  // }, [setData, data, username]);

  // const regex = /(<([^>]+)>)/gi;
  // const newString = string.replace(regex, "");
  // setString(newString);

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get(
    //       `${endpoints.getAllNotes}/${username}`
    //     );
    //     setData(response.data);
    //     props.handleNoNote(false);
    //     console.log(data);
    //   } catch (err) {
    //     props.handleNoNote(true);
    //     console.log(err);
    //   }
    // };
    // fetchData();
  }, []);

  return (
    <>
      {fakeNotesRepo.map((note) => (
        <div className="m-0 p-0" key={note.id}>
          <NotesOutline
            title={note.title}
            content={note.content}
            isDark={props.isDark}
          />
        </div>
      ))}

      {/* {data.map((dataItems) => (
        <div className="m-0 p-0" key={dataItems._id}>
          <NotesOutline
            title={dataItems.title}
            content={
              dataItems.content.length > 50
                ? dataItems.content.substring(0, 50) + "..."
                : dataItems.content
            }
          />
        </div>
      ))} */}
      {/* </div> */}
      {/* </div> */}
      <AddNoteButton isDark={props.isDark} />
    </>
  );
}
