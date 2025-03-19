import { styled } from "styled-components";

export const Title = styled.h1`
  text-align: center;
  
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    background: #ddd;
    border: 5px dashed;
    margin: 30px auto;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
  }

  input {
    display: none;
  }

  img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
  }
  
`


