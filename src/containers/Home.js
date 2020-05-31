import React, {Component} from 'react';
// import {ListGroup} from 'react-bootstrap';
// import {API} from 'aws-amplify';
// import './Home.css';

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

// export default class Home extends Component {
//   state = {
//     isLoading: true,
//     testApiCall: []
//   };

//   async componentDidMount() {
//     if (!this.props.isAuthenticated) {
//       return;
//     }

//     try {
//       const testApiCall = await this.testApiCall();
//       this.setState({testApiCall});
//     } catch (e) {
//       alert(e);
//     }

//     this.setState({isLoading: false});
//   }

//   mediaWebsite() {
//     return API.get('media-website', '/hello', 'GET');
//   }

//   renderTestAPI(mediaWebsite) {
//     console.log(mediaWebsite);
//     return mediaWebsite.message;
//   }

//   renderLander() {
//     return (
//       <div className="lander">
//         <h3 className="text-center"> Latest Videos on Miniflix </h3>
//         <hr/>
//         <div className="col-sm-12">
//         </div>
//       </div>
//     );
//   }

//   renderTest() {
//     return (
//       <div className="test">
//         <h1>Test API call</h1>
//         <ListGroup>{!this.state.isLoading && this.renderTestAPI(this.state.mediaWebsite)}</ListGroup>
//       </div>
//     );
//   }

//   render() {
//     return <div className="Home">{this.props.isAuthenticated ? this.renderTest() : this.renderLander()}</div>;
//   }
// }
