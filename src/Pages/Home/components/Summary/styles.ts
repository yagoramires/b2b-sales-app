import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 0.8rem;
  margin-top: -8rem;

  
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    gap: 0.25rem;
    margin-top: -2rem;
    font-size: 0.8rem;
  }
  
  div {
    background: #fff;
    padding: 1rem 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-body);
    
    @media (max-width: 1080px) {
      padding: 0.3rem 0.5rem;
    }
   }

  /* header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */

  select, .Total {
    display: block;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 3rem;
    color: #000;
    border: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (max-width: 1080px) {
    font-size: 1rem;
    margin: 0.4rem 0;
    line-height:1rem;
    }
  }

  strong{
    color: var(--text-body);
    font-size: 1rem;
    font-weight: 500;

    @media (max-width: 1080px) {
      font-size: 0.8rem;
    }
  }

  .Txt {
    font-size: 0.8rem;

    @media (max-width: 1080px) {
      font-size: 0.6rem;
    }
  }
`