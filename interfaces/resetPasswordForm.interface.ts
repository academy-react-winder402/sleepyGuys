interface resetPasswordForm1Type {
  email: string;
  baseUrl: string | undefined;
}

export type { resetPasswordForm1Type };

interface resetPasswordForm2Type {
  userId: number;
  newPassword: string;
  resetValue: string;
}

export type { resetPasswordForm2Type };
