import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;

  @media (max-width: 1080px) {
    padding: 0.2rem;
    }

  @media print {
    padding: 2.5rem 1rem;
    background-color: var(--background)
  }
`