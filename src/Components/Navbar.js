import {Link} from "react-router-dom";
import styled from "styled-components";

const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;

function Navbar (){
    const menu = (

        <ul >
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Products'}>Products</Link></li>
        </ul>


    );
    return (




        <HeaderFrame>
            {menu}
        </HeaderFrame>


    );

}
export default Navbar;