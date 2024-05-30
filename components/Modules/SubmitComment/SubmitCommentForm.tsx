import PrimaryTextarea from "@/components/Modules/Textarea/PrimaryTextarea";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommentForm } from "@/interfaces/commentForm.interface";
import MainButton from "@/components/Modules/Button/MainButton";
import { addCommentFormType } from "@/interfaces/addCommentFormType.interface";
import PrimaryInput from "../Input/PrimaryInput";

export default function SubmitCommentForm({submitFormHandler} : any) {
  const { register, handleSubmit, formState: { errors } } = useForm<addCommentFormType>();

  // const submitFormHandler: SubmitHandler<CommentForm> = (data) => {
  //   console.log(data);
  // };
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
            required: "سرتیتر/سرتیتر رو نمیتونی خالی بذاری",
          }),
        }}
      />
        <PrimaryTextarea
          placeholder="متن پیام"
          variant="faded"
          className="font-peyda"
          register={{
            ...register("Describe", {
              required: true,
            }),
          }}
        />
        <MainButton
          content={<p>ارسال نظر</p>}
          className="bg-primary dark:bg-primary-darker text-btnText px-7 rounded-lg mt-4"
          type="submit"
        />
      </form>
    </>
  );
}
