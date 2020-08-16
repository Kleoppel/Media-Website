import React from 'react';

import CatalogCardList from './../components/CatalogCardList';

const testData = [
  {
    id: 1, name: "Red Angus", date: "12-31-2020",
    image: "mcdonald_front_cover.PNG"
  },
  {
    id: 2, name: "McDonalds", date: "10-31-2020",
    image: "mcdonald_front_cover.PNG"
  },
  {
    id: 1, name: "Red Angus", date: "12-31-2020",
    image: "mcdonald_front_cover.PNG"
  },
  {
    id: 2, name: "McDonalds", date: "10-31-2020",
    image: "mcdonald_front_cover.PNG"
  },
  {
    id: 1, name: "Red Angus", date: "12-31-2020",
    image: "mcdonald_front_cover.PNG"
  },
  {
    id: 2, name: "McDonalds", date: "10-31-2020",
    image: "mcdonald_front_cover.PNG"
  }
];

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const settings2 = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


class Home extends React.Component {

  render() {
    const data1 = {
      data: testData,
      settings: settings
    };

    const data2 ={
      data: testData,
      settings: settings2
    };

     return (
       <div className="home">
         <h1>Home</h1>
         <h3>Latest catalogs</h3>
         <CatalogCardList {...data2}/>

         <h3>Breeds</h3>
         <CatalogCardList {...data1}/>
       </div>

     )
  }
}
export default Home;
