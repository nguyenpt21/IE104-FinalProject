"use client";

import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import { QUESTION } from '@/constants/contact';
import { PiStarFourLight } from "react-icons/pi";

export default function Accod() {
    
  return (
    <div>
        <Accordion selectionMode="multiple">
            <AccordionItem
                title={QUESTION[0].question}
                indicator={({ isOpen }) => (isOpen ? <PiStarFourLight style={{ transform: 'rotate(45deg)'}} /> : <PiStarFourLight />)}
            >
                {QUESTION[0].answer}
            </AccordionItem>
        </Accordion>
    </div>
  )
}
