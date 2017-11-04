import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { test } from '../action/demo'
import './Button.css'

class Button extends React.Component {
 render() {
  const a = [1, 2, 3, ]
  if (a == null) return ''
  return (
   <div className="Button" onClick={() => this.props.test.action()}>
    {this.props.time.toString()}
   </div>
  )
 }
}

Button.propTypes = {
 text: PropTypes.string,
 test: PropTypes.object,
 time: PropTypes.object,
}
Button.defaultProps = {
 text: '123',
 time: new Date(),
}

export default connect(
 (state) => ({
  time: state.getIn(['demo', 'time']),
 }),
 (dispatch) => ({
  test: bindActionCreators(test, dispatch)
 })
)(Button)
