import React from 'react';
import { HomeContainer } from './Home.elements';
// import globalStyle from '../../components/globalStyles';

const Home = () => {
            return (
                    <>
                        <HomeContainer>
                            <h1>I'm Kionte Jones</h1>
                            <p>Welcome to my portfolio</p>
                            <img src={process.env.PUBLIC_URL + "/assets/images/imageOfME.jpg"} />
                        </HomeContainer>
                    </>     
            )
    }
export default Home;