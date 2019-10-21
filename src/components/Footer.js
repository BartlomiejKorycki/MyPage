import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer-container row">
                <artcile className="col-md-6 text-center contact-art"> 
                    <p className="cont-ent">If you need more informations or have any questions, contact me please.</p>
                </artcile>
                <div className="col-md-2  text-center contactb">
                    <button className=" btn btn-default contact-btn" data-toggle="modal" data-target="#myModal">
                        Contact
                    </button>
                    <div className="modal fade" id="myModal">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h7 className="modal-title">Send me message</h7>
                                    <button className="close" type="button" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    write here...
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-success" type="button" data-dismiss="modal">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center social">
                    <p className="social-info">Links</p>
                    <a className="Linkedin" href="https://www.linkedin.com/in/bart%C5%82omiej-korycki-961019121/" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a className="Github" href="https://github.com/BartlomiejKorycki" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github-square"></i>
                    </a>
                </div>
                <div className="footer-copyright text-center container-fluid">
                    <container>
                        &copy; {new Date().getFullYear()} Bartłomiej Korycki
                    </container>
                </div>
            </div>
        );
    }
}

export default Footer;