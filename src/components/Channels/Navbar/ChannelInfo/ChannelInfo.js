import React from 'react';
import { connect } from 'react-redux';

import classes from './ChannelInfo.module.scss';

import ChannelInfoHeader from './ChannelInfoHeader/ChannelInfoHeader';
import MembersList from './MembersList/MembersList';
import NavProfile from '../../../../containers/NavProfile/NavProfile';

const ChannelInfo = ({ status, desactivate, currentChahnel }) => {
  let channelStyles = {
    width: '0',
    opacity: '0',
    visibility: 'hidden'
  }
  
  if(status) {
    channelStyles = {
      width: '100%',
      opacity: '1',
      visibility: 'visible'
    }
  }
  
  return (
    <div className={classes.ChannelInfo} style={channelStyles}>
      <ChannelInfoHeader clicked={desactivate} />
      
      <div className={classes.ChannelName}>{currentChahnel && currentChahnel.nameChannel}</div>
      
      <div className={classes.ChannelDesc}>{currentChahnel && currentChahnel.descChannel}</div>
      
      <h3 className={classes.MembersTitle}>Members</h3>
      
      <MembersList />
      
      <NavProfile />
    </div>
  )
};

const mapStateToProps = state => ({
  currentChahnel: state.channels.currentChannel
});

export default connect(mapStateToProps)(ChannelInfo);