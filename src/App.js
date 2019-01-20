import React, { Component } from 'react';
import Stepper from 'containers/Stepper';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stepper steps={4}>
          {({prevStep, nextStep, steps, stage, completed}) => {
            return (
              <>
                <Stepper.Steps>
                  <Stepper.Step stage={stage} num={1}>Hello</Stepper.Step>
                  <Stepper.Step stage={stage} num={2}>World</Stepper.Step>
                  <Stepper.Step stage={stage} num={3}>I'm a tree</Stepper.Step>
                </Stepper.Steps>
                <Stepper.Progress
                  completed={completed}
                />
                <Stepper.Button
                  disabled={stage < 1}
                  onClick={prevStep}
                >
                  Back
                </Stepper.Button>
                <Stepper.Button
                  disabled={stage >= steps}
                  onClick={nextStep}
                >
                  Next
                </Stepper.Button>
              </>
            )
          }}
        </Stepper>
      </div>
    );
  }
}

export default App;
