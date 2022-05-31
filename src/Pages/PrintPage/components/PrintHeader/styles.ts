import styled from 'styled-components'

export const Container = styled.header`
  background: var(--red)
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 1080px) {
    padding: 2rem 1rem 4rem;
  }
  
  @media print {
      padding: 2rem 1rem 4rem;

      button{
        visibility: hidden;
      }
    }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--light-red);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }

    @media (max-width: 1080px) {
    padding: 0 1rem;
    }
  }

  img {
    width: 10rem;

  @media (max-width: 1080px) {
    width: 8rem;
  }

  @media print {
    width: 10rem;
  }


  }
`;