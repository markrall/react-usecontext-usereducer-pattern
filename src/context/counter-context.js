import React from 'react'

const init = (initialCount = 0) => {
  return { count: initialCount }
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error(`Incorrect action type ${action.type}`)
  }
}

function useCounter(initialCount) {
  const [state, dispatch] = React.useReducer(reducer, initialCount, init)

  return { state, dispatch }
}

export { useCounter }
