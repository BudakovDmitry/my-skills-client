import { Metadata } from 'next';
import { LoginPage } from "@/pagesView/login";

export const metadata: Metadata = {
  title: 'Логін',
  description: 'Логін',
};

const Login = () => <LoginPage />

export default Login;