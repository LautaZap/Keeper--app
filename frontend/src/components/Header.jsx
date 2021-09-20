import React from "react";
import { Link } from "react-router-dom";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      <Link to={"/"}>
        <h1>
          <HighlightIcon />
          Keeper
        </h1>
      </Link>
      <Link to="/create">
        <h3>Create</h3> 
      </Link>
        
    </header>
  );
}

export default Header;
