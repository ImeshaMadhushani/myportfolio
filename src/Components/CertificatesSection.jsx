import React from 'react';
import CertificateCard from './CertificateCard';

const certificates = [
    {
        title: 'Web Design for Beginners',
        issuer: 'University of Moratuwa',
        issueDate: 'September 2024',
        details: 'Completed a full course on Web design.',
        image: '/assets/web.png',
        certificateLink: './assets/web.pdf',
        verificationLink: 'https://open.uom.lk/verify',
    },
    {
        title: 'JavaScript Essentials 1',
        issuer: 'Cisco Networking Academy',
        issueDate: 'Octomber 2024',
        details: 'Achieved student level credential for completing the JavaScript Essentials 1 course.',
        image: '/assets/js.png',
        certificateLink: './assets/ciscojs.pdf',
        verificationLink: 'https://www.credly.com/badges/5b42b191-77c4-4f7f-8d4e-68fc8c25e5c8/linked_in_profile',
    },
    {
        title: 'Networking Basics',
        issuer: 'Cisco Networking Academy',
        issueDate: 'August 2025',
        details: 'Achieved student level credential for completing the Networking Basics course.',
        image: '/assets/networking-basics.png',
        certificateLink: './assets/NetworkingBasics.pdf',
        verificationLink: 'https://www.credly.com/badges/d1bc286b-cb61-4962-9828-88e1dd27c10a',
    },
    {
        title: 'Introduction to C',
        issuer: 'Sololearn',
        issueDate: 'June 2024',
        //details: 'Completed a specialization focused on HTML, CSS, and responsive web design.',
        image: '/assets/C.jpg',
        certificateLink: './assets/C.pdf',
        verificationLink: 'https://www.sololearn.com/en/certificates/CC-VKIL3RF7',
    },
    {
        title: 'MongoDB Data Modeling Path', 
        issuer: 'MongoDB University',
        issueDate: 'June 2024',
        //details: 'Completed a specialization focused on HTML, CSS, and responsive web design.',
        image: '/assets/mongo.png',
        certificateLink: './assets/mongoDB.pdf',
        verificationLink: 'https://www.sololearn.com/en/certificates/CC-VKIL3RF7',
    },
    {
        title: 'MS-900 Introduction to Microsoft 365: Describe Microsoft 365 apps and services',
        issuer: 'Microsoft Learn',
        issueDate: 'August 2025',
        //details: 'Completed a specialization focused on HTML, CSS, and responsive web design.',
        image: '/assets/ms365.png',
        certificateLink: './assets/ms365.pdf',
        //verificationLink: 'https://www.sololearn.com/en/certificates/CC-VKIL3RF7',
    },
];

const CertificatesSection = () => {
    return (
        <section id="certificates" className="py-12 px-4  from-black via-gray-900 to-black text-gray-white">
            <h2 className="text-3xl font-bold text-center mb-8">Certificates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {certificates.map((certificate, idx) => (
                    <CertificateCard key={idx} certificate={certificate} />
                ))}
            </div>
        </section>
    );
};

export default CertificatesSection;
