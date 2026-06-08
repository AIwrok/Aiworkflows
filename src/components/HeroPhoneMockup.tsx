'use client';

import PhoneMockup from './PhoneMockup';
import { heroPhoneScreens } from '@/data/heroPhoneScreens';

const HeroPhoneMockup: React.FC = () => (
    <PhoneMockup
        screens={heroPhoneScreens}
        autoRotate
        showIndicators
        className="mt-12 md:mt-16"
    />
);

export default HeroPhoneMockup;
