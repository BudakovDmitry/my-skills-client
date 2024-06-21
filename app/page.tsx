import { Metadata } from 'next';
import HomePage from "@/pages/home/HomePage";

export const metadata: Metadata = {
    title: 'Головна',
};


const Home = () => <HomePage />

export default Home;
