import React from "react";
// import { Carousel } from "react-bootstrap";

class CatalogCard extends React.Component {
  render() {
    const catalog = this.props;
    return (
      <div className="card-list">
        <img src={catalog.thumbnail}/>
        <div className="info">
          <div className="name">{catalog.name}</div>
          <div className="date">{catalog.categoryId}</div>
        </div>
      </div>
    )
  }

}

export default CatalogCard;
