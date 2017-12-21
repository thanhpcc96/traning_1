import firebase from "../../firebase";

export const FETCH_FRIENDS = "FETCH_FRIENDS";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_ERROR = "FETCH_FRIENDS_ERROR";

export const fecthFriends = me => {
  return dispatch => {
    dispatch({
      type: FETCH_FRIENDS
    });
    firebase
      .database()
      .ref("users")
      .on(
        "value",
        snap => {
          const contacts = [];
          snap.forEach(contact => {
            const ct = contact.val();
            if (contact.key !== me) {
              contacts.push({
                uid: contact.key,
                email: ct.email,
                displayName: ct.displayName || "Vo danh",
                photoURL: ct.photoURL || "khong co"
              });
            }
          });
          dispatch({
            type: FETCH_FRIENDS_SUCCESS,
            contacts
          });
        },
        error => {
          console.log("================ fetch error====================");
          console.log(error);
          console.log("====================================");
          dispatch({
            type: FETCH_FRIENDS_ERROR,
            error
          });
        }
      );
  };
};
