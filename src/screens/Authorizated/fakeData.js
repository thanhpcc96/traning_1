export const data = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Yes, and I use Gifted Chat!",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 1,
      name: "Developer"
    }
    //sent: true,
    //   received: true,
    // location: {
    //   latitude: 48.864601,
    //   longitude: 2.398704
    // },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Are you building a chat app?",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    user: {
      _id: 2,
      name: "React Native"
    }
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "You are officially rocking GiftedChat.",
    createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    system: true
  },
  {
    _id: "5a4a4c5a6347833e13aec320",
    senderId: 39923345,
    recipientId: 39841524,
    saveToHistory: false,
    dateSent: 1514818650,
    body: "null",
    dialogId: "5a4a4c4ea0eb477c6a2eda8a"
  }
];
