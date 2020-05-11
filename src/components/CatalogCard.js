import React from "react";

class CatalogCard extends React.Component {
    render() {
        const catalog = this.props;
        return (
            <div className="catalog">
                <img src={catalog.image} />
                <div className="info">
                    <div className="name">{catalog.name}</div>
                    <div className="date">{catalog.date}</div>
                </div>
            </div>
        )
    }
}

export default CatalogCard;
