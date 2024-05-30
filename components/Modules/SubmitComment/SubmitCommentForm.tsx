import PrimaryTextarea from "@/components/Modules/Textarea/PrimaryTextarea";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "@/components/Modules/Button/MainButton";
import { addCommentFormType } from "@/interfaces/addCommentFormType.interface";
import PrimaryInput from "../Input/PrimaryInput";
import { useAddCommentApi } from "@/hooks/api/useCoursesApi";
import { useRouter } from "next/router";

export default function SubmitCommentForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<addCommentFormType>();

  const addComment = useAddCommentApi(reset)
  const { mutate, isPending } = addComment

  const router = useRouter()
  const { query } = router

  const submitFormHandler: SubmitHandler<addCommentFormType> = (data) => {
    mutate({
      ...data,
      CourseId: query.courseId,
    })
  };
  return (
    <>
      <form
        className="text-right"
        onSubmit={handleSubmit(submitFormHandler)}
        id="comment-form"
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
        <MainButton
          content={<p>ارسال نظر</p>}
          className="bg-primary dark:bg-primary-darker text-btnText px-7 rounded-lg mt-4"
          type="submit"
          isLoading={isPending}
        />
      </form>
    </>
  );
}
