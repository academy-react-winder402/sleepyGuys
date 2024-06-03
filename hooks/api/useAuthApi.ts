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
import {
  resetPasswordForm1Type,
  resetPasswordForm2Type,
} from "@/interfaces/resetPasswordForm.interface";

export const useSendCodeApi = () => {
  return useMutation({
    mutationFn: (payload: registerForm) => sendCodeApi(payload),
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
  const { query } = router;
  const callbackUrl: string | null | undefined | any = query.callbackUrl;

  return useMutation({
    mutationFn: (payload: loginFormType) => loginUserApi(payload),
    onSuccess: (res) => {
      Cookies.set("token", res.data.token);
      toast.success("با موفقیت وارد حساب شدید");
      switch (Boolean(callbackUrl)) {
        case true: {
          return router.push(callbackUrl);
        }
        case false: {
          return router.push("/");
        }
        default: {
          break;
        }
      }
    },
  });
};

export const useResetPasswordUserApi = () => {
  return useMutation({
    mutationFn: (payload: resetPasswordForm1Type) =>
      resetPasswordUserApi(payload),
    onSuccess: (res) => {
      toast.success(
        "ادامه فرآیند تغییر پسورد را با ایمیل ارسال شده دنبال کنید"
      );
    },
  });
};

export const useFinalStepResetPasswordUserApi = () => {
  return useMutation({
    mutationFn: (payload: resetPasswordForm2Type) =>
      resetFinalStepPasswordUserApi(payload),
    onSuccess: (res) => {
      toast.success(
        "ادامه فرآیند تغییر پسورد را با ایمیل ارسال شده دنبال کنید"
      );
    },
  });
};
