export interface Transaction {
  id: string;
  merchantId: string;
  merchantName: string;
  number: string;
  service_name: string | null;
  customer_firstname: string;
  customer_lastname: string | null;
  customer_email: string | null;
  customer_phone_number: string;
  customer_address: string | null;
  customer_country: string | null;
  customer_zip_code: string | null;
  receiver: string | null;
  amount: number;
  currency: string;
  operator: string;
  status: 'Approved' | 'Pending' | 'Failed' | 'Cancelled';
  companyApiKey: string;
  description: string;
  pay_id: string;
  owner: string;
  pos: string | null;
  responseCode: string | null;
  tId: string | null;
  terminalId: string | null;
  transactionId: string;
  transaction_type_id: string;
  dateOperation: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  bankAccountId: string;
  reference: string;
  feeSupport: boolean;
  feeAmount: string;
  feePercent: number;
  isBalanced: boolean;
  customFields: string;
  remainingBalance: number;
  transaction_type: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
  };
}

export const transactions: Transaction[] = [
  {
    id: 'fc8d5c81-88f3-45f8-971e-f93c47501451',
    merchantId: 'a8796e61-5fea-4775-8956-5aa4d1eeb6be',
    merchantName: 'ASERNUM',
    number: '+2250506430832',
    service_name: null,
    customer_firstname: 'Sylla Ibrahim',
    customer_lastname: null,
    customer_email: null,
    customer_phone_number: '+2250506430832',
    customer_address: null,
    customer_country: null,
    customer_zip_code: null,
    receiver: null,
    amount: 100,
    currency: 'XOF',
    operator: 'CI_MTN',
    status: 'Approved',
    companyApiKey: 'ZDViZDcxMmEtODMwMC00ZjQzLWJmYTUtNDdiMzE0YjhkNmIw',
    description: 'test sylla',
    pay_id: '9b038253-f5c8-4293-8587-999df3071482',
    owner: 'ASERNUM',
    pos: null,
    responseCode: null,
    tId: null,
    terminalId: null,
    transactionId: 'c791cee2-e1c7-4ad2-b7c6-fc9c322b8603',
    transaction_type_id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
    dateOperation: '2025-10-13T15:29:27.531Z',
    createdAt: '2025-10-13T15:29:27.532Z',
    updatedAt: '2025-10-13T15:29:30.784Z',
    deletedAt: null,
    bankAccountId: '176ea0b9-7415-44f5-a6bd-10d3f8c0c2c4',
    reference: 'pt-20gveqav825ky',
    feeSupport: true,
    feeAmount: '1',
    feePercent: 1,
    isBalanced: true,
    customFields:
      '{"firebaseToken":"eonAILOS206qkxf2Xh18W1:APA91bGAZtanwJJGFVVhFhHUerGpgcdnqnjZ4k-FtjaXU0BbQm7gEkuuuLR1vsPO3o2F8JT3sBVmlNfxucr8ohW0fA3FKBvdEGoVwvokAUveYUJNDYkN44E"}',
    remainingBalance: 468970,
    transaction_type: {
      id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
      name: 'PAYOUT',
      createdAt: '2023-10-19T11:32:53.863Z',
      updatedAt: '2023-10-19T11:32:53.863Z',
      deletedAt: null
    }
  },
  {
    id: '53cc1c9c-ab70-472d-9cee-650b9f6e44ee',
    merchantId: 'a8796e61-5fea-4775-8956-5aa4d1eeb6be',
    merchantName: 'ASERNUM',
    number: '+2250544634210',
    service_name: null,
    customer_firstname: 'Serge Diam',
    customer_lastname: null,
    customer_email: null,
    customer_phone_number: '+2250544634210',
    customer_address: null,
    customer_country: null,
    customer_zip_code: null,
    receiver: null,
    amount: 100,
    currency: 'XOF',
    operator: 'CI_WAVE',
    status: 'Approved',
    companyApiKey: 'ZDViZDcxMmEtODMwMC00ZjQzLWJmYTUtNDdiMzE0YjhkNmIw',
    description: "Envoi d'argent",
    pay_id: '93a66f5b-a435-4c6e-b6a6-6af1afb7d5ea',
    owner: 'ASERNUM',
    pos: null,
    responseCode: null,
    tId: null,
    terminalId: null,
    transactionId: '36345de0-d9a2-446e-8027-975dc26ceb05',
    transaction_type_id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
    dateOperation: '2025-10-13T15:15:22.023Z',
    createdAt: '2025-10-13T15:15:22.024Z',
    updatedAt: '2025-10-13T15:15:25.710Z',
    deletedAt: null,
    bankAccountId: '176ea0b9-7415-44f5-a6bd-10d3f8c0c2c4',
    reference: 'pt-20gv88x882yrc',
    feeSupport: true,
    feeAmount: '1',
    feePercent: 1,
    isBalanced: true,
    customFields:
      '{"firebaseToken":"cY2na-hL_EAAjsfPokKVkj:APA91bH3srndwCAhJE09IaKtTfgSli68Cykwy3Qy3ORPf1YDNmJvO0NyXCXO5sBc7JC0sBgnoVIu8MYursgOyU2vlk5DNu-GKH-dXqoY-8v1bKYphDEmc9g"}',
    remainingBalance: 469071,
    transaction_type: {
      id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
      name: 'PAYOUT',
      createdAt: '2023-10-19T11:32:53.863Z',
      updatedAt: '2023-10-19T11:32:53.863Z',
      deletedAt: null
    }
  },
  {
    id: 'be0517c0-f817-4150-ac0a-9eb9416adebc',
    merchantId: 'a8796e61-5fea-4775-8956-5aa4d1eeb6be',
    merchantName: 'ASERNUM',
    number: '+2250708335787',
    service_name: null,
    customer_firstname: 'KOUAME J',
    customer_lastname: null,
    customer_email: null,
    customer_phone_number: '+2250708335787',
    customer_address: null,
    customer_country: null,
    customer_zip_code: null,
    receiver: null,
    amount: 200,
    currency: 'XOF',
    operator: 'CI_ORANGE',
    status: 'Approved',
    companyApiKey: 'ZDViZDcxMmEtODMwMC00ZjQzLWJmYTUtNDdiMzE0YjhkNmIw',
    description: 'Test lottie en stg',
    pay_id: '867ca573-86af-409a-b15f-279f61880ff9',
    owner: 'ASERNUM',
    pos: null,
    responseCode: null,
    tId: null,
    terminalId: null,
    transactionId: '90b986f0-dd37-4496-afb8-a369d0a0ab0e',
    transaction_type_id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
    dateOperation: '2025-10-08T17:03:02.783Z',
    createdAt: '2025-10-08T17:03:02.784Z',
    updatedAt: '2025-10-08T17:03:05.834Z',
    deletedAt: null,
    bankAccountId: '176ea0b9-7415-44f5-a6bd-10d3f8c0c2c4',
    reference: 'CI251008.1703.C69768',
    feeSupport: true,
    feeAmount: '2',
    feePercent: 1,
    isBalanced: true,
    customFields:
      '{"firebaseToken":"cY2na-hL_EAAjsfPokKVkj:APA91bH3srndwCAhJE09IaKtTfgSli68Cykwy3Qy3ORPf1YDNmJvO0NyXCXO5sBc7JC0sBgnoVIu8MYursgOyU2vlk5DNu-GKH-dXqoY-8v1bKYphDEmc9g"}',
    remainingBalance: 469172,
    transaction_type: {
      id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
      name: 'PAYOUT',
      createdAt: '2023-10-19T11:32:53.863Z',
      updatedAt: '2023-10-19T11:32:53.863Z',
      deletedAt: null
    }
  },
  {
    id: '196c2384-4149-4d67-bc6d-b12f15773eb2',
    merchantId: 'a8796e61-5fea-4775-8956-5aa4d1eeb6be',
    merchantName: 'ASERNUM',
    number: '+2250787577657',
    service_name: null,
    customer_firstname: 'Owen Paynah ',
    customer_lastname: null,
    customer_email: null,
    customer_phone_number: '+2250787577657',
    customer_address: null,
    customer_country: null,
    customer_zip_code: null,
    receiver: null,
    amount: 100,
    currency: 'XOF',
    operator: 'CI_MOOV',
    status: 'Approved',
    companyApiKey: 'ZDViZDcxMmEtODMwMC00ZjQzLWJmYTUtNDdiMzE0YjhkNmIw',
    description: 'Test du lottie',
    pay_id: '940f265c-b5de-423b-89b8-07067bcc12df',
    owner: 'ASERNUM',
    pos: null,
    responseCode: null,
    tId: null,
    terminalId: null,
    transactionId: 'b160ad52-e1cb-430a-9ca4-f5df85454bcc',
    transaction_type_id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
    dateOperation: '2025-10-08T12:59:20.295Z',
    createdAt: '2025-10-08T12:59:20.296Z',
    updatedAt: '2025-10-08T12:59:25.749Z',
    deletedAt: null,
    bankAccountId: '176ea0b9-7415-44f5-a6bd-10d3f8c0c2c4',
    reference: 'pt-20dja3jeg2tag',
    feeSupport: true,
    feeAmount: '1',
    feePercent: 1,
    isBalanced: true,
    customFields:
      '{"firebaseToken":"cY2na-hL_EAAjsfPokKVkj:APA91bH3srndwCAhJE09IaKtTfgSli68Cykwy3Qy3ORPf1YDNmJvO0NyXCXO5sBc7JC0sBgnoVIu8MYursgOyU2vlk5DNu-GKH-dXqoY-8v1bKYphDEmc9g"}',
    remainingBalance: 469374,
    transaction_type: {
      id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
      name: 'PAYIN',
      createdAt: '2023-10-19T11:32:53.863Z',
      updatedAt: '2023-10-19T11:32:53.863Z',
      deletedAt: null
    }
  },
  {
    id: '40f92e9e-639d-4bd4-a1a2-77b605b8e9d1',
    merchantId: 'a8796e61-5fea-4775-8956-5aa4d1eeb6be',
    merchantName: 'ASERNUM',
    number: '+2250708335787',
    service_name: null,
    customer_firstname: 'Yao KOUAMÃ‰',
    customer_lastname: null,
    customer_email: null,
    customer_phone_number: '+2250708335787',
    customer_address: null,
    customer_country: null,
    customer_zip_code: null,
    receiver: null,
    amount: 100,
    currency: 'XOF',
    operator: 'CI_WAVE',
    status: 'Approved',
    companyApiKey: 'ZDViZDcxMmEtODMwMC00ZjQzLWJmYTUtNDdiMzE0YjhkNmIw',
    description: 'Test du nouveau lottie de succÃ¨s',
    pay_id: '5acbbbfb-4cab-4871-8a03-02694fab35bf',
    owner: 'ASERNUM',
    pos: null,
    responseCode: null,
    tId: null,
    terminalId: null,
    transactionId: 'c71dc6f6-71c9-4c7d-9641-121be6d7806c',
    transaction_type_id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
    dateOperation: '2025-10-08T12:58:17.488Z',
    createdAt: '2025-10-08T12:58:17.490Z',
    updatedAt: '2025-10-08T12:58:20.538Z',
    deletedAt: null,
    bankAccountId: '176ea0b9-7415-44f5-a6bd-10d3f8c0c2c4',
    reference: 'pt-20dj9m7jr2sxg',
    feeSupport: true,
    feeAmount: '1',
    feePercent: 1,
    isBalanced: true,
    customFields:
      '{"firebaseToken":"cY2na-hL_EAAjsfPokKVkj:APA91bH3srndwCAhJE09IaKtTfgSli68Cykwy3Qy3ORPf1YDNmJvO0NyXCXO5sBc7JC0sBgnoVIu8MYursgOyU2vlk5DNu-GKH-dXqoY-8v1bKYphDEmc9g"}',
    remainingBalance: 469475,
    transaction_type: {
      id: '9268b8ab-61ea-4dcc-9821-d3df01cd24ba',
      name: 'PAYOUT',
      createdAt: '2023-10-19T11:32:53.863Z',
      updatedAt: '2023-10-19T11:32:53.863Z',
      deletedAt: null
    }
  }
];
