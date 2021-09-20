import React from "react";
import {Link} from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
      <Link
        to={'/edit/' + props.id}
        state={{ from: 'occupation' }}
      >
        <button>
          <EditIcon />
        </button>
      </Link>
    </div>
  );
}

export default Note;
