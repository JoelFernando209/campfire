import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ChannelItem from './ChannelItem/ChannelItem';

import classes from './ChannelsList.module.scss';

import * as actions from '../../../../store/actions/index';

const ChannelsList = ({ channelList, onGetChannels }) => {
  
  useEffect(() => {
    onGetChannels();
  }, [])
  
  const channelsItems = channelList.map(channel => (
    <ChannelItem key={channel.id} nameChannel={channel.nameChannel} />
  ))
  
  return (
    <div className={classes.ChannelsList}>
      {channelsItems}
    </div>
  )
};

const mapStateToProps = state => ({
  channelList: state.channels.channels
})

const mapDispatchToProps = dispatch => ({
  onGetChannels: () => dispatch(actions.getChannelsDB())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);