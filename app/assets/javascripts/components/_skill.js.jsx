var Skill = React.createClass({

  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    this.setState({ editable: true })

    this.onUpdate(this.props.skill);
  },

  onUpdate(skill) {

    var id      = skill.id;
    var name    = this.state.name || skill.name;
    var details = this.state.details || skill.details;
    var level   = this.props.skill.level || skill.level;

    var skill = { id: id, name: name, details: details, level: level }

    this.props.handleUpdate(skill);

    this.setState({ editable: !this.state.editable })
  },

  render() {
    var name = this.state.editable ? <input type='text'
                                            onChange={ (e) => this.setState({ name: e.target.value }) }
                                            defaultValue={this.props.skill.name} />
                                   : <h3>{this.props.skill.name}</h3>

    var details = this.state.editable ? <textarea type='text'
                                                  onChange={ (e) => this.setState({ details: e.target.value }) }
                                                  defaultValue={this.props.skill.details}>
                                        </textarea>
                                      : <p>{this.props.skill.details}</p>

    return (
    <div>
      {name}

      <p><strong>Level:</strong> {this.props.skill.level}</p>
      {details}

      <button onClick={this.props.handleDelete}>
        Delete
      </button>

      <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
    </div>
  )
  }
});
