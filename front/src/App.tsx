import * as React from 'react'

class App extends React.Component<MessageProps> {
  render() {
    return (
      <div>
        {`${this.props.hello} ${this.props.world}!`}
      </div>
    )
  }
}

interface MessageProps {
  hello: string
  world: string
}

export default App