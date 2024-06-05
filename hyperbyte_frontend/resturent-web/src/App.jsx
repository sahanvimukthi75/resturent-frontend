import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import List from "./components/List";
import Create from "./components/Create";
import Details from "./components/Details";
import Update from "./components/Update";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomeWrapper />} />
            <Route path="/list" element={<ListWrapper />} />
            <Route path="/create" element={<CreateWrapper />} />
            <Route path="/details" element={<DetailsWrapper />} />
            <Route path="/update/:id" element={<UpdateWrapper />} />
          </Routes>
        </main>
       
        <Footer />
      </div>
    </Router>
  );
};

const HomeWrapper = () => (
  <div id="home">
    <Home />
  </div>
);

const ListWrapper = () => (
  <div id="list">
    <List />
  </div>
);

const CreateWrapper = () => (
  <div id="create">
    <Create />
  </div>
);

const DetailsWrapper = () => (
  <div id="details">
    <Details />
  </div>
);

const UpdateWrapper = () => (
  <div id="update">
    <Update />
  </div>
);

export default App;
