import { Blog } from '@/interfaces/blog.interface'
import { validateImageAddress } from '@/utils/validateImageAdderss'
import Image from 'next/image'
import React from 'react'
import fallbackImage from "@/public/pictures/blog/blogImage.jpg"
import MainBlogDescription from '../MainBlogDescription/MainBlogDescription'

export default function MainBlogDetailsCard({ addUserFullName, title, currentImageAddressTumb, miniDescribe }: Blog) {
    return (
        <div className="pt-10 lg:mr-20 relative">
            <p className="absolute flex justify-center items-center p-5 rounded-b-xl h-[50px] text-lightTitle dark:text-darkTitle -bottom-[50px] left-20 bg-[#ccc] dark:bg-dark-darker">
                نویسنده: {addUserFullName}
            </p>
            <h2 className="flex items-center pb-5 font-peyda text-[30px] text-lightTitle dark:text-darkTitle">
                <div className="w-[38%] hidden lg:block"></div>
                <p className="pr-2 font-peyda w-full flex justify-center lg:justify-start">
                    {title}
                </p>
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 bg-white dark:bg-dark-lighter rounded-[50px]">
                <div className="relative w-full h-[380px] md:h-[600px] lg:h-auto lg:w-[30%] md:mb-[110px] lg:mb-0 py-20 mb-12 lg:py-0 flex justify-center">
                    <div className=" w-[340px] md:w-[600px] h-auto lgb:h-[310px] lg:h-[280px] lg:w-[280px] xlb:w-[400px] lgb:w-[350px] relative">
                        <div className="bg-[#ccc] dark:bg-dark-darker w-full absolute lg:-top-10 lg:-right-10 lgb:-top-20 lgb:-right-12 h-[340px] md:h-[600px] lg:h-[280px] lgb:h-[310px] xlb:h-[380px] rounded-3xl lgb:rounded-[38px] rotate-6 md:rotate-12"></div>
                        <Image
                            src={validateImageAddress(currentImageAddressTumb, fallbackImage)}
                            width={400}
                            height={400}
                            alt=""
                            className="w-full rounded-3xl lgb:rounded-[38px] absolute lg:-top-10 lg:-right-10 lgb:-top-20 lgb:-right-10"
                        />
                    </div>
                </div>
                <div className="lg:w-[70%] w-full">
                    <MainBlogDescription description={miniDescribe} />
                </div>
            </div>
        </div>
    )
}
