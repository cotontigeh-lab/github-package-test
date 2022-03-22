import React from 'react'
import TestComponent, { TestComponentProps } from './TestComponent'
import { ComponentMeta, Story } from '@storybook/react'

export default {
  title: 'Components/TestComponent',
  component: TestComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TestComponent>

// Template for multiple stories
const Template: Story<TestComponentProps> = (props) => <TestComponent {...props} />

export const WithoutBackground = Template.bind({})
WithoutBackground.args = { children: <div>Without background</div> }
WithoutBackground.storyName = 'Without Background'

export const WithBackground = Template.bind({})
WithBackground.args = { children: <div>With background</div>, backgroundColor: 'grey' }
WithBackground.storyName = 'With Background'
