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
        color: #0077b5;
        &:hover {
        transform: translateY(-2px);
        }
    }

    #facebook {
        color: #1778F2;
        &:hover {
            transform: translateY(-2px);
        }
    }
`;