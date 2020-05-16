import React, {Component} from 'react';
import {HamburgerElastic} from 'react-animated-burgers'

class Menu extends Component {
    state = {
        isActive: false
    }

    toggleButton = () => {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render() {
        return(
            <HamburgerElastic  buttonWidth={20} buttonStyle={{'margin-right': '50px' }}isActive={this.state.isActive} 
                toggleButton={this.toggleButton} buttonColor="#50c3b2" barColor="white"/>
        )
    }
}

export default Menu