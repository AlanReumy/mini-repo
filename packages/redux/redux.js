export function createStore(reducer, preloadState) {
  let currentReducer = reducer;
  let currentState = preloadState;
  let currentListeners = []
  let nextListeners = currentListeners

  function dispatch(action) {
    currentState = currentReducer(currentState, action);
    currentListeners.forEach(listen => {
      listen()
    })
  }
  function subscribe(listener)  {
    nextListeners.push(listener)
    return function unSubscribe() {
      currentListeners = []
    }
  }
  function getState() {
    return currentState;
  }

  const store = {
    dispatch,
    getState,
    subscribe,
  };

  return store;
}
