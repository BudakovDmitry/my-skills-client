import { Metadata } from 'next';
import LoginPage from "@/pages/login/ui/LoginPage";

export const metadata: Metadata = {
  title: 'Логін',
  description: 'Логін',
};

const Login = () => <LoginPage />

export default Login;