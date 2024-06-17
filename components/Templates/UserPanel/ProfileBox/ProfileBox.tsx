import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import img from "@/public/pictures/userPanel/userProfile.png";
import { SubmitHandler, useForm } from "react-hook-form";
import MainButton from "@/components/Modules/Button/MainButton";
import PrimaryInput from "@/components/Modules/Input/PrimaryInput";
import { useAddProfileApi } from "@/hooks/api/usePanelApi";

export default function ProfileBox() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(img.src);
  const [imageDimensions, setImageDimensions] = useState({ width: 192, height: 192 });
  const { register, formState: { errors }, reset } = useForm();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedImage(file);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      
      const image = new window.Image(); 
      image.onload = () => {
        setImageDimensions({ width: image.width, height: image.height });
      };
      image.src = objectUrl;
    } else {
      setPreview(img.src); 
      setImageDimensions({ width: 192, height: 192 }); 
    }
  };

  const addProfile = useAddProfileApi(reset)
  const { mutate: addProfileMutate, isPending: addProfileMutateIsPending } = addProfile

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProfileMutate({
        selectedImage,
      })
    console.log("Form submitted with data:", {
      selectedImage,
    });
  };


  return (
    <>
      <Image
        src={preview}
        priority={true}
        alt="Profile Picture"
        className="h-48 w-48 rounded-full"
        width={imageDimensions.width}
        height={imageDimensions.height}
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 mt-10"
      >
        <label htmlFor="fileInput" className="cursor-pointer text-white py-2 px-4 bg-primary flex justify-center items-center rounded-xl">
          آپلود عکس
        </label>
        <input
          id="fileInput"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <MainButton
          content={<p>ثبت</p>}
          type="submit"
          className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
          isLoading={false}
        />
      </form>
    </>
  );
}