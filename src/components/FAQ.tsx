"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="">
                    <p className="hidden lg:block text-foreground-accent">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">Frequently Asked Questions</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
                        Ask us anything!
                    </p>
                    <a href="mailto:ashokkumar1112.ch@gmail.com" className="mt-3 block text-base sm:text-xl lg:text-4xl text-secondary font-semibold hover:underline text-center lg:text-left break-all">ashokkumar1112.ch@gmail.com</a>
                    <a href="tel:+917999614511" className="mt-2 block text-lg text-foreground-accent hover:text-primary text-center lg:text-left">+91 7999614511</a>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto border-b">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-start sm:items-center justify-between gap-3 w-full px-2 sm:px-4 pt-7 text-left border-t">
                                            <span className="text-base sm:text-lg lg:text-2xl font-semibold flex-1 min-w-0">{faq.question}</span>
                                            {open ? <BiMinus className="w-5 h-5 text-secondary flex-shrink-0 mt-1 sm:mt-0" /> : <BiPlus className="w-5 h-5 text-secondary flex-shrink-0 mt-1 sm:mt-0" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;