import React from "react";
import ContactInput from "@/app/components/contact/CtInput";
import ContactTexarea from "@/app/components/contact/CtTextarea";
import CtButton from "@/app/components/contact/CtButton";

export default function ContactForm() {
    return (
        <div>
            <form className="space-y-5 m-10 shadow-custom p-6 rounded-lg">
                <div className="grid grid-cols-2 gap-5">
                    <ContactInput type="text" title="Họ và Tên"></ContactInput>
                    <ContactInput type="email" title="Email"></ContactInput>
                </div>

                <ContactTexarea title="Để lại lời nhắn"></ContactTexarea>

                <CtButton title="Gửi" icon="/icons/send-01.svg"></CtButton>
            </form>
        </div>
    );
}
