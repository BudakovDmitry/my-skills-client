import { Metadata } from 'next';
import { RegistrationPage } from "@/pagesView/registration";

export const metadata: Metadata = {
  title: 'Реєстрація',
  description: 'Реєстрація',
};

const Registration = () => <RegistrationPage />

export default Registration;