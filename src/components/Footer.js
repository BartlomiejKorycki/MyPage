import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer-container row">
                <artcile className="col-md-6 text-center contact-art"> 
                    <p className="cont-ent">If you need more informations or have any questions, contact me please.</p>
                </artcile>
                <div className="col-md-2  text-center contactb">
                    <a className=" btn btn-default contact-btn" href="/">
                        Contact
                    </a>
                </div>
                <div className="col-md-4 text-center social">
                    <p className="social-info">Links</p>
                    <a className="Linkedin" href="linkedin.com">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a className="Github" href="github.com">
                        <i class="fab fa-github-square"></i>
                    </a>
                </div>
                <div className="footer-copyright text-center container-fluid">
                    <container>
                        &copy; {new Date().getFullYear()} Bartlomiej Korycki
                    </container>
                </div>
            </div>
        );
    }
}

export default Footer;