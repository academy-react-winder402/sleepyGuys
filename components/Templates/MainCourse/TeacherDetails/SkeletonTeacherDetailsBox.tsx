import { Card, CardBody, CardFooter, CardHeader, Divider, Skeleton } from '@nextui-org/react'
import React from 'react'

export default function SkeletonTeacherDetailsBox() {
    return (
        <Card
            dir="rtl"
            className="dark:bg-dark-lighter rounded-3xl px-8 py-4 shadow-2xl shadow-shadowColor dark:shadow-none"
        >
            <CardHeader className="pb-6 px-0">
                <div className='flex items-center gap-2'>
                    <Skeleton className='w-[70px] h-[70px] rounded-full' />
                    <div className='space-y-2'>
                        <Skeleton className='rounded-md w-[180px] h-[25px]' />
                        <Skeleton className='rounded-md w-[120px] h-[15px]' />
                    </div>
                </div>
            </CardHeader>
            <Divider />
            <CardBody dir="rtl" className="text-right px-0 mt-4 mb-8 space-y-2">
                {Array.from({ length: 3 }, (_, index) => (
                    <Skeleton key={index} className='rounded-md h-[20px] w-full' />
                ))}
            </CardBody>
            <Divider />
            <CardFooter className="justify-center">
                <Skeleton className='rounded-md h-[40px] w-[80%] mx-auto' />
            </CardFooter>
        </Card>
    )
}
