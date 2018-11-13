export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on its payload
  // If it does, then wait for it to resolve
  // If it doesn't then send the action on to the next middleware

  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // Wait for the promise to resolve, create a new action with that data
  // and dispatch it

  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });

};
