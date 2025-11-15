export const DASHBOARD = '/dashboard';

export const paths = {
  dashboard: {
    root: (locale: string) => `/${locale}/${DASHBOARD}`
  },
  users: {
    root: `${DASHBOARD}/users`
  },
  transactions: {
    root: (locale: string) => `/${locale}/${DASHBOARD}/transactions`
  },
  profile: {
    root: (locale: string) => `/${locale}/${DASHBOARD}/profile`,
    myAccount: {
      root: (locale: string) => `/${locale}/${DASHBOARD}/profile/my-account`,
      personalInformation: (locale: string) =>
        `/${locale}/my-account/personal-information`,
      kyc: (locale: string) => `/${locale}/my-account/kyc`,
      kycUpdate: (locale: string) => `/${locale}/my-account/kyc-update`,
      reports: (locale: string) => `/${locale}/my-account/reports`,
      securityPrivacy: (locale: string) =>
        `/${locale}/my-account/security-privacy`,
      accessKey: (locale: string) => `/${locale}/my-account/access-key`
    }
  }
};
