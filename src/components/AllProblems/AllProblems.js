import React, { Component } from "react";
import SubmitProblem from "../SubmitProblem/SubmitProblem";
import DiscussionCard from '../DiscussionCard/DiscussionCard';


class AllProblems extends Component {
  handleHideAction = () => {};

  handleQuestionReportAction = () => {};

  handleSolutionReportAction = () => {};

  render() {
    const { onClickInput, discussions } = this.props;

    return (
      <div>
        <SubmitProblem onClickInput={onClickInput} />
        {discussions.map((d, i) => {
          return (
            <DiscussionCard 
              key={i}
              id={d.discussion_id}
              user_image={d.user_image}
              username={d.username}
              timeline={d.timeline}
              usertype={d.usertype}
              answer={d.answer}
              answer_image={d.answer_image}
              answer_subscriber_id={d.answer_subscriber_id}
              answer_time={d.answer_time}
              reward_ammount={d.reward_ammount}
              problem_level={d.problem_title}
              problem_image={d.problem_image}
              problem_description={d.problem_description}
              answerProblem={this.props.answerProblem}
            />
          );
        })}
      </div>
    );
  }
}

export default AllProblems;
