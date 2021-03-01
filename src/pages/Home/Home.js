import React from 'react';
import { HomeContainer, Image, Wrapper } from './Home.elements';

// import globalStyle from '../../components/globalStyles';

const Home = () => {
            return (
                    <Wrapper>  
                        <HomeContainer>
                        <div>
                            <h1>Hello, I'm Kionte Jones!</h1>
                            <h2>Welcome to my portfolio!</h2>
                        </div>
                        </HomeContainer>

                        <Image src= {process.env.PUBLIC_URL + "/assets/images/imageOfME.jpg"} alt='' />
                    </Wrapper>     
            )
    }
export default Home;