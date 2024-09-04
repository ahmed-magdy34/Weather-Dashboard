import React from "react";
import WeatherForm from "../components/WeatherForm";
import WeatherDisplay from "../components/WeatherDisplay";
import { fetchWeather } from "../services/weatherService";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weatherData: null, loading: false, error: null };
  }

  componentDidMount() {
    const preferences = JSON.parse(localStorage.getItem("preferences"));
    if (preferences && preferences.city) {
      this.handleSearch(preferences.city);
    }
  }

  handleSearch = (city) => {
    this.setState({ loading: true, error: null });
    fetchWeather(city)
      .then((response) => {
        this.setState({ weatherData: response.data, loading: false });

        // Save the city in search history
        const searches = JSON.parse(localStorage.getItem("searches")) || [];
        if (!searches.includes(city)) {
          searches.push(city);
          localStorage.setItem("searches", JSON.stringify(searches));
        }
      })
      .catch((error) => {
        this.setState({ error: "City not found or API error", loading: false });
      });
  };

  render() {
    return (
      <div className="container mx-auto p-4">
        <WeatherForm onSearch={this.handleSearch} />
        {this.state.loading && <p>Loading...</p>}
        {this.state.error && <p>{this.state.error}</p>}
        {this.state.weatherData && (
          <WeatherDisplay data={this.state.weatherData} />
        )}
      </div>
    );
  }
}

export default Home;
