export interface Person {
  id?: string;
  profilePicture?: string;
  documentType?: string;
  documentNumber?: string;
  name: string;
  lastName: string;
  gender?: string;
  birthDate: Date;
  phone?: string;
  email?: string;
  country?: string;
  city?: string;
  address?: string;
}

export interface Contact extends Omit<
  Person,
  | 'profilePicture'
  | 'documentType'
  | 'documentNumber'
  | 'gender'
  | 'birthDate'
  | 'country'
  | 'city'
  | 'address'
> {
  relationship: string;
}
