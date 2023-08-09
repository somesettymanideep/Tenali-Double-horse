import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';


const { SearchBar } = Search;
const columns = [
  {
    dataField: 'slNo',
    text: 'Sl No'
  },
  {
    dataField: 'stateName',
    text: 'State Name'
  },
  {
    dataField: 'city',
    text: 'City'
  },
  {
    dataField: 'storeName',
    text: 'Store Name'
  }
];

class MyTable extends Component {
  render() {
    const data = [
      { slNo: 1, stateName: 'Connecticut', city: 'Weathersfield', storeName: 'Annpurna Indian Grocery' },
      { slNo: 2, stateName: 'Connecticut', city: 'Hartford', storeName: 'Godavari' },
      { slNo: 3, stateName: 'Massachusetts', city: 'Acton', storeName: 'Shivas super Bazar' },
      { slNo: 4, stateName: 'Massachusetts', city: 'Lowell', storeName: 'Maruthi Indian Grocery' },
      { slNo: 5, stateName: 'Massachusetts', city: 'Burlington', storeName: 'Towne Plaza' },
      { slNo: 6, stateName: 'Massachusetts', city: 'Burlington', storeName: 'Spiceland' },
      { slNo: 7, stateName: 'Massachusetts', city: 'Shrewsbury', storeName: 'Spiceh ut Bawarchi' },
      { slNo: 8, stateName: 'Massachusetts', city: 'Quincy', storeName: 'India Mart' },
      { slNo: 9, stateName: 'Massachusetts', city: 'Weymouth', storeName: 'Aha India' },
      { slNo: 10, stateName: 'Massachusetts', city: 'Tewksbury', storeName: 'Spicindya Grocery' },
      { slNo: 11, stateName: 'Washington', city: 'Seattle', storeName: 'ApnaBazar' },
      { slNo: 12, stateName: 'Washington', city: 'Redwood', storeName: 'ApnaBazar' },
      { slNo: 13, stateName: 'Washington', city: 'Bohell', storeName: 'ApnaBazar' },
      { slNo: 14, stateName: 'Virginia', city: 'Chantilly', storeName: 'Lotte Plaza' },
      { slNo: 15, stateName: 'Virginia', city: 'Springfield', storeName: 'Lotte Plaza' },
      { slNo: 16, stateName: 'Virginia', city: 'Herndon', storeName: 'Lotte Plaza' },
      { slNo: 17, stateName: 'New Jersey', city: 'Hillsborough', storeName: 'Patidar' },
      { slNo: 18, stateName: 'New Jersey', city: ' Finnegan', storeName: 'Patidar' },
      { slNo: 19, stateName: 'New Jersey', city: 'Hightstown', storeName: 'Patidar' },
      { slNo: 20, stateName: 'New Jersey', city: 'Franklin Park', storeName: 'Apna Bazar Farmers Market' },
      { slNo: 21, stateName: 'New Jersey', city: 'Centennial Ave', storeName: 'Asian Food Market' },
      { slNo: 22, stateName: 'New Jersey', city: 'Lawrence Township', storeName: 'Star Big Bazaar' },
      { slNo: 23, stateName: 'New Jersey', city: 'Old Bridge Township', storeName: 'Bhavani Food Farmer’s Market' },
      { slNo: 24, stateName: 'New Jerseys', city: 'East Windsor', storeName: 'Patel Brothers' },
      { slNo: 25, stateName: 'New Jersey', city: 'Oak Tree Rd Edison', storeName: 'Apna Bazar Cash & Carry' },
      { slNo: 26, stateName: 'New Jersey', city: 'Easton Ave', storeName: 'Star Bazaar' },
      { slNo: 27, stateName: 'New Jersey', city: 'Gaston Ave Somerville', storeName: 'Desi Bazaar' },
      { slNo: 28, stateName: 'New Jersey', city: 'Centennial Ave', storeName: 'Asian Food Market' },
      { slNo: 29, stateName: 'New Jersey', city: 'Plainsboro', storeName: 'Big Bazaar' },
      { slNo: 30, stateName: 'New Jersey', city: 'Bound Brook', storeName: 'Bhavani Cash And Carry' },
      { slNo: 31, stateName: 'New Jersey', city: 'Talmadge Rd', storeName: 'Indian Grocery Outlet' },
      
    ];

    return (
        <ToolkitProvider
          keyField="slNo"
          data={data}
          columns={columns}
          search
        >
          {
            props => (
              <div className='mt-5' style={{backgroundColor:'#f9f9f9'}}>
               <div className='search-section shadow-sm  p-3 bg-rounded'>
                      <div className='col-lg-6'>
                <h3>Find Your Store</h3>
                </div>
                <div className='col-lg-6'>
                <SearchBar {...props.searchProps} style={{borderColor:'black',border:'3px solid #66676A'}} />
                </div>
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  rowClasses={(row, rowIndex) => rowIndex % 2 === 0 ? 'odd-row' : 'even-row'}
                />
              </div>
            )
          }
        </ToolkitProvider>
      );
    }
  }
export default MyTable;
