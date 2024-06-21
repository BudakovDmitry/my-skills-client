import { Metadata } from 'next';
import AboutPlatformPage from "@/pages/about-platform/AboutPlatformPage";

export const metadata: Metadata = {
    title: 'Про платформу',
    description: 'Про платформу',
};

const AboutPlatform = () => <AboutPlatformPage />

export default AboutPlatform;