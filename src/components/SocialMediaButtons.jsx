import React from 'react';

const SocialMediaButtons = () => {
    const sendWhatsAppMessage = () => {
        const phoneNumber = '5511964378731'; 
        const message = ''; 

        const apiLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(apiLink, '_blank');
    };

    const openInstagram = () => {
        const instagramLink = 'https://www.instagram.com/colafo24/';
        window.open(instagramLink, '_blank');
    };

    return (
        <div className="flex flex-col fixed bottom-4 right-4 z-10">
            <div className="bg-green-500 rounded-full w-14 h-14 flex items-center justify-center text-white cursor-pointer shadow-lg mb-4" onClick={sendWhatsAppMessage}>
                <i className="fab fa-whatsapp text-3xl"></i>
            </div>
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-14 h-14 flex items-center justify-center text-white cursor-pointer shadow-lg" onClick={openInstagram}>
                <i className="fab fa-instagram text-3xl"></i>
            </div>
        </div>
    );
};

export default SocialMediaButtons;
