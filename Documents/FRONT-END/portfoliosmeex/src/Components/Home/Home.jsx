import React from 'react';
import './Home.css';
import Backgroundhome from '../Background/Backgroundhome';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="home__page global__container ">
      {/* <Backgroundhome /> */}
      {/* <Header /> */}
      <div className="intro__wrapper">
        <div className="home__intro">
          <h3>
            {t('titleone')} <span>Mohamed Chouati</span>{' '}
          </h3>
          <h3>
            {t('titletwo')} <span>Smééx</span>{' '}
          </h3>
          <p>{t('parahome')}</p>
          <div className="intro_links">
            <ul className="ul">
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="arrow__link" />

                <Link to="/project">{t('linkone')}</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} className="arrow__link" />

                <Link to="/about">{t('linktwo')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
