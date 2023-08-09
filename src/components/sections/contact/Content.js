import React from "react";
import { geoCentroid } from "d3-geo";
import { Link } from 'react-router-dom';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation
} from "react-simple-maps";

import allStates from "../../../data/usadata.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
 
};

const MapChart = () => {
  return (
    <div className="section">
                <div className="container">
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) => (
          <>
            {geographies.map(geo => (
              <Geography
                key={geo.rsmKey}
                stroke="#FFF"
                geography={geo}
                fill="#DDD"
              />
            ))}
            {geographies.map(geo => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find(s => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={10} textAnchor="middle">
                          {cur.id}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>

              <div className="section text-center cta-2 cta bg-cover bg-center dark-overlay dark-overlay-2 bg-parallax" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/usa-locations.png)" }}>
                 
                  <div className="form">

                      <form>
                          <fieldset className="form__options">

                              <p className="form__answer">
                                  <input type="radio" name="match" id="match_1" value="guy" checked />
                                  <label for="match_1" className="text-white">
                                      <img src={process.env.PUBLIC_URL + "/assets/img/ig/1.png"} alt="img" />
                                      East Coast
                                  </label>
                              </p>

                              <p className="form__answer">
                                  <input type="radio" name="match" id="match_2" value="girl" />
                                  <label for="match_2" className="text-white">
                                      <img src={process.env.PUBLIC_URL + "/assets/img/ig/2.png"} alt="img" />
                                      West Coast
                                  </label>
                              </p>

                          </fieldset>

                      </form>
                  </div>

              </div>

              {/* east oast  */}
            

        
    </div>
    </div>


  );
};

export default MapChart;
