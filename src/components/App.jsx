import React, { Component } from 'react';
import AppSection from 'components/AppSection/AppSection';
import FeedbackComponent from 'components/FeedbackComponent/FeedbackComponent';
import FeedbackStatistics from './FeedbackStatistics/FeedbackStatistics';
import Notification from './Notification/Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const countTotalFeedback = this.countTotalFeedback();
    return countTotalFeedback
      ? Math.round((this.state.good / countTotalFeedback) * 100)
      : 0;
  };
  HandleClick = ({ target: { name } }) => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    return (
      <div className='container'>
        <AppSection title="Please leave feedback">
          <FeedbackComponent
            options={options}
            onLeaveFeedback={this.HandleClick}
          ></FeedbackComponent>
        </AppSection>
        {this.countTotalFeedback() > 0 ? (
          <AppSection title="Statistics">
            <FeedbackStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              count={this.countPositiveFeedbackPercentage}
            ></FeedbackStatistics>
          </AppSection>
        ) : (
          <Notification title="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}

export { App };
