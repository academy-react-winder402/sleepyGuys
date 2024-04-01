import PrimaryTextarea from "@/components/Modules/Textarea/PrimaryTextarea";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CommentForm } from "@/interfaces/commentForm.interface";
import MainButton from "@/components/Modules/Button/MainButton";

export default function SubmitCommentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentForm>();

  const submitFormHandler: SubmitHandler<CommentForm> = (data) => {
    console.log(data);
  };
  return (
    <>
    <form className="text-right" onSubmit={handleSubmit(submitFormHandler)} id="comment-form">
      <PrimaryTextarea
        placeholder="متن پیام"
        variant="faded"
        className="font-peyda"
        register={{
          ...register("description", {
            required: true,
          }),
        }}
      />
      <MainButton
        content="ارسال نظر"
        className="bg-primary dark:bg-primary-darker text-btnText px-7 rounded-lg mt-4"
        type="submit"
      />
    </form>
    </>
  );
}
