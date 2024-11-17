"use client";
import React from 'react'
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";

export default function Breadcr(props) {
  return (
    <div className=''>
        <Breadcrumbs
            underline='hover'
            className='font-medium'
            itemClasses={{
                item: "text-[16px] hover:text-sky-600 data-[current=true]:text-secondary ",
                separator: "text-black text-xl",
            }}
        
        >
            <BreadcrumbItem href='/'>{props.lv1}</BreadcrumbItem>
            <BreadcrumbItem href='/flight'>{props.lv2}</BreadcrumbItem>
            <BreadcrumbItem className='font-normal'>{props.lv3}</BreadcrumbItem>
        </Breadcrumbs>
    </div>
  )
}
