import React from 'react'

import ReactDom from 'react-dom'

import PropTypes from 'prop-types'

const DemoComponent = () => (<div>hello world</div>)
console.log(DemoComponent)

export default DemoComponent

const domContainer = document.getElementById('react');
console.log(domContainer)

ReactDom.render(DemoComponent, domContainer)
