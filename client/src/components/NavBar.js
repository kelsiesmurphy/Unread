import {Link} from 'react-router-dom';


const NavBar = () => {

    return (
        <>
        <div id="nav">
            <Link id='discover' to="/">Discover</Link>
            <Link id='profile' to="/user/">Profile</Link>
            <Link id='blog' to='#'>Blog</Link>
        </div>
        </>
    );
};

export default NavBar;