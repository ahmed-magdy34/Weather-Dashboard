import React from "react";

class WeatherDisplay extends React.Component {
  render() {
    const { data } = this.props;
    const tempClass =
      data.current.temp_c > 30 ? "text-red-500" : "text-blue-500";

    return (
      <div className={`p-4 ${tempClass}`}>
        <h2 className="text-2xl font-bold">{data.location.name}</h2>
        <p>Temperature: {data.current.temp_c} °C</p>
        <p>Condition: {data.current.condition.text}</p>
        <img src={data.current.condition.icon} alt="Weather Icon" />

        <h3 className="mt-4 text-xl">Forecast for the next 5 days:</h3>
        <ul>
          {data.forecast.forecastday.map((day, index) => (
            <li key={index} className="mt-2">
              <p>
                {day.date}: {day.day.avgtemp_c} °C, {day.day.condition.text}
              </p>
              <img src={day.day.condition.icon} alt={`Icon for ${day.date}`} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default WeatherDisplay;
