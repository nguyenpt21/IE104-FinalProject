"use client";

import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import { QUESTION } from '@/constants/contact';
import { PiStarFourLight } from "react-icons/pi";

export default function Accod() {
  
  const itemClasses = {
    base: "w-full", //bao 1 accord
    title: "font-medium text-xl px-4 py-2 data-[open=true]:text-primary group-hover:text-primary",
    trigger: "flex items-center justify-between ", //bao title
    indicator: "text-3xl mr-4 data-[open=true]:text-primary group-hover:text-primary",//icon xoay
    content: "text-base p-4 mx-4 mb-4 bg-blue-50 text-gray-500 rounded-md",
  };

  return (
    <div className='flex items-start justify-center'>
        <Accordion 
          selectionMode="single"
          showDivider={true}
          className="divide-y divide-gray-200 p-2"
          itemClasses={itemClasses}
        >
            {QUESTION.map((row, key) => (
              <AccordionItem
                key={key}
                title={row.question}
                indicator = {({ isOpen }) => (isOpen ? <PiStarFourLight className='rotate-45'/> : <PiStarFourLight/>)}
                className='group'
              >
                {row.answer}
              </AccordionItem>
            ))}
        </Accordion>
    </div>
  )
}
