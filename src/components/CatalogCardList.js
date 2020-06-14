import React, { useEffect } from "react";
// import { API, graphqlOperation } from "aws-amplify";
// import { listCategorys as ListCategories } from "../graphql/queries";
// import * as subscriptions from '../graphql/subscriptions'
import CatalogCard from "./CatalogCard";
import Slider from "react-slick";
// import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// import {Grid, Header, Input, List, Segment} from 'semantic-ui-react'

function CatalogCardList(props) {

  // function makeComparator(key, order = 'asc') {
  //   return (a, b) => {
  //     if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key))
  //       return 0;
  //
  //     const aVal = (typeof a[key] === 'string')
  //       ? a[key].toUpperCase()
  //       : a[key];
  //     const bVal = (typeof b[key] === 'string')
  //       ? b[key].toUpperCase()
  //       : b[key];
  //
  //     let comparison = 0;
  //     if (aVal > bVal)
  //       comparison = 1;
  //     if (aVal < bVal)
  //       comparison = -1;
  //
  //     return order === 'desc'
  //       ? (comparison * -1)
  //       : comparison
  //   };
  // }


  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await API.graphql(graphqlOperation(ListCategories, {limit: 999}));
  //     this.props.setCategories(result.data.ListCategories.items);
  //   }
  //   fetchData()
  // }, []);

  // useEffect(() => {
  //   let subscription;
  //   async function setupSubscription() {
  //     subscription = API.graphql(graphqlOperation(subscriptions.onCreateCategory)).subscribe({
  //       next: (data) => {
  //         const category = data.value.data.onCreateCategory;
  //         this.props.setCategories(a => a.concat([category].sort(makeComparator('name'))))
  //       }
  //     })
  //   }
  //   setupSubscription();
  //
  //   return () => subscription.unsubscribe();
  // }, []);
  //
  // const categoryItems = () => {
  //   return this.props.categories
  //     .sort(makeComparator('name'))
  //     .map(category => <List.Item key={category.id}>
  //       <NavLink to={`/categories/${category.id}`}>{category.name}</NavLink>
  //     </List.Item>);
  // };


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
