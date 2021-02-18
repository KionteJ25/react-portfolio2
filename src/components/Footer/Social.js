import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';


tippy('.github', {
    content: 'Github',
});

tippy('.linkedin', {
    content: 'Linkedin',
});

const Social = () => {
        return(
    <>
        <a href="https://www.github.com/KionteJ25">
            <FaGithub className="github" size="30px" />
        </a>
 
        <a href="https://www.linkedin.com/in/kionte-jones-315ab61b3/">
            <FaLinkedin className="linkedin" size="30px" />
        </a>
    </>
    );
}

export default Social;