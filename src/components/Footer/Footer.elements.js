import styled from 'styled-components';

export const Foot = styled.footer`
    display: flex;
    padding: 25px 50px;
    background-color: #eee;
    justify-content: space-evenly;
    padding-top: 1.8vh;


    #github {
        color: black;
        &:hover {
        transform: translateY(-2px);
        }
    }

    #linkedin {
        color: blue;
        &:hover {
        transform: translateY(-2px);
        }
    }

    #facebook {
        color: blue;
        &:hover {
            transform: translateY(-2px);
        }
    }
`;