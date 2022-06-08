import { Steps, Button, message } from 'antd';
import * as React from 'react';
import './index.css';
import ConsentStep from './ConsentStep';
import Single_choice from './Single_choice';
import Multi_choice from './Multi_choice';
import Final from './Final';

const { Step } = Steps;

const SignupSteps = () => {
  const [current, setCurrent] = React.useState(0);

  const [value, setValue] = React.useState(1);

  const [nowvalue, setNowvalue] = React.useState(1);

  const [consentAgreed, setConsentAgreed] = React.useState(false);

  const [preferflag, setPreferFlag] = React.useState(false);
  const [multi, setmulti] = React.useState([]);

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
      content: preferflag==false ? <Single_choice 
          haschoice={value} 
          hassetValue={setValue}
        />:<Multi_choice
          allchoice={nowvalue}
          allsetchoice={setNowvalue}
          multitrue = {multi}
          setmultitrue = {setmulti}
        />,
        choiceFailMessage: "Please have a choice"
      
    },
    {
      title: 'Complete',
      content: <Final
      
    />,
    },
  ];

  const next = () => {
    if (!steps[current].validator || steps[current].validator())
    {
      if(current == 1)
      {
          if(preferflag==false)
          {
            setPreferFlag(true);
          }
          else 
          {
            console.log(multi);
            if(nowvalue==2 && multi.length==0) message.error(steps[current].choiceFailMessage);
            else setCurrent(current+1);
          }
      }
      else setCurrent(current + 1);
    }
    else 
      message.error(steps[current].validationFailMessage);
  };

  const prev = () => {
    if(current == 1)
    {
      if(preferflag==true)
      {
        setPreferFlag(false);
      }
      else setCurrent(current - 1);
    }
    else setCurrent(current - 1);
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