import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a8a8b3;
    display:flex;
    font-size: 14px;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #707070;
    }

    .icon-rep {
      font-family: 'Nanum Gothic', sans-serif;
      font-size: 12px;
      margin-right: 5px;
    }
  }
`

export const RepositoryInfo = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 90px;
      height: 90px;
    }

    div {
      color: #3D3D4D;
      margin-left: 24px;

      p {
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 30px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3D3D4D;
        display: block;
        font-size: 24px;
      }
      span {
        color: #737380;
      }
    }
  }
`
