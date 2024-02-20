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
import TrashBar from "./TrashBar";

export default function NotesContent(props) {
  // const _id = useSelector((state) => state.notesId.value);

  const [data, setData] = useState([]);
  const username = localStorage.getItem("username");
  const location = props.url.includes("home")
    ? "main"
    : props.url.includes("archive")
    ? "archive"
    : "trash";
  // const username = "adarsh";
  const navigate = useNavigate();

  const fetchContentBody = (content) => {
    const regex = /(<([^>]+)>)/gi;
    const contentBody = content.replaceAll(regex, "");
    return contentBody.length > 50
      ? contentBody.substring(0, 50) + "..."
      : contentBody;
  };

  const handleNoteClick = async (event, id) => {
    // event.stopPropagation();
    console.log(event.currentTarget);
    try {
      const response = await axios.get(`${endpoints.getNote}/${id}`);
      console.log(response);
      navigate("/userid/updatenote", {
        state: {
          title: response.data.title,
          content: response.data.content,
          _id: response.data._id,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${endpoints.getAllNotes}/${username}/${location}`
      );
      setData(response.data);
      props.handleNoNote(false);
      console.log(data);
    } catch (err) {
      props.handleNoNote(true);
      console.log(err);
    }
  };

  useEffect(() => {
    
    document.body.style.backgroundColor = props.bgColor;
    fetchData();
  }, [location]);

  return (
    <>
      {/* {fakeNotesRepo.map((note) => (
        <div className="m-0 p-0" key={note.id}>
          <NotesOutline
            title={note.title}
            content={note.content}
            isDark={props.isDark}
          />
        </div>
      ))} */}
         {/* <div className="row m-0 p-0">
           <div
             className={
               "col-12 text-center fst-italic " + props.isDark
                 ? "text-light"
                 : "text-dark"
             }
           >
             Notes in the Trash are deleted after 7 days. &nbsp;&nbsp;
             <button className="">Empty Trash</button>
           </div>
         </div> */}
         {/* <div className="row d-block">
          <div className="col-12">
            Notes will automatically delete after 7 days
          </div>
         </div> */}
      {data.map((dataItems) => (
        <div
          className="m-0 p-0"
          key={dataItems._id}
          onClick={(event) => handleNoteClick(event, dataItems._id)}
        >
          <NotesOutline
            title={dataItems.title}
            content={fetchContentBody(dataItems.content)}
            id={dataItems._id}
            isDark={props.isDark}
            location={location}
            // fetchData={fetchData}
          />
        </div>
      ))}
      <AddNoteButton isDark={props.isDark} />
    </>
  );
}
