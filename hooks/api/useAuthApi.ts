import { otpFormProps } from "@/interfaces/otpForm.interface";
import { registerForm } from "@/interfaces/registerForm.interface";
import { sendCodeApi, verifyCodeApi } from "@/services/api/authApi";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

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

export const useVerifyCodeApi = () => {
  return useMutation({
    mutationFn: (payload: otpFormProps) => verifyCodeApi(payload),
    onSuccess: (res) => {
      toast.success("تایید انجام شد");
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });
};
