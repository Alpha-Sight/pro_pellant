"use client";

import {Abstraxion, useModal} from "@burnt-labs/abstraxion";
import hero_bg from '@/assets/images/hero_bg.svg'
import Hero from "@/components/Homepage/heroSection";

export default function Page(): JSX.Element {
    const [, setShow] = useModal();

    return (
        <section className="relative">
            <div className='h-dvh bg-[#E1E0F3]'>
                <img
                    src={hero_bg}
                    alt="hero background"
                    className='w-[12.2rem] lg:w-3/5 lg:h-[28.31rem] h-[11.6rem] absolute top-[15rem] lg:top-0 left-[-2rem] lg:left-[-14rem] z-0'
                />

                <div className='absolute inset-x-0 '>
                    <Hero/>
                </div>
            </div>

            <Abstraxion onClose={() => setShow(false)} />
        </section>
    );
}
