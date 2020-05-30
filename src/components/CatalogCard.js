import React from "react";
import { Carousel } from "react-bootstrap";

class CatalogCard extends React.Component {
  render() {
    const catalog = this.props;
    return (
      <div className="card-list">
        <img src={catalog.image} alt={catalog.image.toString()}/>
        <div className="info">
          <div className="name">{catalog.name}</div>
          <div className="date">{catalog.date}</div>
        </div>
      </div>
    )
  }

}

export default CatalogCard;
