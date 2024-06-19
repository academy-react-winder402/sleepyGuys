interface profileInfoProps {
  fName: string;
  lName: string;
  userAbout: string;
  linkdinProfile: string;
  telegramLink: string;
  receiveMessageEvent: boolean;
  homeAdderess: string;
  nationalCode: string;
  gender: boolean;
  birthDay: Date;
  latitude: string;
  longitude: string;
}

interface profileInfoApiProps {
  FName: string;
  LName: string;
  UserAbout: string;
  LinkdinProfile: string;
  TelegramLink: string;
  ReceiveMessageEvent: boolean;
  HomeAdderess: string;
  NationalCode: string;
  Gender: boolean;
  BirthDay: any;
  Latitude: string;
  Longitude: string;
}
export type { profileInfoProps, profileInfoApiProps };
