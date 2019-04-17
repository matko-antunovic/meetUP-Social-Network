import moment from 'moment';
import { toastr } from 'react-redux-toastr'

export const updateProfile = (user) =>
  async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const { isLoaded, isEmpty, ...updatedUser } = user;
    if (updatedUser.dateOfBirth !== getState().firebase.profile.dateOfBirth) {
      updatedUser.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
    }

    try {
      await firebase.updateProfile(updatedUser);
      toastr.success('Success', 'Profile updated')
    } catch (error) {
      console.log(error)
    }
  }

  export const going=(event)=> 
  async(dispatch , getState, {getFirebase, getFirestore})=> {
    const firestore= getFirestore();
    const user= firestore.auth().currentUser;
    const photoURL= getState().firebase.profile.photoURL;
    const attendee= {
      going:true,
      joinDate:Date.now(),
      photoURL: photoURL || '/assets/user.png',
      displayName: user.displayName,
      host:false
    }
    try {
      await firestore.update(`events/${event.id}`, {
        [`attendees.${user.uid}`] :attendee
      })
      await firestore.set(`event_attendee/${event.id}_${user.uid}`, {
        eventId:event.id,
        userUid:user.uid,
        eventDate:event.date,
        host:false
      })
      toastr.success("Success", "You've signed up for the event!")
    } catch(error){
      console.log(error);
      toastr.error("Something went wrong", "Problem signing up to event")
    }
  }

  export const cancelgoing=(event)=> 
  async(dispatch,getState, {getFirestore}) => {
    const firestore=getFirestore();
    const user=firestore.auth().currentUser;
    try {
      await firestore.update(`events/${event.id}`, {
        [`attendees.${user.uid}`] : firestore.FieldValue.delete()
      })
      await firestore.delete(`event_attendee/${event.id}_${user.uid}`);
      toastr.success("Success", "You've removed yourself from the event!")
    }catch (error) {
      console.log(error);
      toastr.error("Something went wrong")
    }
  }