import React from 'react';
import { connect } from 'react-redux';

import classes from './MembersList.module.scss';

import Member from './Member/Member';
import Spinner from '../../../../UI/Spinner/Spinner';

const MembersList = ({ members }) => {
  let membersElements = <Spinner />;
  
  if(members && members.length > 0) {
    membersElements = members.map(member => (
      <Member key={member.id} urlProfile={member.photoURL} nameUser={member.nameProfile}  />
    ))
  }
  
  return (
    <div className={classes.MembersList}>
      {membersElements}
    </div>
  )
};

const mapStateToProps = state => ({
  members: state.channels.members
});

export default connect(mapStateToProps)(MembersList);