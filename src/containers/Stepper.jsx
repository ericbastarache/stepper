import React from 'react';
import Button from 'components/Button';
import Steps from 'components/Steps';
import Step from 'components/Step';
import Progress from 'components/Progress';

class Stepper extends React.Component {
  state = {
    stage: 0
  }
  handleNextStep = () => {
    this.setState({
      stage: this.state.stage + 1
    });
  }
  handlePrevStep = () => {
    this.setState({
      stage: this.state.stage - 1
    });
  }
  static Button = Button;
  static Step = Step;
  static Progress = Progress;
  static Steps = Steps;
  render () {
    const {
      stage
    } = this.state;
    const {
      steps
    } = this.props;
    const completed = stage / steps;
    return this.props.children({
      nextStep: this.handleNextStep,
      prevStep: this.handlePrevStep,
      stage,
      steps,
      completed: (completed * 100).toFixed(0)
    });
  }
}

export default Stepper;