import React from 'react'
import TypographyComponent from './TypographyComponent'
import { ComponentMeta, ComponentStory, Story } from '@storybook/react'
import defaultTheme from '../../themes/default.theme'
import { ThemeProvider } from 'emotion-theming'

import '@fontsource/nunito-sans'

export default {
  title: 'Components/TypographyComponent',
  component: TypographyComponent,
} as ComponentMeta<typeof TypographyComponent>

// Template for multiple stories
const Template: Story<typeof TypographyComponent> = (props) => <TypographyComponent {...props} />

export const Headings: ComponentStory<typeof TypographyComponent> = () => (
  <ThemeProvider theme={defaultTheme}>
    <TypographyComponent variant="h1" gutterBottom>
      h1. Earth is the third planet from the Sun.
    </TypographyComponent>
    <TypographyComponent variant="h2" gutterBottom>
      h2. Earth is the third planet from the Sun.
    </TypographyComponent>
    <TypographyComponent variant="h3" gutterBottom>
      h3. Earth is the third planet from the Sun.
    </TypographyComponent>
    <TypographyComponent variant="h4" gutterBottom>
      h4. Earth is the third planet from the Sun.
    </TypographyComponent>
    <TypographyComponent variant="h5" gutterBottom>
      h5. Earth is the third planet from the Sun.
    </TypographyComponent>
  </ThemeProvider>
)

export const BodyFont: ComponentStory<typeof TypographyComponent> = () => (
  <ThemeProvider theme={defaultTheme}>
    <TypographyComponent variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
      body1. Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to
      radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. In sodales nibh at facilisis tempor. Phasellus quis mi sodales, tempus sem sed,
      maximus sem. Pellentesque viverra massa vel sollicitudin aliquam. Integer luctus sollicitudin magna eu
      pretium.Integer luctus sollicitudin magna eu pretium.
    </TypographyComponent>

    <TypographyComponent variant="body1" gutterBottom>
      body1 bold. Earth is the third planet from the Sun and the only astronomical object known to harbor life.
      According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. In sodales nibh at facilisis tempor. Phasellus quis mi sodales,
      tempus sem sed, maximus sem. Pellentesque viverra massa vel sollicitudin aliquam. Integer luctus sollicitudin
      magna eu pretium.Integer luctus sollicitudin magna eu pretium.
    </TypographyComponent>
    <TypographyComponent variant="body2" gutterBottom>
      body2. Earth is the third planet from the Sun and the only astronomical object known to harbor life. According to
      radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. In sodales nibh at facilisis tempor. Phasellus quis mi sodales, tempus sem sed,
      maximus sem. Pellentesque viverra massa vel sollicitudin aliquam. Integer luctus sollicitudin magna eu
      pretium.Integer luctus sollicitudin magna eu pretium.
    </TypographyComponent>
    <TypographyComponent variant="body2" sx={{ fontWeight: 'bold' }}>
      body2 bold. Earth is the third planet from the Sun and the only astronomical object known to harbor life.
      According to radiometric dating estimation and other evidence, Earth formed over 4.5 billion years ago. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. In sodales nibh at facilisis tempor. Phasellus quis mi sodales,
      tempus sem sed, maximus sem. Pellentesque viverra massa vel sollicitudin aliquam. Integer luctus sollicitudin
      magna eu pretium.Integer luctus sollicitudin magna eu pretium.
    </TypographyComponent>
    <TypographyComponent variant="caption" gutterBottom>
      caption. Earth is the third planet from the Sun and the only astronomical object known to harbor life. caption.
      Earth is the third planet from the Sun and the only astronomical object known to harbor life.
    </TypographyComponent>
  </ThemeProvider>
)
// export const WithoutBackground = Template.bind({})
// WithoutBackground.args = { children: 'Emprunte mon toutou' }
// WithoutBackground.storyName = 'H1'
