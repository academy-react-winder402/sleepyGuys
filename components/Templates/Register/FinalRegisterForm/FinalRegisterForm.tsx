import PrimaryInput from '@/components/Modules/Input/PrimaryInput';
import { finalRegisterFormProps } from '@/interfaces/finalRegsiter.interface';
import Image from 'next/image';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import eyeIcon from "@/public/icons/outlined/eye.svg"
import eyeSlashIcon from "@/public/icons/outlined/eyeSlash.svg"
import MainButton from '@/components/Modules/Button/MainButton';
import { useRouter } from 'next/router';
import { useRegisterNewUserApi } from '@/hooks/api/useAuthApi';

export default function FinalRegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<finalRegisterFormProps>();

    const router = useRouter()

    const registerNewUser = useRegisterNewUserApi()

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

    const togglePassword = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const submitFormHandler: SubmitHandler<finalRegisterFormProps> = (data) => {
        registerNewUser.mutate({ ...data, phoneNumber: router.query?.phoneNumber })
    }

    return (
        <form onSubmit={handleSubmit(submitFormHandler)}>
            <div className="flex flex-col gap-y-2 my-4">
                <PrimaryInput
                    variant="faded"
                    placeholder="جیمیل"
                    className="font-peyda"
                    type="text"
                    register={{
                        ...register("gmail", {
                            required: "جیمیلت رو نمیتونی خالی بذاری",
                            pattern: {
                                value:
                                    /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g,
                                message: "جیمیلت که نوشتی درست نیست",
                            },
                        }),
                    }}
                    isInvalid={Boolean(errors.gmail)}
                    errorMessage={errors.gmail?.message}
                />
                <PrimaryInput
                    variant="faded"
                    placeholder="رمزعبور"
                    className="font-peyda"
                    type={isPasswordVisible ? "text" : "password"}
                    register={{
                        ...register("password", {
                            required: "رمزعبورت رو نمیتونی خالی بذاری",
                        }),
                    }}
                    endContent={isPasswordVisible ? <Image src={eyeIcon} alt='' onClick={togglePassword} className='cursor-pointer' /> : <Image src={eyeSlashIcon} alt='' onClick={togglePassword} className='cursor-pointer' />}
                    isInvalid={Boolean(errors.password)}
                    errorMessage={errors.password?.message}
                />
            </div>
            <MainButton
                content={<p>ثبت نام</p>}
                type="submit"
                className="bg-primary dark:bg-primary-darker text-btnText w-full py-[1.5rem] text-xl"
                isLoading={registerNewUser.isPending}
            />
        </form>
    )
}
