import React from "react";

export const Button = props => {
  return (
    <div>
      <button onClick={props.decreaseNumber}>-</button>
      <button onClick={props.addNumber}>+</button>
      <p>This is my Project React Data.</p>
      <a href="https://gitlab.com/impactbyte/learn/course-fullstackweb/blob/master/chapters/projects/project-react-data.md">
        Project Link
      </a>
    </div>
  );
};
