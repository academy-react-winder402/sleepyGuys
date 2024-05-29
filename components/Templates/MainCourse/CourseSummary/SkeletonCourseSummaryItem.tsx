import { Card, CardBody, Skeleton } from '@nextui-org/react'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

export default function SkeletonCourseSummaryItem({ title, icon }: { title: string, icon: StaticImageData }) {
    return (
        <Card
            className="shadow-2xl shadow-shadowColor dark:shadow-none px-4 py-2 dark:bg-dark-lighter"
            dir="rtl"
        >
            <CardBody className="flex flex-col md:flex-row items-center gap-6">
                <Image src={icon} alt="" className="scale-[2]" />
                <div className="text-right space-y-2">
                    <p className="font-peyda text-lightTitle dark:text-darkTitle text-md mb-1">
                        {title}
                    </p>
                    <Skeleton className='rounded-md w-[100px] h-[25px]' />
                </div>
            </CardBody>
        </Card>
    )
}
