import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { geoMercator, geoPath } from "d3-geo";

class Mapointing extends Component {
  render() {
    const width = 800;
    const height = 600;

    const worldMapUrl =
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

    const projection = geoMercator().fitSize([width, height], worldMapUrl);

    return (
      <div className="container mb-5 pt-5 pb-3">
        <h5 className="custom-primary text-center">Where to Find Us</h5>
        <h2 className="title text-center">Explore Our Operating Locations</h2>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg width={width} height={height}>
            {/* World Map */}
            <path
              d={geoPath().projection(projection)(worldMapUrl)}
              fill="#EAEAEC"
              stroke="#D6D6DA"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            />

            {/* India Marker */}
            <Link to="/contact">
              <circle
                cx={projection([78.9629, 20.5937])[0]}
                cy={projection([78.9629, 20.5937])[1]}
                r="5"
                fill="#FF5533"
              />
            </Link>

            {/* USA Marker */}
            <Link to="/contact">
              <circle
                cx={projection([-95.7129, 37.0902])[0]}
                cy={projection([-95.7129, 37.0902])[1]}
                r="5"
                fill="#FF5533"
              />
            </Link>
          </svg>
        </div>
      </div>
    );
  }
}

export default Mapointing;
