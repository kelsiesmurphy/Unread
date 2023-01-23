import {Link} from 'react-router-dom';


const NavBar = () => {

    return (
        <>
        <h1>Unread</h1>
        <div>
            <Link to="/">Discover</Link>
            <Link to="/user">Profile</Link>
            <p>Blog</p>
        </div>
        </>
    );
};

export default NavBar;