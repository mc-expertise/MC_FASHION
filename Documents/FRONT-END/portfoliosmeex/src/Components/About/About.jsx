import React from 'react';
import './About.css';
import me from '../../Asset/meblack.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="about__page">
      <div className="leftabout__side">
        <h1 className="title__pages">{t('apropostitle')}</h1>
        <p>{t('apropostext')}</p>
        <ul className="ul">
          <li>
            <FontAwesomeIcon icon={faArrowRight} className="arrow__about" />

            {i18n.language == 'en' && (
              <a
                href="https://drive.google.com/file/d/1mjXHSUdCmGq9gMjZK6Iu8j2P_jC7ml8n/view?usp=share_link"
                target="_blank">
                {t('cv')}
              </a>
            )}
            {i18n.language == 'fr' && (
              <a
                href="https://drive.google.com/file/d/1gtHolEqUYlfcovtky4z59hBC0o8jtmrN/view"
                target="_blank">
                {t('cv')}
              </a>
            )}
          </li>
        </ul>
      </div>
      <div className="rightabout__side">
        <div className="border__imgg">
          <img src={me} alt="" className="about__image" />
        </div>
      </div>
    </div>
  );
};

export default About;
