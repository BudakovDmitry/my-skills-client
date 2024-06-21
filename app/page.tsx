import { Metadata } from 'next';
import HomePage from "@/pages/home/ui/HomePage";

export const metadata: Metadata = {
    title: 'Головна',
};


const Home = () => <HomePage />

export default Home;
