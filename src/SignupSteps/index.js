import { Steps, Button, message } from 'antd';
import * as React from 'react';
import './index.css';
import ConsentStep from './ConsentStep';

const { Step } = Steps;

const SignupSteps = () => {
  const [current, setCurrent] = React.useState(0);

  const [consentAgreed, setConsentAgreed] = React.useState(true);

  function consentStepValidator() {
    return consentAgreed;
  }

  const steps = [
    {
      title: 'Consent',
      content: <ConsentStep 
          hasAgreed={consentAgreed} 
          updateHasAgreed={setConsentAgreed}
        />,
      validator: consentStepValidator,
      validationFailMessage: "Please accept the terms"
    },
    {
      title: 'Preferences',
      content: 'Second-content',
    },
    {
      title: 'Complete',
      content: 'Last-content',
    },
  ];

  const next = () => {
    if (!steps[current].validator || steps[current].validator())
      setCurrent(current + 1);
    else 
      message.error(steps[current].validationFailMessage);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default SignupSteps;