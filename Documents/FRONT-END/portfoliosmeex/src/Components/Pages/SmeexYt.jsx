import React, { useEffect, useState } from 'react';
import './Styles.css';
import vdsmeex from '../../Asset/prasmeexyt.mp4';
import vdpre from '../../Asset/PhotospROJECTS (1).mp4';

const SmeexYt = () => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [hover, setHover] = useState(true);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth <= 1180) {
        setCounter(2);
      }
    };

    window.addEventListener('click', handleWindowResize);

    return () => {
      window.removeEventListener('click', handleWindowResize);
    };
  }, [counter]);

  const close = () => {
    setClicked1(false);
    setClicked2(false);
    setHover(true);
  };
  const counterClick = () => {
    setCounter(counter + 1);
    if (counter === 2) {
      close();
      setCounter(counter - 1);
    }
    console.log(counter);
  };
  const handleclicked = () => {
    setClicked1(true);
    setHover(false);
    counterClick();
  };
  const handleclickedd = () => {
    setClicked2(true);
    setHover(false);
    counterClick();
  };

  return (
    <div className="smeex__page">
      <div className="video__landing">
        <video
          src={vdsmeex}
          loop
          autoPlay
          muted
          className={
            clicked1 ? 'smeexyt__video1 smeexyt__active' : 'smeexyt__video1'
          }
          onClick={handleclicked}></video>
        <video
          src={vdpre}
          loop
          autoPlay
          muted
          className={
            clicked2 ? 'smeexyt__video2 smeexyt__active' : 'smeexyt__video2'
          }
          onClick={handleclickedd}></video>

        <style>
          {`.smeexyt__video1:hover {
          transform: ${hover ? 'scale(1.02)' : ''};
        }`}
        </style>
        <style>
          {`.smeexyt__video2:hover {
          transform: ${hover ? 'scale(1.02)' : ''};
        }`}
        </style>
      </div>

      <div className="content__smeex">
        <h1 className="title__pages title__smeex">Smééx Yt</h1>
        <div className="smeex__text">
          <p>
            Découvrez <span>Smeex-Yt</span>, le site qui vous permet de générer
            facilement des idées et du contenu pour{' '}
            <span>vos vidéos YouTube en seulement 3 clics.</span>{' '}
            <a href="">Cliquez ici pour commencer votre création</a>.
          </p>
          <h2>Comment sa marche :</h2>
        </div>
        <div className="contentsmeexyt">
          <div className="smeex__idee">
            <ul>
              <ol> - Définissez votre niche en toute simplicité</ol>
              <ol>
                {' '}
                - Segmentez votre niche pour obtenir les sujets les plus
                pertinents
              </ol>
              <ol>
                {' '}
                - Cliquer sur{' '}
                <span>" Lancez-vous dans votre prochaine vidéo "</span> pour
                démarrer
              </ol>
              <ol> - Sélectionnez le sujet qui vous passionne le plus</ol>
            </ul>
          </div>
          <div className="smeex__script">
            <ul>
              <ol>
                {' '}
                - Choisissez le format de vidéo (court ou long) en fonction de
                vos préférences
              </ol>
              <ol>
                - Déterminer la durée idéale de votre vidéo (entre 5 minutes et
                1 heure)
              </ol>
              <ol>
                {' '}
                - Cliquer sur <span>" Creer votre prochaine video "</span> pour
                démarrer la production
              </ol>
              <ol>
                - Voilà ! Vous êtes prêt à filmer votre vidéo{' '}
                <span>en seulement 3 clics !</span>
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmeexYt;
