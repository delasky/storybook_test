import React from 'react'
import { storiesOf } from '@storybook/react'
//import { withInfo, } from '@storybook/addon-info'

import Demo from './index.js'

storiesOf('DemoComponent', module)
  .add('demo', () => {
    return (<Demo/>)
  })
