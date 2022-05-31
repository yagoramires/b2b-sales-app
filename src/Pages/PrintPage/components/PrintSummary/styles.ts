import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 0.8rem;
  margin-top: -5rem;
  
  
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    gap: 0.25rem;
    margin-top: -2rem;
    font-size: 0.8rem;
  }
  
  @media print {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 0.8rem;
    margin-top: -5rem;
  }
  
  div {
    background: #fff;
    padding: 1.5rem 1.5rem;
    border-radius: 0.25rem;
    color: var(--text-body);
    
    @media (max-width: 1080px) {
      padding: 0.3rem 0.5rem;
    }

    @media print {
      padding: 1.5rem 1.5rem;
  }
   }

  /* header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } */

  strong{
    color: black;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 0.5rem;
    
    @media (max-width: 1080px) {
      font-size: 0.8rem;
    }
    
    &:nth-child(4) {
      font-weight: 500;
    }
  }



  .Txt {
    font-size: 0.8rem;

    @media (max-width: 1080px) {
      font-size: 0.6rem;
    }
  }
`