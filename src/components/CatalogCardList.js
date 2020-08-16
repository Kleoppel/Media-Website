import React, { useEffect } from "react";
import CatalogCard from "./CatalogCard";
import Slider from "react-slick";
// import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// import {Grid, Header, Input, List, Segment} from 'semantic-ui-react'

function CatalogCardList(props) {

  const settings = props.data.settings;

    return (
      <div className="card-list-container">
        <Slider {...props.settings}>
          {props.data.map(catalogInfo =>
            <CatalogCard key={catalogInfo.id} {...catalogInfo}/>)
            }
        </Slider>
      </div>
    );

}

export default CatalogCardList;
