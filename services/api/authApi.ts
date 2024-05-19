import { finalRegisterFormProps } from "@/interfaces/finalRegsiter.interface";
import { otpFormProps } from "@/interfaces/otpForm.interface";
import { registerForm } from "@/interfaces/registerForm.interface";
import httpService from "@/services/httpService";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const sendCodeApi = (payload: registerForm) => {
  return httpService.post(baseUrl + `Sign/SendVerifyMessage`, payload);
};

export const verifyCodeApi = (payload: otpFormProps) => {
  return httpService.post(baseUrl + `Sign/VerifyMessage`, payload);
};

export const registerNewUserApi = (payload: finalRegisterFormProps) => {
  return httpService.post(baseUrl + `Sign/Register`, payload);
};

