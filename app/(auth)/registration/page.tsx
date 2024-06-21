import { Metadata } from 'next';
import RegistrationPage from "@/pages/registration/RegistrationPage";

export const metadata: Metadata = {
  title: 'Реєстрація',
  description: 'Реєстрація',
};

const Registration = () => <RegistrationPage />

export default Registration;