import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SearchHistory from "./pages/SearchHistory";
import Preferences from "./pages/Preferences";
import Navbar from "./components/Navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search-history" element={<SearchHistory />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
