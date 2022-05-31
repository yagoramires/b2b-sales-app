import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  input {
    width:100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight:400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body)
    }

    & + input, & + p {
      margin-top: 1rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom:0.25rem;
    font-weight: 500;
  }

  select {
    width: 100%;
    height: 4rem;
    color: var(--text-body);
    font-size: 1.3rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--light-red);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1.5rem;
    margin-top: 1.5rem;
    font-weight:600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`