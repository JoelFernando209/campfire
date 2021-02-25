import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ChannelItem from './ChannelItem/ChannelItem';
import Spinner from '../../../UI/Spinner/Spinner';

import classes from './ChannelsList.module.scss';

import * as actions from '../../../../store/actions/index';

const ChannelsList = ({ channelList, onGetChannels, filteredChannels, isSearchFocus, onSetCurrentChannel }) => {
  useEffect(() => {
    onGetChannels();
  }, []);
  
  let channelsItems = <Spinner />;
  
  if(isSearchFocus && filteredChannels.length) {
    channelsItems = filteredChannels.map(channel => (
      <ChannelItem
        key={channel.id}
        channelId={channel.id}
        nameChannel={channel.nameChannel}
        clicked={onSetCurrentChannel.bind(null, channel)}
      />
    ))
  } else if(channelList.length > 0) {
    channelsItems = channelList.map(channel => (
      <ChannelItem
        key={channel.id}
        channelId={channel.id}
        nameChannel={channel.nameChannel}
        clicked={onSetCurrentChannel.bind(null, channel)}
      />
    ))
  }
  
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
  onGetChannels: () => dispatch(actions.getChannelsDB()),
  onSetCurrentChannel: channel => dispatch(actions.setCurrentChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);