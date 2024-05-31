import { Card, CardHeader, Divider, Skeleton } from '@nextui-org/react'
import React from 'react'

export default function SkeletonCommentCard() {
    return (
        <Card
            className={`bg-mainBodyBg dark:bg-dark rounded-3xl p-4 shadow-none`}
        >
            <CardHeader className="pb-6 px-0 flex justify-between">
                <div className='flex items-center gap-2'>
                    <Skeleton className='w-[70px] h-[70px] rounded-full' />
                    <div className='space-y-2'>
                        <Skeleton className='rounded-md w-[180px] h-[25px]' />
                        <Skeleton className='rounded-md w-[120px] h-[15px]' />
                    </div>
                </div>
            </CardHeader>
            <Divider className="mt-3 mb-6" />
            <Skeleton className='rounded-md w-1/2 h-[30px]' />
        </Card>
    )
}
