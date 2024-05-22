import { finalRegisterFormProps } from "@/interfaces/finalRegsiter.interface";
import { loginFormType } from "@/interfaces/loginForm.interface";
import { otpFormProps } from "@/interfaces/otpForm.interface";
import { registerForm } from "@/interfaces/registerForm.interface";
import {
  loginUserApi,
  registerNewUserApi,
  resetFinalStepPasswordUserApi,
  resetPasswordUserApi,
  sendCodeApi,
  verifyCodeApi,
} from "@/services/api/authApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { resetPasswordForm1Type, resetPasswordForm2Type } from "@/interfaces/resetPasswordForm.interface";

export const useSendCodeApi = () => {
  let phoneNumber: string | string[] | undefined;
  return useMutation({
    mutationFn: (payload: registerForm) => {
      phoneNumber = payload.phoneNumber;
      return sendCodeApi(payload);
    },
    onSuccess: () => {
      toast.success("کد تایید برای شما ارسال شد");
    },
    onError: () => {
      toast.error("خطا در برقراری ارتباط");
    },
  });
};

export const useVerifyCodeApi = (goToRegisterStep3: () => void) => {
  return useMutation({
    mutationFn: (payload: otpFormProps) => verifyCodeApi(payload),
    onSuccess: (res) => {
      toast.success("تایید انجام شد");
      goToRegisterStep3();
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });
};

export const useRegisterNewUserApi = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: finalRegisterFormProps) =>
      registerNewUserApi(payload),
    onSuccess: (res) => {
      toast.success("ثبت نام شما با موفقیت انجام شد");
      router.push("/login");
    },
  });
};

export const useLoginUserApi = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (payload: loginFormType) => loginUserApi(payload),
    onSuccess: (res) => {
      Cookies.set("token", res.data.token);
      toast.success("با موفقیت وارد حساب شدید");
      router.push("/");
    },
  });
};


export const useResetPasswordUserApi = () => {
  return useMutation({
    mutationFn: (payload: resetPasswordForm1Type) => {
      console.log(resetPasswordUserApi(payload));
      return resetPasswordUserApi(payload)
    },
    onSuccess: (res) => {
      toast.success("ادامه فرآیند تغییر پسورد را با ایمیل ارسال شده دنبال کنید");
    },
  });
};

export const useFinalStepResetPasswordUserApi = () => {
  return useMutation({
    mutationFn: (payload: resetPasswordForm2Type) => {
      console.log(resetFinalStepPasswordUserApi(payload));
      return resetFinalStepPasswordUserApi(payload)
    },
    onSuccess: (res) => {
      toast.success("ادامه فرآیند تغییر پسورد را با ایمیل ارسال شده دنبال کنید");
    },
  });
};







