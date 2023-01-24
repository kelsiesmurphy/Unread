import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    min-height: 318px;
    background: url('/background-gradient.jpg');
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    > h1 {
        font-size: var(--fs-display-sm);
        color: var(--clr-grey-900);
    }
    > p {
        font-size: var(--fs-text-xl);
        color: var(--clr-grey-600);
    }
`

const SectionHeader = ({ header, subheader }) => {
  return (
    <HeaderWrapper>
        <h1>{header}</h1>
        <p>{subheader}</p>
    </HeaderWrapper>
  )
}

export default SectionHeader