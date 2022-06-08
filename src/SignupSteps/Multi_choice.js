import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input, Radio, Space } from 'antd';
import { Checkbox } from 'antd';
const plainOptions = ['Business&Finance', 'Technology','Singapore News','China News'
                        ,'Entertainment','Sports','Politics'];
const options = [
  {
    label: 'Business&Finance',
    value: 'Business&Finance',
  },
  {
    label: 'Technology',
    value: 'Technology',
  },
  {
    label: 'Sports',
    value: 'Sports',
  },
  {
    label: 'Singapore News',
    value: 'Singapore News',
  },
  {
    label: 'China News',
    value: 'China News',
  },
  {
    label: 'Entertainment',
    value: 'Entertainment',
  },
  {
    label: 'Politics',
    value: 'Politics',
  },
];
export default function Multi_choice (
    { allchoice, allsetchoice,multitrue,setmultitrue}
    ) {

    function onChange (e) {
        console.log('radio checked', e.target.value);
        allsetchoice(e.target.value);
    };

    function Choose(e)
    {
        console.log(e)
        setmultitrue(e)
    }

    var mystyle={fontSize:'24px'};
    return (  
    
        <Radio.Group onChange={onChange} value={allchoice}>
            <h1 style={mystyle}>
                Prefer topics
            </h1>
        <Space direction="vertical">
            <Radio value={1}>Generic/Daily life</Radio>
            <Radio value={2}>Specific</Radio>
            {allchoice === 2 ? (
           
           <Checkbox.Group options={plainOptions} defaultValue={[]} onChange={Choose} />
           
       
     ) : null}
            <Radio value={3}>No Preference</Radio>
            
        </Space>
        </Radio.Group>
    )
}

