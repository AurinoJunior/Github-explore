import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 440px;
  margin-top: 80px;
`

export const Form = styled.form`
  display: flex;
  margin-top: 40px;

  input {
    flex: 1;
    height: 70px;
    border: 1px solid #a3a3a3;
    border-radius: 5px 0 0 5px;
    padding: 0 24px;
  }

  button {
    background: #04D361;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    height: 70px;
    width: 210px;
  }
`
