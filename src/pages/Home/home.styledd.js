import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const LinkHome = styled(NavLink)`
font-size: 25px;
text-decoration: none;
color: black;
/* padding: 50px 90px; */
&:hover {
  color: #293f58;
text-shadow: 1px 1px 2px grey;
}
`;
export const Con = styled.div`
display: flex;
flex-direction:  column;
align-items: center;
justify-content: center;
`;
export const Text = styled.p`
font-size: 60px;
`;