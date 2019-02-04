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
                <Stepper.Progress
                  color='red'
                  background='green'
                  completed={completed}
                  rounded={false}
                />
                <Stepper.Steps>
                  <Stepper.Step stage={stage} num={1}>Step 1</Stepper.Step>
                  <Stepper.Step stage={stage} num={2}>Step 2</Stepper.Step>
                  <Stepper.Step stage={stage} num={3}>Step 3</Stepper.Step>
                  <Stepper.Step stage={stage} num={4}>Finished!</Stepper.Step>
                </Stepper.Steps>
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
