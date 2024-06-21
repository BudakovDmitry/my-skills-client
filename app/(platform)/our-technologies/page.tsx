import { Metadata } from 'next';
import OurTechnologiesPage from "@/pages/our-technologies/OurTechnologiesPage";

export const metadata: Metadata = {
    title: 'Наші технології',
    description: 'Технології з якими працює компанія',
};

const OurTechnologies = () => <OurTechnologiesPage />

export default OurTechnologies;