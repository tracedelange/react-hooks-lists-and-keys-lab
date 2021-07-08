import React from "react";

// { name, about, technologies }

function ProjectItem({project: { name, about, technologies }}) {

  console.log(technologies)

  const techList = technologies.map((item) => {

    return (

      <span key={item}>{item}</span>

    )
    
  })



  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        { techList }
      </div>
    </div>
  );
}

export default ProjectItem;
