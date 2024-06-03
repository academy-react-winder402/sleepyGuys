import { Skeleton } from '@nextui-org/react'
import React from 'react'

export default function SkeletonCategoryCard() {
    return (
        <div
            className="p-2 md:p-3 bg-white dark:bg-dark-lighter rounded-3xl flex flex-col gap-3 items-center w-[45%] md:w-[30%] lg:w-[20%]"
        >
            <Skeleton className='rounded-3xl h-[120px] sm:h-[150px] w-3/4' />
            <Skeleton className='rounded-md h-[20px] w-3/4' />
        </div>
    )
}
