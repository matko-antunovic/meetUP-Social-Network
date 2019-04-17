import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux'
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';
import {withFirestore} from "react-redux-firebase";
import {objToArr} from "../../../app/common/util/helpers"
import { going,cancelgoing } from "../../user/userActions"
const mapState = (state) => {

  let event = {};

  if (state.firestore.ordered.events && state.firestore.ordered.events[0]) {
    event = state.firestore.ordered.events[0]
  }

  return {
    event,
    auth: state.firebase.auth
  }
}

const actions = {
  going,
  cancelgoing
}

class EventDetailedPage extends Component {

  async componentDidMount() {
    const {firestore,match}=this.props;
    await firestore.setListener(`events/${match.params.id}`);
    
  }

  async componentWillUnmount() {
    const {firestore,match}=this.props;
    await firestore.unsetListener(`events/${match.params.id}`);
  }

  render() {
    const {event, auth, going, cancelgoing}= this.props;
    const attendees= event && event.attendees && objToArr(event.attendees);
    const isHost= event.hostUid===auth.uid;
    const isGoing=attendees && attendees.some(a=> a.id === auth.uid);
    return (
      <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} isHost= {isHost} isGoing={isGoing} going={going} cancelgoing={cancelgoing} />
        <EventDetailedInfo event={event} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={attendees}/>
      </Grid.Column>
    </Grid>
    )
  }
}


export default withFirestore(connect(mapState,actions)(EventDetailedPage));
