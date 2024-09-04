import React from "react";

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searches: JSON.parse(localStorage.getItem("searches")) || [],
    };
  }

  render() {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold">Search History</h2>
        {this.state.searches.length === 0 ? (
          <p>No recent searches.</p>
        ) : (
          <ul>
            {this.state.searches.map((search, index) => (
              <li key={index}>{search}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default SearchHistory;
