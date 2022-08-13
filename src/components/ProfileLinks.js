import React from "react";
import axios from "axios";

class ProfileLinks extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: [] // Empty array will be populated by JSON data from API.
    };
  }

  componentDidMount() {
    axios({
      url: "http://127.0.0.1:8000/api/profileLinks", // FUTURE UPGRADE: Replace localhost API URL with deployed API URL.
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
      <div className="project-container">
        {projects.map(p => (
          <div key={p.id}>
            <img src={p.image} alt="Other portfolio links." width="200" />
            <a href={p.url} title="Link to top of current page.">{p.name}</a>
          </div>
        ))}
      </div>
    )
  }

}

export default ProfileLinks;