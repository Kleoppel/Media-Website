import React from "react";
import CatalogCard from "./CatalogCard";
import Slider from "react-slick";




function CatalogCardList(props) {
  const settings = props.data.settings;

    return (
      <div>
        <Slider {...props.settings}>
          {props.data.map(catalogInfo =>
            <CatalogCard key={catalogInfo.id} {...catalogInfo}/>)
            }
        </Slider>
      </div>
    );

}

export default CatalogCardList;
