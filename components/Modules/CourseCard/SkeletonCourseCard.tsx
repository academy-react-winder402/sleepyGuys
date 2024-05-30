import { Chip, Divider, Skeleton } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import clock from "@/public/icons/courses/clock.svg";

export default function SkeletonCourseCard() {
    return (
        <div className="pt-[55px] h-[435px] w-full">
            <div className="flex py-6 bg-white dark:bg-dark-lighter rounded-3xl h-full">
                <div className="w-full flex flex-col gap-5">
                    <div className="rounded-3xl w-[85%] mx-auto -mt-20 h-[160px]">
                        <Skeleton className='h-full rounded-3xl ' />
                    </div>
                    <div className="flex flex-col">
                        <Skeleton className='w-[50%] h-[30px] rounded-md mb-4 mr-7' />
                        <div className='w-[85%] mx-auto flex flex-col gap-3'>
                            <Skeleton className='h-[15px] rounded-md' />
                            <Skeleton className='h-[15px] rounded-md' />
                            <Skeleton className='h-[15px] rounded-md' />

                        </div>
                    </div>
                    <div className="mt-auto w-[85%] mx-auto">
                        <Chip
                            classNames={{
                                dot: ["bg-primary dark:bg-primary-lighter px-1.5"],
                                base: [
                                    "border-none",
                                ],
                            }}
                            variant="dot"
                        >
                            <Skeleton className='h-[15px] w-[100px] rounded-md' />
                        </Chip>
                        <Divider className="bg-gray-lighter mb-4 mt-1" />
                        <div className="flex justify-between items-center">
                            <Chip
                                startContent={<Image src={clock} alt="" />}
                                variant="solid"
                                className="bg-mainBodyBg dark:bg-dark"
                            >
                                <Skeleton className='h-[15px] w-[100px] rounded-md' />
                            </Chip>
                            <Skeleton className='h-[25px] w-[120px] rounded-md' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
