import { Skeleton } from '@nextui-org/react'
import React from 'react'

export default function SkeletonBlogOtherCard() {
    return (
        <div className="pt-[55px]">
            <div className="flex py-6 bg-white dark:bg-dark-lighter flex-col gap-4 rounded-3xl ">
                <div className="w-full flex flex-col items-center gap-5">
                    <div className="overflow-hidden rounded-[38px] w-[85%] -mt-20">
                        <Skeleton className='w-full rounded-3xl h-[240px]' />
                    </div>
                    <div className="w-[85%]">
                        <Skeleton className='rounded-md w-full h-[30px]' />
                        <div className='space-y-2 mt-6'>
                            {Array.from({ length: 2 }, (_, index) => (
                                <Skeleton className='rounded-md w-full h-[20px]' key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
