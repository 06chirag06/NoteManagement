import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotesHomeNavbar from "../Components/NotesHomeNavbar";
import NotesHomeSidebar from "../Components/NotesHomeSidebar";
import NotesOutline from "../Components/NotesOutline";
import { IoAddCircleOutline } from "react-icons/io5";
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
    if (url.includes("home")) {
      setIsHome(true);
      setIsArchive(false);
      setIsLabels(false);
      setIsTrash(false);
      setIsNewNote(false);
    } else if (url.includes("labels")) {
      setIsHome(true);
      setIsArchive(false);
      setIsLabels(true);
      setIsTrash(false);
      setIsNewNote(false);
    } else if (url.includes("archive")) {
      setIsHome(true);
      setIsArchive(true);
      setIsLabels(false);
      setIsTrash(false);
      setIsNewNote(false);
    } else if (url.includes("trash")) {
      setIsHome(true);
      setIsArchive(false);
      setIsLabels(false);
      setIsTrash(true);
      setIsNewNote(false);
    }
    if (url.includes("newNote")) {
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

  const plusStyle = {
    position: "fixed",
    bottom: "4%",
    right: "2%",
    color: "yellow",
  };

  return (
    <>
      <div className="container-fluid main-wrapper bg-viridian-green">
        <div className="row" ref={container}>
          <NotesHomeNavbar />
        </div>
        <div className="row" style={{ minHeight: height }}>
          <div className="col-2 m-0 p-0 border-end border-1">
            <NotesHomeSidebar />
          </div>
          <div className="col-10 m-0 p-0 bg-viridian-green">
            <div className="row m-0 p-0 ps-5 pe-5 pt-5 note-card">
              <div className="col-3">
                <NotesOutline
                  title="Java"
                  content="This is a sample java note"
                />
              </div>
            </div>
            <Link to="/userId/home/newNote">
              <IoAddCircleOutline
                style={plusStyle}
                size={50}
                className="add-button"
              />
            </Link>
            {/* <div>
              <span id="background-text-notes">INLINE</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
