import styled from 'styled-components';

import { primaryColor } from '../../config/color.js'

export const Nav = styled.nav` 
  background: ${primaryColor};
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  

  a {
    color: #ffffff;
    margin: 0 10px;
    font-weight: bold;
  }
`
