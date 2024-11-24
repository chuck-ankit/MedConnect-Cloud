import React from 'react';

const VideoConsultationPage = () => {
  const startConsultation = () => {
    // Logic to start video call using Chime SDK or WebRTC
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Video Consultation</h2>
        <button
          onClick={startConsultation}
          className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600"
        >
          Start Consultation
        </button>
      </div>
    </div>
  );
};

export default VideoConsultationPage;
