import React, { Component , Fragment} from 'react';

import Mapcountries from './Mapcountries';
import Newsletter from '../home-v2/Newsletter';
import Cards from './Productcards';
import Mapointing from './Mapointing';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Mapointing/>
     <Mapcountries/>
            
                {/* <Cards/> */}
      
            </Fragment>
        );
    }
}

export default Content;