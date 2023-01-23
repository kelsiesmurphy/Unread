import styled from 'styled-components'

const HorizontalList = styled.ul`
    display: flex;
    gap: 1rem;
`

const HorizontalSection = styled.div`
    display: flex;
    gap: 1rem;
`

const Footer = () => {
  return (
    <>
        <HorizontalSection>
            <div>
                <img id='logo' src='/unread-logo-transparent' alt='unread logo'/>
                <p>
                    “The more that you read, the more things you will know. The more that you learn, the more places you'll go.”
                    <br/>Dr. Seuss
                </p>
                <HorizontalList>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Discover</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Help</a></li>
                    <li><a href='#'>Privacy</a></li>
                </HorizontalList>
            </div>
            <div>
                <p>Get the app</p>
                <a href='#'><img src="/socials/app-store.svg" alt='Get app on Apple Store'/></a>
                <a href='#'><img src="/socials/google-play.svg" alt='Get app on Google Play Store'/></a>
            </div>
        </HorizontalSection>
        <hr />
        <HorizontalSection>
            <p>© 2023 Book App. All rights reserved.</p>
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
    </>
  )
}

export default Footer