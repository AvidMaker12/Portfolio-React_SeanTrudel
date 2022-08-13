import React from "react";
import axios from "axios";

class ProjectsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [] // Empty array will be populated by JSON data from API.
    };
  }

  componentDidMount() {
    axios({
      url: "http://127.0.0.1:8000/api/projects", // FUTURE UPGRADE: Replace localhost API URL with deployed API URL.
      method: "GET"
    }).then((res) => {

      //console.log("JSON.stringify(res.data.[0].id) = "+JSON.stringify(res.data[0].id));
      //console.log("res.data[0].id = "+res.data[0].id);
      //console.log("res.data = "+res.data);
      
      this.setState({
        projects: res.data
      });
    });
  }

  render() {
    // Load projects state variable.
    const { projects } = this.state;

    return(
      <ul className="w3-animate-opacity">
        {projects.map(p => (
          <li key={p.id}>
            <h2>{p.title}</h2>
            <img src={p.image} alt="Screenshot of project." width="200" />
            <p>{p.content}</p>
            <a href={p.url}>Project Link</a>
          </li>
        ))}
      </ul>
    )
  }

}

export default ProjectsList;