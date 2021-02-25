import React from 'react';
import { connect } from 'react-redux';

import classes from './SignPopup.module.scss';

import Backdrop from '../UI/Backdrop/Backdrop';
import SignButtons from './SignButtons/SignButtons';
import SignPeople from './SignPeople/SignPeople';

import { signWithProvider } from '../../firebase/firebaseUtils/firebase.auth';

import * as actions from '../../store/actions/index';

const onGoogleAuth = signWithProvider.bind(null, 'Google');
const onGithubAuth = signWithProvider.bind(null, 'Github');

const SignPopup = ({ state, onDesactivate, errorSign, setErrorSign, onSetUser }) => {
  const afterAuth = ({ user }) => {
    onDesactivate();
    setErrorSign('');
    
    const userInfo = {
      name: user.displayName,
      uid: user.uid,
      urlProfile: user.photoURL
    };
    
    onSetUser(userInfo);
  };
  
  const authHandler = method => {
    method()
      .then(afterAuth)
      .catch(err => {
        setErrorSign(err.message);
      })
  }
  
  let errorPopup = null;
  
  if(errorSign) {
    errorPopup = errorSign;
  }
  
  return (
    <Backdrop show={state} desactivate={onDesactivate}>
      <div className={classes.SignPopup}>
        <div className={classes.Buttons}>
          <h3 style={{ color: 'white', textAlign: 'center' }}>Connect with Tech Friends & Companies</h3>
        
          <SignButtons
            clickedGoogle={authHandler.bind(null, onGoogleAuth)}
            clickedGithub={authHandler.bind(null, onGithubAuth)}
          />
          
          <p style={{ color: 'red', textAlign: 'center', fontSize: '1rem' }}>{errorSign}</p>
        </div>
        
        <div className={classes.ImageContainer}>
          <SignPeople />
        </div>
      </div>
    </Backdrop>
  );
}

const mapStateToProps = state => ({
  state: state.user.signState
});

const mapDispatchToProps = dispatch => ({
  onDesactivate: () => dispatch(actions.setSignState(false)),
  onSetUser: user => dispatch(actions.setUserInfo(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(SignPopup));