import React from 'react';

const MedivedaSection = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute bg-gradient-to-tr from-[#A2D29D] via-[#4E93DF4D] to-[#101010] -top-4 right-0 blur-3xl opacity-60 rounded-full h-48 w-24 lg:w-96"></div>

      <div className="container flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 w-full my-4">
        {/* Responsive heading */}
        <h2 className="text-[#6adb68] text-2xl sm:text-3xl md:text-4xl font-bold text-center py-4 sm:py-6 md:py-8">
          MedicalVeda seeks to address the modern-day challenges faced by the health care industry.
        </h2>

        {/* Responsive paragraph */}
        <p className="text-lg sm:text-xl md:text-2xl text-center leading-relaxed">
          MedicalVeda uses new cutting-edge technologies like Blockchain, Artificial Intelligence, and Machine learning. MedicalVeda is a futuristic way to manage health information and offer a Personalized Medicine Solution: AI analyzes genetic data to identify individual variations and tailor treatment plans based on a patient’s unique genetic makeup. Predictive analytics help forecast disease risks and personalized healthcare interventions.
        </p>
      </div>
    </div>
  );
};

export default MedivedaSection;
