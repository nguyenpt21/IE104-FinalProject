"use client";
import { useState }  from 'react'
import React from 'react'
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { FaCalendarAlt } from "react-icons/fa";


export default function PickDate() {
    
  const [isFocus, setFocus] = useState(false);
  return (
    <div>
        <DatePicker
            defaultValue={dayjs()} //hiển thị ngày hiện tại
            format="DD/MM/YYYY"
            //placeholder={props.text}
            style={{
                borderColor: isFocus ? '#27B5FC' : '#D1D5DB', // Màu viền
                borderWidth: '2px',
                borderRadius: '6px',
                fontSize: '1rem',
                lineHeight: '1.5rem',
                width: '100%',
                padding: '8px'

            }}
            size='large'
            suffixIcon = {
                <FaCalendarAlt className={`${isFocus ? 'text-sky-500' : 'text-secondary'}`}/>
            }
            onFocus={() => {
                setFocus(true)
            }}
            onBlur={() => {
                setFocus(false)
            }}
        />
    </div>
  )
}
