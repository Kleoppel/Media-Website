import React from "react";
import {AxiosInstance as axios} from "axios";

class SearchBar extends React.Component {
    state = { searchValue: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        // const resp = await axios.get(`%API%/${this.state.searchValue}`);
        // this.props.onSubmit(resp.data);
        this.setState({searchValue: ''});
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.searchValue}
                       onChange={event => this.setState({ searchValue: event.target.value })}
                       placeholder="Catalog Name"
                       required
                />
                <button>Search</button>
            </form>
        );
    }
}

export default SearchBar;
