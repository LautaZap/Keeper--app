import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Swal from "sweetalert2";
import clientAxios from '../config/axios';

function CreateArea(props) {
  const id = props.match.params.id;

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [zoom, setZoom] = useState(false);
  const [finishCreate, setFinishCreate] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setIsEditing(true);
      async function getNote() {
        const res  = await clientAxios.get('/api/notes/' + id );
        setNote({
          title: res.data.title,
          content: res.data.content,
        });
      }
      getNote();
      setZoom(true);
    }
  }, [id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  async function addNote(newNote) {
    let res;
    if (isEditing) {
      res = await clientAxios.put(
        "/api/notes/" + props.match.params.id,
        {
          title: note.title,
          content: note.content,
        }
      );
    } else {
      res = await clientAxios.post("/api/notes", {
        title: note.title,
        content: note.content,
      });
    }
    success(res.data.message);
    setFinishCreate(true);
  }

  function success(message) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: message,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  function zoomEffect() {
    setZoom(true);
  }

  return (
    <div>
      {finishCreate ? <Redirect to="/" /> : null}
      <form onClick={zoomEffect} className="create-note">
        <input
          style={{ display: !zoom ? "none" : "inline" }}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder={!isEditing ? "Title" : note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder={!isEditing ? "Take a note..." : note.content}
          rows={zoom ? 3 : 1}
        />
        <Zoom in={zoom}>
          <Fab
            onClick={(e) => {
              e.preventDefault();
              addNote();
            }}
          >
            {!isEditing ? <AddCircleIcon /> : <CheckCircleIcon />}
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
