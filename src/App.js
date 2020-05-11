import React from 'react';
import './App.css';
import CatalogCardList from './components/CatalogCardList';
import SearchBar from './components/SearchBar';

const testData = [
  {id: 1, name: "Red Angus", date: "12-31-2020",
    image: "././images/mcdonald_front_cover.PNG"},
  {id: 2, name: "McDonalds", date: "10-31-2020",
    image: "././images/mcdonald_front_cover.PNG"}
];

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     catalogs: testData,
  //   };
  // }
  state = {
    catalogs: testData,
  };
  searchCatalogs = (catalogSearchData) => {
    this.setState(prevState => ({
      catalogs: [...prevState.catalogs, catalogSearchData],
    }));
  };

  render() {
    return (
        <div className="App">
          <SearchBar onSubmit={this.searchCatalogs}/>
          <CatalogCardList catalogs={testData}/>
        </div>
    );
  }
}

export default App;
