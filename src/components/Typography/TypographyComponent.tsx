import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

export type TypographyComponentProps = TypographyProps

export default function TypographyComponent(props: TypographyComponentProps) {
  return <Typography {...props} />
}
