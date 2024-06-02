import PrimaryTextarea from "@/components/Modules/Textarea/PrimaryTextarea";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "../Input/PrimaryInput";
import { useAddCommentApi, useAddReplyCourseCommentApi } from "@/hooks/api/useCoursesApi";
import { useRouter } from "next/router";
import { commentProps } from "@/interfaces/comment.interface";

export default function SubmitCommentForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<commentProps>();

  const addComment = useAddCommentApi(reset)
  const { mutate: addCommentMutate, isPending: addCommentIsPending } = addComment

  const addReplyCourseComment = useAddReplyCourseCommentApi(reset)
  const { mutate: addReplyMutate, isPending: addReplyIsPending } = addReplyCourseComment

  const router = useRouter()
  const { pathname, query } = router

  const submitFormHandler: SubmitHandler<commentProps> = (data) => {
    if (query.CommentId) {
      addReplyMutate({
        ...data,
        CourseId: query.courseId,
        CommentId: query.CommentId
      })
    } else {
      addCommentMutate({
        ...data,
        CourseId: query.courseId,
      })
    }
  };

  const cancelReplyToComment = () => {
    router.push({ pathname, query: { ...query, CommentId: undefined } }, undefined, { shallow: true })
  }
  return (
    <form
      className="text-right mb-8"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <PrimaryInput
        placeholder="سرتیتر"
        variant="faded"
        className="font-peyda mb-8"
        type="text"
        register={{
          ...register("Title", {
            required: "سرتیتر رو نم یتونی خالی بذاری",
            minLength: {
              value: 5,
              message: "برای سرتیتر حداقل ۵ حرف باید بنویسی"
            }
          }),
        }}
        isInvalid={Boolean(errors.Title)}
        errorMessage={errors.Title?.message}
      />
      <PrimaryTextarea
        placeholder="متن پیام"
        variant="faded"
        className="font-peyda"
        register={{
          ...register("Describe", {
            required: "متن پیامت رو نمی تونی خالی بذاری",
            minLength: {
              value: 5,
              message: "برای پیامت حداقل ۵ حرف باید بنویسی"
            }
          }),
        }}
        isInvalid={Boolean(errors.Describe)}
        errorMessage={errors.Describe?.message}
      />
      <div className="flex items-center gap-2 mt-4">
        <MainButton
          content={<p>ارسال نظر</p>}
          className="bg-primary dark:bg-primary-darker text-btnText rounded-lg"
          type="submit"
          isLoading={addCommentIsPending || addReplyIsPending}
        />
        {query.CommentId && <MainButton
          content={<p>لغو</p>}
          className="bg-secondary text-btnText rounded-lg"
          onClick={cancelReplyToComment}
        />}
      </div>
    </form>
  );
}
