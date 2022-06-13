import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {  Radio, Space } from 'antd';
export default function SingleChoice (
    { haschoice, hassetValue }
    ) {

    function onChange (e) {
        console.log('radio checked', e.target.value);
        hassetValue(e.target.value);
    };
    const choices = [
        {
          title: 'Beginner',
        },
        {
          title: 'Interminate', 
        },
        {
          title: 'Advance',
        },
        {
        title: 'Native',
          },
      ];
    var mystyle={fontSize:'24px'};
    return (  
    
        <Radio.Group onChange={onChange} value={haschoice}>
            <h1 style={mystyle}>
                My Language Proficiency
            </h1>
        <Space direction="vertical">
            {choices.map(item => (
                <Radio value={item.title} >{item.title}</Radio>
            ))}
  
            {/* <Radio value={1}>Beginner</Radio>
            <Radio value={2}>Interminate</Radio>
            <Radio value={3}>Advance</Radio>
            <Radio value={4}>Native</Radio> */}
        </Space>
        </Radio.Group>
    )
}

