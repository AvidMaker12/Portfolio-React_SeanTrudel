import React from "react";
import axios from "axios";

class EducationList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: [] // Empty array will be populated by JSON data from API.
    };
  }

  componentDidMount() {
    axios({
      url: "http://127.0.0.1:8000/api/educations", // FUTURE UPGRADE: Replace localhost API URL with deployed API URL.
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
        {projects.map(e => (
          <li key={e.id}>
            <h2>{e.course_name}</h2>
            <p>{e.institution_name}</p>
            <p>{e.description}</p>
            <p>{e.date}</p>
          </li>
        ))}
      </ul>
    )
  }

}

export default EducationList;