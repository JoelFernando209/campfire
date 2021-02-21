import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import BluePerson from '../../../assets/persons/blue-person.gif';
import BrownPerson from '../../../assets/persons/brown-person.gif';
import EmoPerson from '../../../assets/persons/emo-person.gif';
import PinkPerson from '../../../assets/persons/pink-person.gif';
import RedPerson from '../../../assets/persons/red-person.gif';

import classes from './SignPeople.module.scss';

const peoplePortrait = [
  {
    colorBack: '#0d92d1',
    personImg: BluePerson
  },
  {
    colorBack: '#8455d4',
    personImg: EmoPerson
  },
  {
    colorBack: '#e398c6',
    personImg: PinkPerson
  },
  {
    colorBack: '#e62929',
    personImg: RedPerson
  },
  {
    colorBack: '#b05d04',
    personImg: BrownPerson
  }
];

const SignPeople = () => {
  
  const carouselElements = peoplePortrait.map(person => {
    return (
      <div style={{ backgroundColor: person.colorBack }} className={classes.CarouselElement}>
        <img src={person.personImg} alt='' className={classes.PersonImg} />
      </div>
    )
  })
  
  return (
    <AliceCarousel
      items={carouselElements}
      infinite
      autoPlay
      autoPlayStrategy='none'
      touchTracking={false}
      animationDuration={2000}
      autoPlayInterval={3000}
      disableButtonsControls
      disableDotsControls
    />
  )
};

export default SignPeople