import { otpFormProps } from "@/interfaces/otpForm.interface";
import { registerForm } from "@/interfaces/registerForm.interface";
import { sendCodeApi, verifyCodeApi } from "@/services/api/authApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export const useSendCodeApi = (goToOtpForm: () => void) => {
  const router = useRouter();
  let phoneNumber: number;
  return useMutation({
    mutationFn: (payload: registerForm) => {
      phoneNumber = payload.phoneNumber;
      return sendCodeApi(payload);
    },
    onSuccess: () => {
      toast.success("کد تایید برای شما ارسال شد");
      goToOtpForm();
      router.push(`/register?phoneNumber=${phoneNumber}`);
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
      console.log("Success", res);
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });
};
