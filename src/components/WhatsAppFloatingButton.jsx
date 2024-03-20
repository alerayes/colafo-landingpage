

const WhatsAppFloatingButton = () => {
    const sendWhatsAppMessage = () => {
        const phoneNumber = '5511964378731'; 
        const message = ''; 

        const apiLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(apiLink, '_blank');
    };

    return (
        <div class="fixed bottom-4 right-4 bg-green-500 rounded-full w-14 h-14 flex items-center justify-center text-white cursor-pointer shadow-lg z-10" onClick={sendWhatsAppMessage}>
            <i class="fab fa-whatsapp text-3xl"></i>
        </div>
    );
};

export default WhatsAppFloatingButton;