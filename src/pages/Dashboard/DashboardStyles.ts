import styled from 'styled-components'

export const Title = styled.h1`
  color: #3A3A3A;
  font-size: 48px;
  line-height: 56px;
  max-width: 450px;
  margin-top: 102px;
`

export const Form = styled.form`
  display: flex;
  margin-top: 40px;

  input {
    border: none;
    border-radius: 5px 0 0 5px;
    flex: 1;
    height: 60px;
    padding: 25px;
  }

  button {
    background: #00bd54;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-weight: bold;
    height: 60px;
    transition: 0.2s;
    width: 210px;

    &:hover{
      background: #04D361;
    }
  }
`
