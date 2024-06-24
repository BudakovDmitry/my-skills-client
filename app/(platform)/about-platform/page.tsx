import { Metadata } from 'next';
import { AboutPlatformPage } from "@/pagesView/about-platform";

export const metadata: Metadata = {
    title: 'Про платформу',
    description: 'Про платформу',
};

const AboutPlatform = () => <AboutPlatformPage />

export default AboutPlatform;