import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import { useCounter } from '../context/counter-context'

const buttons = [
  {
    action: 'decrement',
    variant: 'danger',
    value: '-',
  },
  {
    action: 'reset',
    variant: 'warning',
    value: 'Reset',
  },
  {
    action: 'increment',
    variant: 'success',
    value: '+',
  },
]

function Counter({ initialCount }) {
  const { state, dispatch } = useCounter(initialCount)

  return (
    <>
      <p className="h1 display-1">Count: {state.count}</p>
      <ButtonGroup>
        {buttons.map((button) => {
          const dispatchData = {
            type: button.action,
            payload: button.action === 'reset' ? initialCount : 0,
          }
          return (
            <Button
              key={button.value}
              variant={button.variant}
              onClick={() => dispatch(dispatchData)}
            >
              {button.value}
            </Button>
          )
        })}
      </ButtonGroup>
    </>
  )
}

export default Counter
