import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Input, Radio, Space } from 'antd';
export default function Single_choice (
    { haschoice, hassetValue }
    ) {

    function onChange (e) {
        console.log('radio checked', e.target.value);
        hassetValue(e.target.value);
    };

    var mystyle={fontSize:'24px'};
    return (  
    
        <Radio.Group onChange={onChange} value={haschoice}>
            <h1 style={mystyle}>
                My Language Proficiency
            </h1>
        <Space direction="vertical">
            <Radio value={1}>Beginner</Radio>
            <Radio value={2}>Interminate</Radio>
            <Radio value={3}>Advance</Radio>
            <Radio value={4}>Native</Radio>
        </Space>
        </Radio.Group>
    )
}

