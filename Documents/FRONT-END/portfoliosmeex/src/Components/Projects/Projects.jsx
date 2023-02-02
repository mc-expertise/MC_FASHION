import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import smeex from '../../Asset/1.png';
import spotify from '../../Asset/2.png';
import netmovie from '../../Asset/3.png';
import bar from '../../Asset/4.png';
import fit from '../../Asset/5.png';
import prod from '../../Asset/6.png';
import bud from '../../Asset/7.png';
import ld from '../../Asset/8.png';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  return (
    <div className="overProjects">
      <div className="projects__page">
        <div className="leftProjects__side">
          <h1 className="title__pages">{t('projecttitle')}</h1>
          <div className="projects">
            <ul>
              <li
                onMouseEnter={() => setSelectedIndex(0)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/smeexyt"> Smééx YT</a>
                </div>
              </li>
              <li
                onMouseEnter={() => setSelectedIndex(7)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/landingpage"> Moha - Code</a>
                </div>
              </li>
              <li
                onMouseEnter={() => setSelectedIndex(6)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/itbudnet"> ItBudNey</a>
                </div>
              </li>
              <li
                onMouseEnter={() => setSelectedIndex(1)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/spotifyclone"> Clone Spotify</a>
                </div>
              </li>
              <li
                onMouseEnter={() => setSelectedIndex(2)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/netmovie"> Net Movie</a>
                </div>
              </li>
              <li
                onMouseEnter={() => setSelectedIndex(3)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/searchbar"> {t('barR')}</a>
                </div>
              </li>
              <li
                onMouseEnter={() => setSelectedIndex(4)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/fitclub"> The Fit Club</a>
                </div>
              </li>
              <li
                onMouseEnter={() => setSelectedIndex(5)}
                onMouseLeave={() => setSelectedIndex(null)}>
                <div className="mouveright">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="arrow__about"
                  />
                  <a href="/product"> {t('proec')}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="rightProjects__side">
          <div className="border__img">
            {selectedIndex === 0 && (
              <img src={smeex} alt="" className="fit__img" />
            )}

            {selectedIndex === 1 && (
              <img src={spotify} alt="" className="fit__img" />
            )}
            {selectedIndex === 2 && (
              <img src={netmovie} alt="" className="fit__img" />
            )}
            {selectedIndex === 3 && (
              <img src={bar} alt="" className="fit__img" />
            )}
            {selectedIndex === 4 && (
              <img src={fit} alt="" className="fit__img" />
            )}
            {selectedIndex === 5 && (
              <img src={prod} alt="" className="fit__img" />
            )}
            {selectedIndex === 6 && (
              <img src={bud} alt="" className="fit__img" />
            )}
            {selectedIndex === 7 && (
              <img src={ld} alt="" className="fit__img" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
