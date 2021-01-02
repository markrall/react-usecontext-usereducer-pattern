import React from 'react'
import { Button } from 'react-bootstrap'

function ThemedButton(props) {
  return (
    <Button
      block
      className="my-4"
      variant="primary"
      onClick={props.onToggle}
      size="sm"
    >
      {props.children}
    </Button>
  )
}

export default ThemedButton
