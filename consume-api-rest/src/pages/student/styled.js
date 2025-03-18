import { styled } from "styled-components";


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  
  input {
    height: 40px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 15px;
    font-size: 16px;
    
    &:focus {
      border: 2px solid #C91756;
      outline: none;
    }
  }

 input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  input[type="number"] {
    -moz-appearance: textfield;
  }
  
  input::placeholder {
    color: #999;
  }
  
  button {
    height: 40px;
    background: #C91756;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    
    &:hover {
      background: #a01346;
    }
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 30px;
  
  img {
    width: 132px;
    height: 132px;
    border-radius: 50%;
  }

   a { 
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: #C91756;
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`

export const Title = styled.h1`
  text-align: center;
`
