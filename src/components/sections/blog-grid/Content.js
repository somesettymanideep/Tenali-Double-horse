import React, { Component , Fragment} from 'react';


import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl ="https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json"


class Content extends Component {
    render() {
        return (
            <Fragment>
                <div>
    <ComposableMap>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
                
              
                
                
   
            
      
            </Fragment>
        );
    }
}

export default Content;