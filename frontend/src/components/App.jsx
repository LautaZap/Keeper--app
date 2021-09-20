import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import ListNotes from "./ListNotes";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={ListNotes} />
      <Route path="/edit/:id" component={CreateArea} />
      <Route path="/create" component={CreateArea} />
      <Footer />
    </Router>
  );
}

export default App;
