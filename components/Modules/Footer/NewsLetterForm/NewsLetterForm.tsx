import React from "react";
import PrimaryInput from "../../Input/PrimaryInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { NewsLetterFormType } from "@/interfaces/newsLetterForm.interface";
import MainButton from "@/components/Modules/Button/MainButton";

export default function NewsLetterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewsLetterFormType>();

  const submitFormHandler: SubmitHandler<NewsLetterFormType> = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-3/4 sm:w-full mx-auto order-4 sm:order-4 col-span-2 sm:col-span-1 flex flex-col gap-5"
      onSubmit={handleSubmit(submitFormHandler)}
    >
      <PrimaryInput
        placeholder="ایمیلت رو برامون بنویس..."
        variant="faded"
        className="font-peyda"
        register={{
          ...register("email", {
            required: true,
          }),
        }}
      />
      <MainButton
        className="w-full bg-primary dark:bg-primary-darker text-sm text-btnText flex items-center justify-center text-center py-3"
        content={<p>عضویت در خبرنامه</p>}
        type="submit"
      />
    </form>
  );
}
