import React from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
// import { uuid } from 'uuid/v4';

class Upload extends React.Component {


}

export default Upload;

// state = {
//   file: null,
//   config: null,
//   uploadProgressBar: null
// };
//
//  init = (configConstants) => {
//    this.setState.config = configConstants;
//
//    this.wireEvents();
//  };
//
//  wireEvents = () => {
//    let that = this;
//
//    this.value = null;
//  };
//
//  upload = (file, data, that) => {
//    let fd = new FormData();
//    for (let key in data.fields) {
//      if (data.fields.hasOwnProperty(key)) {
//        let value = data.fields[key];
//        fd.append(key, value);
//      }
//    }
//    fd.append('acl', 'private');
//    fd.append('file', file);
//
//    // const params = '?filename='+encodeURI(this.state.file.name)+'&filetype='+encodeURI(this.state.file.type);
//    // const path = '/upload';
//    // axios.get(config.apiGateway.invokeUrl+path+params, fd)
//    //   .then(res => {
//    //     console.log(res.statusText);
//    //     alert('Upload Finished');
//    //   }).fail(error => {
//    //   console.log(error);
//    //   alert('Failed to upload');
//    // });
//
//  };
//
//  onChangeHandler = (event) => {
//    this.setState({
//      file: event.target.files[0],
//      loaded: 0,
//    })
//  };
//
//  onClickHandler = () => {
//    console.log(this.props.auth.user.signInUserSession.accessToken);
//    const data = new FormData();
//    data.append('file', this.state.file, this.state.file.name);
//    const apiName = 'media-website';
//    const params = '?filename='+encodeURI(this.state.file.name)+'&filetype='+encodeURI(this.state.file.type);
//    const path = '/upload';
//    const myInit = {
//      headers: {
//        // 'Access-Control-Allow-Origin': '*',
//        // 'Access-Control-Allow-Headers': '*',
//        // 'Access-Control-Allow-Methods': '*',
//        // 'Access-Control-Allow-Credentials': true,
//        'authorization': (this.props.auth.user.signInUserSession.accessToken.toString())
//      },
//      response: true,
//      queryStringParameters: {
//        filename: encodeURI(this.state.file.name),
//        filetype: encodeURI(this.state.file.type)
//      },
//    };
//    console.log('API.get Call');
//    // API.post(apiName, path, myInit)
//    API.get(apiName, path, myInit)
//      .then(response => {
//        console.log('returned response: '+response);
//      })
//      .catch(error => {
//        console.log('FAILED: '+error.response);
//      });
//    // axios.post(config.apiGateway.invokeUrl+path+params, data);
//    //   .then(res => {
//    //     console.log(res.statusText)
//    //   }).fail(error => {
//    //     console.log(error);
//    // });
//  };
//
//  // submitFile = (e) => {
//  //   e.preventDefault();
//  //   const fd = new FormData();
//  //   fd.append('file', this.state.file[0]);
//  //   axios.post('/upload', fd, {
//  //     headers: {
//  //       'Authorization': ''
//  //     }
//  //   }).then(response => {
//  //
//  //   }).catch(error => {
//  //
//  //   });
//  // };
//
//  handleFileUpload = (e) => {
//    this.setState({file: e.target.files});
//  };
//
//  render () {
//    return (
//      <div>
//        <div>
//          <input label='upload file' type='file' onChange={this.onChangeHandler}/>
//          <button type='button' onClick={this.onClickHandler}>Upload</button>
//        </div>
//      </div>
//    );
//  }
// }
