import { useSendCodeApi } from "@/hooks/api/useAuthApi";
import convertToPersianDigit from "@/utils/convertToPersianDigit";
import { Spinner } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Watch } from "react-loader-spinner";


export default function MainCountdown({
  clearOtpInputHandler,
}: {
  clearOtpInputHandler: () => void;
}) {
  const router = useRouter()

  const [countdownKey, setCountdownKey] = useState(0);

  const [isCountdownCompleted, setIsCountdownCompleted] = useState(false)

  const sendCodeAgain = useSendCodeApi()

  useEffect(() => {
    if (sendCodeAgain.isSuccess) {
      resetCountdown()
    }
  }, [sendCodeAgain.isSuccess])

  const handleSendCodeAgain = async () => {
    sendCodeAgain.mutate({ phoneNumber: router.query?.phoneNumber });
  };

  function resetCountdown() {
    setIsCountdownCompleted(false)
    setCountdownKey(prev => prev + 1)
  }

  const renderer = ({
    minutes,
    seconds,
  }: {
    minutes: number;
    seconds: number;
  }) => {
    if (isCountdownCompleted) {
      clearOtpInputHandler();
      return (
        <div className="flex gap-2 items-center justify-end">
          {sendCodeAgain.isPending && <Spinner size="sm" />}
          <p
            className="font-peyda cursor-pointer"
            onClick={handleSendCodeAgain}
          >
            ارسال مجدد کد
          </p>
        </div>
      );
    } else {
      return (
        <p className="font-peyda flex items-center gap-2 justify-end">
          <span>تا ارسال مجدد کد</span>
          <span>
            {convertToPersianDigit(minutes)}:{convertToPersianDigit(seconds)}
          </span>
          <Watch width={20} height={20} color="#436E8E" />
        </p>
      );
    }
  };

  return (
    <Countdown
      key={countdownKey}
      date={Date.now() + 5000}
      renderer={renderer}
      onComplete={() => setIsCountdownCompleted(true)}
    />
  );
}
