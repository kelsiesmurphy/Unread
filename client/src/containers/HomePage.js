import React from "react";
import {Link} from 'react-router-dom';
import SearchBar from "../components/SearchBar"
import styled from "styled-components";

const MainWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    background: url('/background-gradient.jpg');
    background-size: cover;
`
const NavBarContainer = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    padding: 18px 5%;
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
const HomePageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
        height: 100vh;
    }
`
const HeroWrapper = styled.div`
    margin: 92px;
    max-width: 540px;
    display: flex;
    gap: 4px;
    flex-direction: column;
    > h6 {
        color: #09433D;
        font-size: var(--fs-text-md);
        margin-bottom: 12px;
    }
    > h1 {
        color: var(--clr-grey-900);
        font-size: var(--fs-display-md);
        font-weight: var(--fw-semibold);
    }
    > p {
        font-size: var(--fs-text-lg);
        margin-bottom: 24px;
    }
`

const HomePage = ({handleSubmitForm}) => {
    return (
        <MainWrapper>
                <NavBarContainer>
                    <LeftNavBar>
                        <img src='/unread-logo-transparent.png' width="127" />
                        <div>
                            <Link id='discover' to="/">Discover</Link>
                            <Link id='profile' to="/user/">Profile</Link>
                            <Link id='blog' to='#'>Blog</Link>
                        </div>
                    </LeftNavBar>
                </NavBarContainer>
            <HomePageWrapper>
                <HeroWrapper>
                    <h6>Unread</h6>
                    <h1>Search our collection</h1>
                    <p>Browse the collection and add all the books that float your boat to your reading list!</p>
                    <SearchBar handleSubmitForm={handleSubmitForm}/>
                </HeroWrapper>
                <img src="/book-grid.png"/>
            </HomePageWrapper>
        </MainWrapper>
    );
};

export default HomePage;