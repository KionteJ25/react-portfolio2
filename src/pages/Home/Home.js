import React from 'react';
import Typewriter from 'typewriter-effect';
import { HomeTitle, HomeContainer } from './Home.elements';

// import globalStyle from '../../components/globalStyles';

const Home = () => {
            return (
                    <>
                        <HomeTitle>
                            <Typewriter className='typewriter'
                                options= {{
                                    strings: ['Hello, I am Kionte Jones'],
                                    autoStart: true,
                                    loop: true,
                                }}
                                />
                            
                            {/* <h1>Hello, I'm Kionte Jones!</h1>
                            <h2>Welcome to my portfolio!</h2> */}
                            
                        </HomeTitle>

                        <HomeContainer>
                           {/* <img src={process.env.PUBLIC_URL + "/assets/images/imageOfME.jpg"} alt='' /> */}
                        </HomeContainer>

                        
                    </>     
            )
    }
export default Home;