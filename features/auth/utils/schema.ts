import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Adresse email invalide'),
  password: z
    .string()
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .regex(
      /[A-Z]/,
      'Le mot de passe doit contenir au moins une lettre majuscule'
    )
    .regex(
      /[a-z]/,
      'Le mot de passe doit contenir au moins une lettre minuscule'
    )
    .regex(/[0-9]/, 'Le mot de passe doit contenir au moins un chiffre')
    .regex(
      /[\W_]/,
      'Le mot de passe doit contenir au moins un caractère spécial'
    )
});

export const phoneLoginSchema = z.object({
  countryCode: z.string().min(1, 'Code pays requis'),
  phoneNumber: z.string().min(8, 'Numéro de téléphone invalide')
});

export const accessKeySchema = z.object({
  accessKey: z.string().length(6, "La clé d'accès doit contenir 6 chiffres")
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type PhoneLoginFormData = z.infer<typeof phoneLoginSchema>;
export type AccessKeyFormData = z.infer<typeof accessKeySchema>;

export const defaultValues: LoginFormData = {
  email: '',
  password: ''
};
