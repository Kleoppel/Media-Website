import React from "react";
import CatalogCard from "./CatalogCard";

function CatalogCardList(props) {
    return (
        <div>
            {props.catalogs.map(catalogInfo =>
                <CatalogCard key={catalogInfo.id} {...catalogInfo}/>)}
        </div>
    )
}

export default CatalogCardList;
