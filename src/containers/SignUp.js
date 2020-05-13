// import React, {Component} from 'react';
// import {FormGroup, Tooltip, FormControl, FormLabel} from 'react-bootstrap';
// import LoaderButton from '../components/LoaderButton';
// import {Auth} from 'aws-amplify';
//
// // import './Signup.css';
//
// export default class SignUp extends Component {
//   state = {
//     isLoading: false,
//     username: '',
//     name: '',
//     lastName: '',
//     address: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     confirmationCode: '',
//     newUser: null
//   };
//
//   validateForm() {
//     return (
//       this.state.name.length > 0 &&
//       this.state.lastName.length > 0 &&
//       this.state.address.length > 0 &&
//       this.state.email.length > 0 &&
//       this.state.password.length > 0 &&
//       this.state.password === this.state.confirmPassword
//     );
//   }
//
//   validateConfirmationForm() {
//     return this.state.confirmationCode.length > 0;
//   }
//
//   handleChange = event => {
//     this.setState({
//       [event.target.id]: event.target.value
//     });
//   };
//
//   handleSubmit = async event => {
//     event.preventDefault();
//
//     let usernameArray = this.state.email.toString();
//     const username = usernameArray.split('@')[0];
//
//     this.setState({
//       isLoading: true,
//       username: username
//     });
//
//     try {
//       console.log("USERNAME: " + this.state.username);
//       console.log("PASSWORD: " + this.state.password);
//       console.log("EMAIL: " + this.state.email);
//       console.log("NAME: " + this.state.name);
//       console.log("FAMILY_NAME: " + this.state.lastName);
//       console.log("ADDRESS: " + this.state.address);
//       const newUser = await Auth.signUp({
//         username: username,
//         password: this.state.password,
//         email: this.state.email,
//         name: this.state.name,
//         family_name: this.state.lastName,
//         address: this.state.address
//       });
//       this.setState({
//         newUser
//       });
//     } catch (e) {
//       alert(e.message);
//     }
//
//     this.setState({isLoading: false});
//   };
//
//   handleConfirmationSubmit = async event => {
//     event.preventDefault();
//
//     this.setState({isLoading: true});
//
//     const username = this.state.username;
//     console.log('USERNAME: ' + username);
//
//     try {
//       await Auth.confirmSignUp(username, this.state.confirmationCode);
//       await Auth.signIn(username, this.state.password);
//
//       this.props.userHasAuthenticated(true);
//       this.props.history.push('/');
//     } catch (e) {
//       alert(e.message);
//       this.setState({isLoading: false});
//     }
//   };
//
//   renderConfirmationForm() {
//     return (
//       <form onSubmit={this.handleConfirmationSubmit}>
//         <FormGroup controlId="confirmationCode" bsSize="large">
//           <FormLabel>Confirmation Code</FormLabel>
//           <FormControl autoFocus type="tel" value={this.state.confirmationCode} onChange={this.handleChange}/>
//           <Tooltip id="emailCheck">Please check your email for the code.</Tooltip>
//         </FormGroup>
//         <LoaderButton
//           block
//           bsSize="large"
//           disabled={!this.validateConfirmationForm()}
//           type="submit"
//           isLoading={this.state.isLoading}
//           text="Verify"
//           loadingText="Verifying…"
//         />
//       </form>
//     );
//   }
//
//   renderForm() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <FormGroup controlId="name" bsSize="large">
//           <FormLabel>First Name</FormLabel>
//           <FormControl autoFocus type="name" value={this.state.name} onChange={this.handleChange}/>
//         </FormGroup>
//         <FormGroup controlId="lastName" bsSize="large">
//           <FormLabel>Last Name</FormLabel>
//           <FormControl type="lastName" value={this.state.lastName} onChange={this.handleChange}/>
//         </FormGroup>
//         <FormGroup controlId="address" bsSize="large">
//           <FormLabel>Address</FormLabel>
//           <FormControl type="address" value={this.state.address} onChange={this.handleChange}/>
//         </FormGroup>
//         <FormGroup controlId="email" bsSize="large">
//           <FormLabel>Email</FormLabel>
//           <FormControl type="email" value={this.state.email} onChange={this.handleChange}/>
//         </FormGroup>
//         <FormGroup controlId="password" bsSize="large">
//           <FormLabel>Password</FormLabel>
//           <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
//         </FormGroup>
//         <FormGroup controlId="confirmPassword" bsSize="large">
//           <FormLabel>Confirm Password</FormLabel>
//           <FormControl value={this.state.confirmPassword} onChange={this.handleChange} type="password"/>
//         </FormGroup>
//         <LoaderButton
//           block
//           bsSize="large"
//           disabled={!this.validateForm()}
//           type="submit"
//           isLoading={this.state.isLoading}
//           text="Sign Up"
//           loadingText="Signing up…"
//         />
//       </form>
//     );
//   }
//
//   render() {
//     return (
//       <div className="SignUp">{this.state.newUser === null ? this.renderForm() : this.renderConfirmationForm()}</div>
//     );
//   }
// }
