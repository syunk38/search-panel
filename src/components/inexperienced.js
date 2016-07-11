import React, { Component } from 'react'

export default class InexperiencedCheckBox extends Component{
  constructor(props) {
    super(props);
    this.state = {checked: true}
  }

  handleChecked(e) {
    this.setState({checked: e.target.checked });
  }

  checked() {
    return this.state.checked ? 'checked' : ''
  }

  render(){
    return (
      <div>
        <label for="inexperienced">未経験</label>
        <input name="inexperienced" id="inexperienced" type="checkbox" checked={this.checked()} onChange={this.handleChecked.bind(this)} />
      </div>
    )
  }
}
