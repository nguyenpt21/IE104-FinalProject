
import React from 'react'
import ContactInput from '@/app/components/contact/CtInput'
import ContactTexarea from '@/app/components/contact/CtTextarea'
import CtButton from '@/app/components/contact/CtButton'

export default function ContactForm() {
  return (
    <div>
        <form className='space-y-5 my-10 shadow-custom p-6 rounded-lg'>
            <div className='grid grid-cols-2 gap-5'>
                <ContactInput
                    type = "text"
                    id = "name"
                    title = "Họ và Tên"
                ></ContactInput>

                <ContactInput
                    type = "email"
                    id = "mail"
                    title = "Email"
                ></ContactInput>
            </div>

            <ContactTexarea
                title = "Để lại lời nhắn"
                id = "message"
            ></ContactTexarea>

            <CtButton
                title = "Gửi"
                hr = "/"
            ></CtButton>
        </form>
    </div>
  )
}
