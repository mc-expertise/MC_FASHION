import React, { useEffect, useState } from 'react';
import './Styles.css';
import vdsbud from '../../Asset/PhotospROJECTS (2).mp4';

const ItBudnet = () => {
  const [clicked1, setClicked1] = useState(false);
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
    setHover(false);
    counterClick();
  };

  return (
    <div className="smeex__page">
      <div className="video__landing">
        <video
          src={vdsbud}
          loop
          autoPlay
          muted
          className={
            clicked1 ? 'smeexyt__video1 smeexyt__active' : 'smeexyt__video1'
          }
          onClick={handleclicked}></video>

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
        <h1 className="title__pages title__smeex">ItBudNet</h1>
        <div className="smeex__text">
          <p>
            Gagnez en contrôle sur votre argent grâce à <span>ItBudNet</span>,
            le site facile d'utilisation qui vous permet de suivre votre budget
            en temps réel.{' '}
            <a href="">Cliquez ici pour voir ou part votre argent</a>.
          </p>
          <h2>
            Découvrez où part votre argent et comment l'optimiser en quelques
            étapes simples :
          </h2>
        </div>
        <div className="contentsmeexyt">
          <div className="smeex__idee">
            <ul>
              <ol> - Entrez votre budget actuel</ol>
              <ol> - Remplissez le formulaire en suivant la vidéo</ol>
              <ol> - Mettre à jour vos dépenses au fur et à mesure</ol>
            </ul>
          </div>
          <div className="smeex__script">
            <ul>
              <ol>
                {' '}
                - Explorez les statistiques pour suivre vos dépenses mensuelles
              </ol>
              <ol>
                - Grâce à <span>ItBudNet</span> vous pouvez contrôler vos
                dépenses
              </ol>
              <ol>
                - Voilà ! Vous êtes prêt améliorez votre vie financière en toute
                simplicité !
              </ol>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItBudnet;
