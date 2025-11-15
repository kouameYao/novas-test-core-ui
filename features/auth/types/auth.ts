export type LoginCredentials = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  };
};

export type PhoneLoginFormData = {
  countryCode: string;
  phoneNumber: string;
};

export type AccessKeyFormData = {
  accessKey: string;
};

export interface DocumentOptionProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export type DocumentType = 'id-card' | 'passport' | 'driver-license' | 'other';

export type NationalityFormData = {
  documentType: DocumentType;
};

export type DocumentUploadFormData = {
  documentFile: File | null;
};

export type AddressFormData = {
  municipality: string;
  exactAddress: string;
};

export type KycFormData = {
  nationality: NationalityFormData;
  document: DocumentUploadFormData;
  address: AddressFormData;
};

export type AccessCodeFormData = {
  code: string;
};

export type ConfirmCodeFormData = {
  confirmCode: string;
};

export type PasswordFormData = {
  accessCode: AccessCodeFormData;
  confirmCode: ConfirmCodeFormData;
};
