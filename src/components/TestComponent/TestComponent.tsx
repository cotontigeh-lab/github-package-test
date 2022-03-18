import React from 'react'

export type TestComponentProps = {
  children: React.ReactChild
  backgroundColor?: string
  color?: string
}

export default function TestComponent({ children, backgroundColor, color }: TestComponentProps) {
  const style = {
    backgroundColor: backgroundColor ? backgroundColor : 'transparent',
    padding: '5px',
    color: color ? color : 'black',
  }
  return <div style={style}>{children}</div>
}
