import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="bg-gray-800 p-4 text-white">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/profile" className="mr-4">
          Profile
        </Link>
        <Link to="/search-history" className="mr-4">
          Search History
        </Link>
        <Link to="/preferences">Preferences</Link>
      </nav>
    );
  }
}

export default Navbar;
