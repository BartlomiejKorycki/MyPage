import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer-container">
                <artcile>
                    Jeżeli masz jakieś pytania to pisz :)
                </artcile>
                <button>
                    Contact
                </button>
                <a className="Linkedin" href="linkedin.com">
                    <i class="fab fa-linkedin"></i>
                </a>
                <a className="Github" href="github.com">
                    <i class="fab fa-github-square"></i>
                </a>
                <div className="footer-copyright text-center">
                    <container>
                    &copy; {new Date().getFullYear()} Bartlomiej Korycki
                    </container>
                </div>
            </div>
        );
    }
}

export default Footer;