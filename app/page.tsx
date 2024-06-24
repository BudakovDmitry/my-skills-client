import { Metadata } from 'next';
import { HomePage } from "@/pagesView/home";

export const metadata: Metadata = {
    title: 'Головна',
};


const Home = () => <HomePage />

export default Home;
