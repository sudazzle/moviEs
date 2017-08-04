import React from 'react'
import App from '../components/App.js'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'

// Shallow rendering is useful to constrain yourself to testing a component as a unit, 
// and to ensure that your tests aren't indirectly asserting on behavior of child components.

//Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs, 
//or may require the full lifecycle in order to fully test the component (i.e., componentDidMount etc.)

//Enzyme's render function is used to render react components to static HTML and analyze the resulting HTML structure.

import {mount, render, shallow} from 'enzyme'
var expect = chai.expect
chai.use(chaiEnzyme())

describe('<App />', () => {
  it('App is render Hello Sudaman only', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h2')).to.have.html('<h2>Hello Sudaman</h2>')
    expect(wrapper.find('h2')).to.not.have.html('<span id="child">Test</span>')
    expect(wrapper.find('h2')).to.be.have.html().match(/Hello Sudaman/)
  })
})