import React, { Component } from "react";
import MyProblemCard from "../MyProblemCard/MyProblemCard";


class MyProblems extends Component {
  render() {
    const { discussions } = this.props;

    return (
      <div>
        {discussions.map((d, i) => {
          return (
            <MyProblemCard
              key={i}
              user_image={d.user_image}
              username={d.username}
              timeline={d.timeline}
              usertype={d.usertype}
              reward_ammount={d.reward_ammount}
              problem_title={d.problem_title}
              problem_image={d.problem_image}
              answer={d.answer}
              answer_image={d.answer_image}
              answer_subscriber_id={d.answer_subscriber_id}
              answer_time={d.answer_time}
              problem_description={d.problem_description}
              handleHide={this.handleHideAction}
              handleQuesReport={this.handleQuestionReportAction}
              handleAnsReport={this.handleSolutionReportAction}
            />
          );
        })}
      </div>
    );
  }
}

export default MyProblems;
