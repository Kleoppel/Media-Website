import React from 'react';
import Menu from "./Menu";
import SearchBar from "./SearchBar";


class Header extends React.Component {
// function Header(){

    searchCatalogs = (catalogSearchData) => {
        // this.setState(prevState => ({
        //   catalogs: [...prevState.catalogs, catalogSearchData],
        // }));
      };
   render() {
        return (
            <div  style={{
                'background-color': 'black',
                'color': "white",
                'display': 'inline-block',
                'width': '100%'}}>
                
                <Menu/>
                <img src="Super_Bowl_LIV.png" alt="Super Bowl LIV" style={{
                    'width': '50px'}}/>
                <SearchBar onSubmit={this.searchCatalogs}/>
            </div>
        
        )
   }
    
// }
}

export default Header;