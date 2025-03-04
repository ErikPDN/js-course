import { createGlobalStyle, styled } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0,
      padding: 0,
      outline: none,
      box-sizing: border-box,
    }
  
  body {
    font-family: Arial, sans-serif;
    background: #cccccc;
  }
  
  html, body, #root { 
    height: 100%;
  }

  button {
    cursor: pointer;
  }
  
  a {
    text-decoration: none;  
  }
  
  ul {
    list-style: none;
  }
`

export const Container = styled.section`
  max-width: 360px;
  background: #ffffff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`
