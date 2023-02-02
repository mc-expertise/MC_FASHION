import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div className="contact__page">
      <h1 className="title__pages">Contact</h1>
      <div className="contact__me">
        <div className="contact__mail">
          <p className="contact__text">{t('mail')}</p>
          <ul className="ul">
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__contact" />
              <a href="mailto:chouati.dev@gmail.com">Chouati.dev@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="contact__medias">
          <p className="contact__text">{t('Reseau')}</p>
          <ul className="ul contact__links">
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__contact" />
              <a
                href="https://www.instagram.com/mohamed.chouati_/"
                target="_blank">
                Instagram
              </a>
            </li>
            <br />
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__contact" />
              <a href="https://www.linkedin.com/in/mch05" target="_blank">
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
