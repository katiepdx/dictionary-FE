import React, { Component } from 'react'
import { deleteWordById } from '../service/api-fetch'

export default class WordDeleteContainer extends Component {
  state = {
    delete: false
  }
  async componentDidMount() {
    const id = this.props.match.params.id

    await deleteWordById(id);

    await this.setState({ delete: true })
  }
  render() {
    return (
      <div>
        {this.state.delete ? <h1>Delete complete!</h1> : <h1>Failed to delete...</h1>}
      </div>
    )
  }
}
