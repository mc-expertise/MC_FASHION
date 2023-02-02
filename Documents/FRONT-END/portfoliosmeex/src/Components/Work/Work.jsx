import React from 'react';
import './Work.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
const Work = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="work__pages">
      <div className="menu__items">
        <ul>
          <li>
            <Link to="/" className="work__links">
              {t('accueil')}
            </Link>
          </li>
          <li>
            <Link to="/project" className="work__links">
              {t('Projects')}
            </Link>
          </li>
          <li>
            <Link to="/about" className="work__links">
              {t('apropos')}
            </Link>
          </li>
          <li>
            <Link to="/contact" className="work__links">
              {t('contact')}
            </Link>
          </li>
        </ul>
        <div className="work__social">
          <ul className="ul">
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__work" />{' '}
              <a
                href="https://www.instagram.com/mohamed.chouati_/"
                target="_blank">
                instagram
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} className="arrow__work" />{' '}
              <a href="https://www.linkedin.com/in/mch05" target="_blank">
                linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
