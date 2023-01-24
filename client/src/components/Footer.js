import styled from 'styled-components'

const FooterWrapper = styled.div`
    padding: 64px 5%;
    > hr {
        margin-block: 64px 32px;
        height: 1px;
        border: none;
        background-color: var(--clr-grey-200);
    }
`
const HorizontalList = styled.ul`
    display: flex;
    gap: 1rem;
    > li {
        list-style: none;
    }
`
const HorizontalSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`
const MainContent = styled.div`
    max-width: 482px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`
const AppStores = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
        <HorizontalSection>
            <MainContent>
                <img id='logo' src='/unread-logo-transparent.png' alt='unread logo' width="123"/>
                <p>
                    “The more that you read, the more things you will know. The more that you learn, the more places you'll go.”
                    <br/>
                    <br/>
                    Dr. Seuss
                </p>
                <HorizontalList>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Discover</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Help</a></li>
                    <li><a href='#'>Privacy</a></li>
                </HorizontalList>
            </MainContent>
            <AppStores>
                <p className='input-label'>Get the app</p>
                <a href='#'><img src="/socials/apple-store.svg" alt='Get app on Apple Store'/></a>
                <a href='#'><img src="/socials/google-play.svg" alt='Get app on Google Play Store'/></a>
            </AppStores>
        </HorizontalSection>
        <hr />
        <HorizontalSection>
            <p>© 2023 Unread. All rights reserved.</p>
            <HorizontalList>
                <li>
                    <a href='#'><img src="/socials/twitter.svg" alt='Twitter'/></a>
                </li>
                <li>
                    <a href='#'><img src="/socials/linkedin.svg" alt='LinkedIn'/></a>
                </li>
                <li>
                    <a href='#'><img src="/socials/facebook.svg" alt='Facebook'/></a>
                </li>
                <li>
                    <a href='#'><img src="/socials/github.svg" alt='GitHub'/></a>
                </li>
            </HorizontalList>
        </HorizontalSection>
    </FooterWrapper>
  )
}

export default Footer