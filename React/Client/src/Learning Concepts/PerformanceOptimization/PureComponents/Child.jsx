import React from 'react'

export default class Child extends React.PureComponent {
  render() {
    console.log("Child Rendered")
    return (
      <div>
        <h2>Child Component</h2>
      </div>
    )
  }
}
