import styled from 'styled-components';

export const Foot = styled.footer`
    display: flex;
    padding: 25px 50px;
    background-color: #eee;
    justify-content: space-evenly;
    margin-top: 100vh;   

    .github {
        color: black;
        &:hover {
        transform: translateY(-2px);
        }
    }

    .linkedin {
        color: blue;
        &:hover {
        transform: translateY(-2px);
        }
    }
`;