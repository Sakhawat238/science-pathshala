import React, { Component } from "react";
import ProblemCardHome from "./ProblemCardHome";
import SubmitProblem from "../SubmitProblem/SubmitProblem";


class DiscussionAll extends Component {

  render() {
    const { onClickInput, discussions } = this.props;

    return (
      <div>
        <SubmitProblem onClickInput={onClickInput} />
        {discussions.map((d, i) => {
   
          return (
            <ProblemCardHome
              key={i}
              user_image={d.user_image}
              username={d.username}
              timeline={d.timeline}
              usertype={d.usertype}
              reward_ammount={d.reward_ammount}
              problem_title={d.problem_title}
              problem_image={d.problem_image}
              problem_description={d.problem_description}
              handleClick={onClickInput}
            />
          );
        })}
      </div>
    );
  }
}

export default DiscussionAll;