import {Link} from 'react-router-dom';
import styled from 'styled-components'

const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 18px 5%;
`
const NavBarContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 40px;
    `
const LeftNavBar = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 40px;
    > div {
        display: flex;
        gap: 2rem;
    }
`
const RightNavBar = styled.div`
    display: flex;
    gap: 12px;
`

const NavBar = () => {
    return (
        <OuterContainer>
            <NavBarContainer>
                <LeftNavBar>
                    <img src='/unread-logo-transparent.png' width="127" />
                    <div>
                        <Link id='discover' to="/discover">Discover</Link>
                        <Link id='profile' to="/user/">Profile</Link>
                        <Link id='blog' to='#'>Blog</Link>
                    </div>
                </LeftNavBar>
                <RightNavBar>
                    <a className='btn btn-tertiary' href='/'>Log in</a>
                    <a className='btn' href='/'>Sign up</a>
                </RightNavBar>
            </NavBarContainer>
        </OuterContainer>
    );
};

export default NavBar;