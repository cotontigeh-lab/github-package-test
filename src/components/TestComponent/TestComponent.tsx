import React from 'react'

export type TestComponentProps = {
  children: React.ReactChild
  backgroundColor?: string
}

export default function TestComponent({ children, backgroundColor }: TestComponentProps) {
  const style = {
    backgroundColor: backgroundColor ? backgroundColor : 'transparent',
    padding: '5px',
  }
  return <div style={style}>{children}</div>
}
