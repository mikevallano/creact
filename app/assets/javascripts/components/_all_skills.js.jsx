var AllSkills = React.createClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },


  render() {

    console.log(this.prop)

    var skills =  this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <h5>{skill.details}</h5>
          <button onClick={this.handleDelete.bind(this, skill.id)}>Delete</button>
        </div>
      )
    });

    return(
        <div>
            {skills}
        </div>
    )
  }
});
