import { Metadata } from 'next';
import { RegistrationPage } from "@/pages/registration";

export const metadata: Metadata = {
  title: 'Реєстрація',
  description: 'Реєстрація',
};

const Registration = () => <RegistrationPage />

export default Registration;