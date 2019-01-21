import React from 'react'

import { fetchData } from './fetch'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modules: []
    }
  }

  async componentDidMount() {
    this.setState({
      modules: await fetchData()
    })
  }

  render() {
    console.log(this.state.modules)
    return (
      <div>
        { this.state.modules.map((module, index) => {
          const Component = require(`components/${module.component_name}/index`).default
          return (
           <Component key={index} data={module}/>
          )
        }) }
      </div>
    )
  }

  
}

export default Index