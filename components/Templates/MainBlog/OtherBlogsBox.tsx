import React from 'react'
import SkeletonBlogOtherCard from './BlogOtherCard/SkeletonBlogOtherCard'
import BlogOtherCard from './BlogOtherCard/BlogOtherCard'
import { useGetNewsWithPaginationApi } from '@/hooks/api/useNewsApi';
import { Blog } from '@/interfaces/blog.interface';

export default function OtherBlogsBox() {
    const { data: relatedNews, isLoading: relatedNewsIsLoding } = useGetNewsWithPaginationApi({
        RowsOfPage: 4,
    });
    return (
        <div className='mb-32'>
            <div className="text-lightTitle dark:text-darkTitle text-[30px] font-peyda mb-10 mt-40">
                اخبار مشابه
            </div>
            <div className="gap-5 grid lgb:grid-cols-4 md:grid-cols-2 grid-cols-1">
                {relatedNewsIsLoding ? Array.from({ length: 4 }, (_, index) => (
                    <SkeletonBlogOtherCard key={index} />
                )) : relatedNews?.news.map((blog: Blog, index: number) => {
                    return <BlogOtherCard {...blog} key={index} />
                }
                )}
            </div>
        </div>
    )
}
