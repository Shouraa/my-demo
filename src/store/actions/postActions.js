export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Async call
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .add({
        ...post,
        authorFirstName: "Asgahr",
        authorLastName: "Pofi",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch(error => {
        dispatch({ type: "CREATE_POST_ERROR", error });
      });
  };
};
