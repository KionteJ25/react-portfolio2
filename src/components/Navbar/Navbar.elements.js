import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../globalStyles';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: red;
    color: white;
    height: 80px;
    position: sticky;
    top: 0;
    font-size: 1.3rem;
 `;

export const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    &:hover {
        color: blue;
    }
 `;

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;

${Container}
`;