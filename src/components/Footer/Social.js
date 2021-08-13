import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Social = () => {
        return(
    <>
        <a href="https://www.github.com/KionteJ25" target="_blank"
                 rel="noopener noreferrer">
            <FaGithub id="github" size="30px" />
        </a>
 
        <a href="https://www.linkedin.com/in/kionte-jones-315ab61b3/"
                 target="_blank" rel="noopener noreferrer">
            <FaLinkedin id="linkedin" size="30px" />
        </a>

        <a href="https://www.facebook.com/kionte.jones" 
                 target="_blank" rel="noopener noreferrer">
            <FaFacebook id='facebook' size='30px' />

        </a>
    </>
    ); 
}

export default Social;