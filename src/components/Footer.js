import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation();

    return(
        <div className="footer-container row">
            <artcile className="col-md-6 text-center contact-art"> 
                <p className="cont-ent">{t('Footer-content.1')}</p>
            </artcile>
            <div className="col-md-2  text-center contactb">
                <button className=" btn btn-default contact-btn" data-toggle="modal" data-target="#myModal">
                    {t('Contact.1')}
                </button>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h7 className="modal-title">{t('Contact-title.1')}</h7>
                                <button className="close" type="button" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body was-validated" action="/">
                                <div class="form-group">
                                    <label for="uname">{t('Mail-adress.1')}</label>
                                    <input type="text" class="form-control" placeholder="Enter @ // This option is off already." required/>
                                </div>
                                <div class="form-group">
                                    <label for="uname">{t('Mail-title.1')}</label>
                                    <input type="text" class="form-control" placeholder="Enter title // This option is off already." required/>
                                </div>
                                <div class="form-group">
                                    <label for="comment">{t('Mail-content.1')}</label>
                                    <textarea class="form-control" rows="5" placeholder="Write something...// This option is off already." required></textarea>
                                </div> 
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-success" type="button" data-dismiss="modal">{t('Modal-btn.1')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center social">
                <p className="social-info">{t('Links.1')}</p>
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


export default Footer;