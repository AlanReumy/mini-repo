# redux

已实现的功能: 

- [x] createStore
- [x] dispatch
- [x] subscribe


## redux 源码分析

createStore:

```ts
function createStore() {
  // 初始化时调用的dispatch
  dispatch({ type: ActionTypes.INIT } as A)
  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable
  }
  return store
}
```

dispatch:

```ts
function dispatch(action) {
  isDispatching = true
  // currentReducer 返回初始化的reducer
  currentState = currentReducer(currentState, action)
  // subscribe
  const listeners = (currentListeners = nextListeners)
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i]
    listener()
  }

  return action
}
```

得到当前 state: 

```ts
function getState() {
  return currentState
}
```


