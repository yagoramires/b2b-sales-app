import styled from 'styled-components'

export const Container = styled.div`

table {
  width: 100%;
  border-spacing: 0 0.5rem;
  table-layout: auto;
  
  @media (max-width: 1080px) {
    table-layout: fixed;
    border-spacing: 0 0.25rem;
    /* font-size: 0.7rem; */
  }
  
  @media (max-width: 720px) {
    table-layout: fixed;
    border-spacing: 0 0.25rem;
    font-size: 0.8rem;
  }

  @media print {
    width: 100%;
    border-spacing: 0 0.5rem;
    table-layout: auto;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }
  
  td {
    padding: 1rem 2rem;
    background: #fff;
    border: 0;
    
    &:nth-child(5) {
      font-weight: 600;
      border-radius: 0 0.25rem 0.25rem 0;
    }
    
    &:nth-child(1) {
      border-radius: 0.25rem 0 0 0.25rem;
    }

    &:nth-child(3) {
      text-align: center;
    }
/* 
    input {
      width: 6rem;
      height: 4rem;
      padding: 1.5rem 1rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      background: #fff;
      text-align: center;
      font-weight:400;
      font-size: 0.9rem;
  
      &::placeholder {
        color: var(--text-body)
      } */

      @media (max-width: 1080px) {
        width: 4rem;
        height: 2rem;
        font-size: 0.8rem;
      }

      @media print {
        padding: 0.5rem 1rem;
      }
    }

  }
}

`