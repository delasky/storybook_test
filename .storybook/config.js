import { configure } from '@storybook/react'

//const req = require.context('../src', true, /\.stories\.js$/)

const loadStories = () => {
  // req.keys().forEach((filename) => req(filename))
  require('../index.stories.js')
}

configure(loadStories, module)
