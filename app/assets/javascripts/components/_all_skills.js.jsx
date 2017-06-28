var AllSkills = React.createClass({


  render() {

    console.log(this.prop)

    var skills =  this.props.skills.map((skill) => {
                  return  (
                          <div key={skill.id}>
                            <h3>{skill.name}</h3>
                            <h5>{skill.details}</h5>
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
