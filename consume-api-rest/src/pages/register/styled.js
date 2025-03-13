import { styled } from "styled-components";

import * as colors from '../../config/color.js';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 30px;
    font-size: 14px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    padding: 0 10px;
    margin-top: 5px;

    &:focus {
      border: 2px solid ${colors.primaryColor};
      outline: none;
    }
  }

  
  button {
    padding: 16px 0;
    width: 100%;
    align-self: center;
    font-size: 16px;
    border: none;
    outline: none;
  }
`;

