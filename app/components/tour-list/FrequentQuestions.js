import { Accordion, AccordionItem } from "@nextui-org/react";
import { FREQUENT_QUESTIONS } from "@/constants/tour-list";
export default function FrequentQuestions() {
    const itemClasses = {
        base: "w-full",
        title: "font-medium text-base px-4 data-[open=true]:text-primary group-hover:text-primary",
        trigger: "flex items-center justify-between",
        indicator:
            "text-xl mr-4 data-[open=true]:text-primary group-hover:text-primary",
        content: "p-4 mx-2 mb-2 bg-gray-100 rounded-md",
    };
    return (
        <Accordion
            className="border border-gray-200 rounded-lg divide-y divide-gray-200"
            itemClasses={itemClasses}
        >
            {FREQUENT_QUESTIONS.map((fqa, key) => (
                <AccordionItem key={key} title={fqa.question}>
                    {fqa.answer}
                </AccordionItem>
            ))}
        </Accordion>
    );
}
