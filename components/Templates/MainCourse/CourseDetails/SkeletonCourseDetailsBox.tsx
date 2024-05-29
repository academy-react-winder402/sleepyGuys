import { Skeleton } from '@nextui-org/react'
import React from 'react'

export default function SkeletonCourseDetailsBox() {
    return (
        <div className="relative h-[300px] lg:h-[350px] lgb:h-[450px] mb-20 text-DarkBody rounded-3xl">
            <div className="flex w-full bg-gradient-to-r from-[rgba(0,0,0,0.6)] via-[rgba(0,0,0,0.9)] to-[#000] lg:from-[rgba(0,0,0,0.2)] lg:via-[rgba(0,0,0,0.92)] lg:to-[#000] z-10 absolute top-0 left-0 h-full rounded-3xl">
                <div className="flex items-center h-full p-5 pr-8 w-full">
                    <div className="flex flex-col gap-8 lgb:gap-16 w-full sm:w-4/7">
                        <div className="flex flex-col gap-3">
                            <Skeleton className='w-[40%] mx-auto sm:mx-0 h-[35px] rounded-md' />
                            <div className='space-y-2 mt-4'>
                                <Skeleton className='rounded-md h-[20px]' />
                                <Skeleton className='rounded-md h-[20px]' />
                            </div>
                        </div>
                        <div className="flex flex-col-reverse sm:flex-row gap-5 justify-between items-center sm:items-end w-full sm:w-4/7">
                            <Skeleton className='rounded-lg w-[50%] sm:w-[30%] h-[45px]' />
                            <Skeleton className='rounded-md w-[40%] sm:w-[25%] h-[35px]' />
                        </div>
                    </div>
                    <div className="-translate-x-10 w-3/7 hidden lg:block h-[300px]">
                        <Skeleton className='w-[400px] h-full rounded-3xl' />
                    </div>
                </div>
            </div>
        </div>
    )
}
