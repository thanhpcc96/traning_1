import React from "react";
import { NativeEventEmitter, Platform } from "react-native";
import RNQuickblox from "react-native-video-quickblox";

export const DID_RECEIVE_CALL_SESSION = "DID_RECEIVE_CALL_SESSION";
export const USER_ACCEPT_CALL = "USER_ACCEPT_CALL";
export const USER_REJECT_CALL = "USER_REJECT_CALL";
export const USER_HUNG_UP = "USER_HUNG_UP";
export const SESSION_DID_CLOSE = "SESSION_DID_CLOSE";
export const RECEIVE_IMCOMING_MESSAGE = "RECEIVE_IMCOMING_MESSAGE";

const APP_ID = "66495";
const AUTH_KEY = "AdO8FBmSRgs3gzP";
const AUTH_SECRET = "XY3FtrNM9Xn9S6Z";
const ACCOUNT_KEY = "t8uFXHsqx9P_YS74SmrW";



let instance = null;

export default class {
  constructor(store) {
    console.log("=================constructor(store)===================");
    console.log(store);
    console.log("====================================");
    if (store || !instance) {
      console.log("=================constructor(store) trong if===================");
      console.log(store);
      console.log("====================================");
      instance = this;
      this.subscriber = [];
      this.userActionSubcriber = [];
      this.store = store;
      //this.registerEvents();
    }
    return instance;
  }

  init() {
    // RNQuickblox.setupQuickblox(APP_ID, AUTH_KEY, AUTH_SECRET, ACCOUNT_KEY);
    RNQuickblox.setupQuickblox(APP_ID, AUTH_KEY, AUTH_SECRET, ACCOUNT_KEY);
    // RNQuickblox.setupQuickblox("65913", "S7wGTmdLV4Np8cs", "GFMUzTPryFggTGR", "qAz3cN5pzqMhEY7oMks-");
  }

  addSubscriber(subscriber) {
    this.subscriber.push(subscriber);
  }

  addUserActionSubcriber(subscriber) {
    this.userActionSubcriber = subscriber;
  }

  

  getUsers(callback) {
    // if (Platform.OS === "android") RNQuickblox.getUsers(page, limit, users);
    // else RNQuickblox.getUsers(users);
    RNQuickblox.getUsers(data => {
      console.log("data", typeof data);
      const obj = JSON.parse(data);
      if (callback) callback(obj);
    });
  }

  login(userName, password, cb) {
    RNQuickblox.connectUser(userName, password, data => {
      console.log("typeof data login ", typeof data);
      console.log(data);
      let obj;
      typeof data === "number" ? (obj = data) : (obj = JSON.parse(data));
      if (cb) cb(obj);
    });
  }

  signUp(userName, password, realName, email, complete) {
    RNQuickblox.signUp(userName, password, realName, email, data => {
      let obj;
      typeof data === "number" ? (obj = data) : (obj = JSON.parse(data));
      if (complete) complete(obj);
    });
  }

  switchCamera() {
    RNQuickblox.switchCamera((err, data) => {
      if (err) {
        alert("Error");
      } else {
        console.log(data);
      }
    });
  }

  setAudioEnabled(isEnabled) {
    RNQuickblox.setAudioEnabled(isEnabled);
  }

  toggleAudio() {
    RNQuickblox.toggleAudio();
  }

  setVideoEnabled(isEnabled) {
    console.log(isEnabled);
    RNQuickblox.setVideoEnabled(isEnabled);
  }

  toggleVideo() {
    RNQuickblox.toggleVideo();
  }

  hangUp() {
    RNQuickblox.hangUp();
  }

  callUsers(userIds, callId, avatar) {
    RNQuickblox.callToUsers(userIds, callId, avatar);
  }

  acceptCall() {
    RNQuickblox.acceptCall();
  }

  receiveCall(userId, userInfor) {
    console.log(userInfor);
    this.subscriber.forEach(sub => sub.receiveCall(userId, userInfor));

    this.store.dispatch({ type: SET_IN_COMING_CALL_MODAL });
  }

  userAcceptCall(data) {
    console.log("userAcceptCall", data);
    console.log(this);
    // this.userActionSubcriber.forEach(sub => sub.userAcceptCall()); // --> Error userAcceptCall is not a function.
    this.userActionSubcriber.userAcceptCall();
    // this.subscriber.forEach(sub => sub.userAcceptCall());
    // this.store.dispatch({type: USER_ACCEPT_CALL})
  }

  userRejectCall() {
    RNQuickblox.rejectCall();
    this.userActionSubcriber.userRejectCall();
    console.log("userRejectCall");
    // this.store.dispatch({type: USER_REJECT_CALL})
  }

  sessionDidClose() {
    console.log("sessionDidClose", RNQuickblox);
    // RNQuickblox.onSessionClosed();
    // this.store.dispatch({type: SESSION_DID_CLOSE})
  }

  userHungUp() {
    console.log("hangup");
    this.userActionSubcriber.userHangup();
    // this.store.dispatch({type: USER_HUNG_UP})
  }
  receiveMessage(data) {
    console.log("====================================");
    console.log("receiveMessage tu trong android ra ne");
    console.log(data);
    console.log("====================================");
    console.log(this.store)
    console.log("====================================");
    this.store.dispatch({ type: RECEIVE_IMCOMING_MESSAGE, payload: data});
  }

  /**
   * Chat
   */
  getListDialogs(cb) {
    RNQuickblox.getListDialogsOfCurrentUser(data => {
      const obj= JSON.parse(data)
      if (cb) cb(obj);
    });
  }

  // public void createPrivateDialog(final int friendID, final Callback callback)
  createPrivateDialog(friendID, cb) {
    RNQuickblox.createPrivateDialog(friendID, data => {
      console.log("====================================");
      console.log("createPrivateDialog");
      console.log(data);
      console.log("====================================");
      const obj = JSON.parse(data);
      if (cb) cb(obj);
    });
  }

  //  public void initDialogForChat(final String idChatDialog, Callback callback)
  initDialogForChat(idDialog, callback) {
    RNQuickblox.initDialogForChat(idDialog, callback);
  }

  // public void retrieveMessagesOfChatDialog(String idChatDialog, final Callback callback)
  retrieveMessagesOfChatDialog(idChatDialog, callback) {
    RNQuickblox.retrieveMessagesOfChatDialog(idChatDialog, data => {
      const obj = JSON.parse(data);
      if (callback) callback(obj);
    });
  }
  // public void sendMessage(String dialogID, int friendId, String text, final Callback callback)
  sendMessage(dialogID, text, callback) {
    RNQuickblox.sendMessage(dialogID, text, data => {
      console.log("================sendMessage====================");
      console.log(data);
      console.log("===============sendMessage=====================");
    });
  }
}
