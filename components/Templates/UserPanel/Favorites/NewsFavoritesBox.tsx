import { useGetMyFavoriteNewsApi } from '@/hooks/api/usePanelApi'
import React from 'react'
import SkeletonBlogOtherCard from '../../MainBlog/BlogOtherCard/SkeletonBlogOtherCard'

export default function NewsFavoritesBox() {
    const { data, isLoading } = useGetMyFavoriteNewsApi()

    return (
        <>
            <h2 className="font-peyda text-[20px] lg:text-[30px] text-primary dark:text-primary-lighter mt-12 mb-6">
                اخبار های مورد علاقه من
            </h2>
            <div className='grid grid-cols-3 gap-4'>
                {isLoading && Array.from({ length: 4 }, (_, index) => (
                    <SkeletonBlogOtherCard key={index} />
                ))}
            </div>
        </>
    )
}
