import React from 'react';

const CertificateCard = ({ certificate }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            {certificate.image && (
                <img
                    src={certificate.image}
                    alt={`${certificate.title} certificate`}
                    className="rounded-lg w-full h-48 object-cover mb-4"
                />
            )}
            <h3 className="text-xl font-semibold mb-2 text-blue-500">{certificate.title}</h3>
            <p className="text-gray-600 mb-3">{certificate.issuer}</p>
            <p className="text-gray-500 text-sm mb-3">
                Issued on: {certificate.issueDate}
            </p>
            {certificate.details && (
                <p className="text-gray-600 mb-4">{certificate.details}</p>
            )}
            <div className="flex justify-between">
                {certificate.certificateLink && (
                    <a
                        href={certificate.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        View Certificate
                    </a>
                )}
                {certificate.verificationLink && (
                    <a
                        href={certificate.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Verify
                    </a>
                )}
            </div>
        </div>
    );
};

export default CertificateCard;
