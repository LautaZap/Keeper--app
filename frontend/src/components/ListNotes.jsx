import React, { useState, useEffect} from "react";
import Swal from "sweetalert2";
import Note from "./Note";
import clientAxios from "../config/axios";

const ListNotes = (props) => {
  const [notes, setNotes] = useState([]);

  async function seeNotes() {
    const res = await clientAxios.get("/api/notes");
    setNotes(res.data);
  }

  useEffect(() => {
    seeNotes();
  }, []);

  function deleteNote(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeNote(id);
        Swal.fire("Deleted!", "Your note has been deleted.", "success");
      }
    });
  }

  async function removeNote(id) {
    await clientAxios.delete("/api/notes/" + id);
    seeNotes();
  }

  return (
    <div>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default ListNotes;
