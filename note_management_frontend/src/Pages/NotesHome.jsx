import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import NotesHomeNavbar from "../Components/NotesHomeNavbar";
import NotesHomeSidebar from "../Components/NotesHomeSidebar";
import NotesContent from "../Components/NotesContent";
import InsertNote from "../Components/InsertNote";
import Labels from "../Components/Labels";
import ArchiveNotes from "../Components/ArchiveNotes";
import Trash from "../Components/Trash";
import "../Style/NotesHome.css";

export default function Users() {
  const url = window.location.pathname;
  let container = useRef(null); //to access the DOM element

  const [isHome, setIsHome] = useState(false);
  const [isLabels, setIsLabels] = useState(false);
  const [isArchive, setIsArchive] = useState(false);
  const [isTrash, setIsTrash] = useState(false);
  const [isNewNote, setIsNewNote] = useState(false);

  const [height, setHeight] = useState(0); // to find height of component except navbar

  const navigate = useNavigate();

  const changeView = useCallback(() => {
    console.log(url);
    if (url.includes("home")) {
      setIsHome(true);
      setIsArchive(false);
      setIsLabels(false);
      setIsTrash(false);
      setIsNewNote(false);
    } else if (url.includes("labels")) {
      setIsHome(false);
      setIsArchive(false);
      setIsLabels(true);
      setIsTrash(false);
      setIsNewNote(false);
    } else if (url.includes("archive")) {
      setIsHome(false);
      setIsArchive(true);
      setIsLabels(false);
      setIsTrash(false);
      setIsNewNote(false);
    } else if (url.includes("trash")) {
      setIsHome(false);
      setIsArchive(false);
      setIsLabels(false);
      setIsTrash(true);
      setIsNewNote(false);
    } else if (url.includes("newnote")) {
      setIsNewNote(true);
      setIsHome(false);
      setIsArchive(false);
      setIsLabels(false);
      setIsTrash(false);
    }
  }, [url]);

  useEffect(() => {
    // if (!localStorage.getItem("token")) {
    //   navigate("/", { replace: true });
    // }
    changeView();
  }, [navigate, changeView]);

  useLayoutEffect(() => {
    setHeight(window.innerHeight - container.current.offsetHeight);
    console.log(container.current.clientHeight);
    console.log(height);
  }, [height]);

  return (
    <div className="container-fluid bg-viridian-green">
      {/* style={{ minHeight: height + container.current.offsetHeight }} */}
      <div className="row" ref={container}>
        <NotesHomeNavbar />
      </div>
      <div className="row" style={{ minHeight: height }}>
        <div className="col-2 m-0 p-0 border-end border-1">
          <NotesHomeSidebar />
        </div>
        {isHome && (
          <>
            <div
              className="d-flex col-10 m-0 bg-viridian-green p-5"
              id="note-content"
            >
              <NotesContent />
            </div>
          </>
        )}
        {isNewNote && (
          <div className="col-10 m-0 p-0 pb-5">
            <InsertNote />
          </div>
        )}

        {isArchive && (
          <div className="col-10 m-0 p-0 pb-5">
            <ArchiveNotes />
          </div>
        )}

        {isLabels && (
          <div className="col-10 m-0 p-0 pb-5">
            <Labels />
          </div>
        )}

        {isTrash && (
          <div className="col-10 m-0 p-0 pb-5">
            <Trash />
          </div>
        )}
        {/* <div>
              <span id="background-text-notes">INLINE</span>
            </div> */}
      </div>
    </div>
  );
}
