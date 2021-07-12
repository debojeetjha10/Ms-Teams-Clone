//this nis the navbar component
import React from 'react';
import './Navbar.css';
import teams_logo from './icon/teams.png'
import {Link} from 'react-router-dom'
import usr_logo from './icon/user.png'
class Navbar extends React.Component {
    // constructing the class to handle the input in search field 
    //input and do the searching
    constructor(props){
        super(props);
        this.state = {searchQuery: ''};
        this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

    }
   searchOnBing = ()=>{
        //getting the search input Dom element
        let searchInput = this.state.searchQuery;
        //searching the keyword
        if(searchInput !== ''){
        window.open(`https://bing.com/search?q=${searchInput}`)
        }
        //making the search field empty so that we don't have to
        // erase b/w searches
        this.setState({searchQuery:''})
        // returning false to prevent the parent page from reloading
        // This is explained in detailed here : https://stackoverflow.com/questions/49418385/how-to-stop-window-open-from-refreshing-the-window-in-javascript
        return false;       
      }
    handleSearchQueryChange(event){
        this.setState({searchQuery: event.target.value});
    }
    // redirecting to the meet page
    handleSearch(event) {
        this.searchOnBing();
        event.preventDefault();
      }
    render() {
        return (
            <div className='Navbar'>
                <div className='navbar-icon'>
                    <Link to='/' ><img className='navbar-icon' src={teams_logo} alt="teams logo"></img></Link>
                </div>
                <div className='search-bar-container'>
                <form onSubmit={this.handleSearch} ide= 'search-bar-form'>
                <input className = 'search-bar' value={this.state.searchQuery} onChange = {this.handleSearchQueryChange} type="text" placeholder="Search on Bing with 💓"/>
                </form>
                </div>
                <div >
                    <ul className='navbar-items'>
                        <li className='user-logo-container'><img src = {usr_logo} className = 'user-logo' alt='user-logo'></img></li>
                    </ul>
                </div>

            </div>
        )
    }



}
export default Navbar