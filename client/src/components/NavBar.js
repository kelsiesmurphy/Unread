import {Link} from 'react-router-dom';


const NavBar = () => {

    return (
        <>
        <h1>Unread</h1>
        <div id="nav">
            <Link to="/">Discover</Link>
            <Link to="/user/">Profile</Link>
            <Link to='/'>Blog</Link>
        </div>
        </>
    );
};

export default NavBar;