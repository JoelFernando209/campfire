import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ChannelItem from './ChannelItem/ChannelItem';
import Spinner from '../../../UI/Spinner/Spinner';

import classes from './ChannelsList.module.scss';

import * as actions from '../../../../store/actions/index';

import { filterChannelsBasedOnCategories } from '../../../../utils/immutable.utils'

const ChannelsList = ({ channelList, onGetChannels, filteredChannels, isSearchFocus, onSetCurrentChannel, categories, activateChannelInfo }) => {
  useEffect(() => {
    onGetChannels();
  }, []);
  
  let channelsItems = <Spinner />;
  let adviceChannels = '';
  
  const onClickChannelItem = channel => {
    onSetCurrentChannel(channel);
    
    activateChannelInfo();
  };
  
  if(isSearchFocus && filteredChannels.length > 0) {
    channelsItems = filteredChannels.map(channel => (
      <ChannelItem
        key={channel.id}
        channelId={channel.id}
        nameChannel={channel.nameChannel}
        clicked={onClickChannelItem.bind(null, channel)}
      />
    ))
  } else if(channelList.length > 0) {
    let channelsFilterCategories = channelList.slice(0, 7);
    
    if(categories.length > 0) {
      channelsFilterCategories = filterChannelsBasedOnCategories(categories, channelList);
      
      if(channelsFilterCategories.length <= 3) {
        adviceChannels = 'No much channels over here. Try to search some ones!'
      }
      
      if(channelsFilterCategories.length === 0) {
        channelsFilterCategories = channelList.slice(0, 7);
      }
    }
    
    channelsItems = channelsFilterCategories.map(channel => (
      <ChannelItem
        key={channel.id}
        channelId={channel.id}
        nameChannel={channel.nameChannel}
        clicked={onClickChannelItem.bind(null, channel)}
      />
    ))
  }
  
  return (
    <div className={classes.ChannelsList}>
      {channelsItems}
      
      { adviceChannels && <div className={classes.AdviceChannels}>{adviceChannels}</div>}
    </div>
  )
};

const mapStateToProps = state => ({
  channelList: state.channels.channels,
  categories: state.user.categories
})

const mapDispatchToProps = dispatch => ({
  onGetChannels: () => dispatch(actions.getChannelsDB()),
  onSetCurrentChannel: channel => dispatch(actions.setCurrentChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelsList);