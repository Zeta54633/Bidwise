import React from 'react';
import './BenefitsSection.css'; // Assuming you're using a separate CSS file for styling

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      icon: "🎥", // Replace this with actual icon/image
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favourites easily and always have something to watch.",
      icon: "⬇️", // Replace this with actual icon/image
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
      icon: "📱", // Replace this with actual icon/image
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
      icon: "👧👦", // Replace this with actual icon/image
    },
  ];

  return (
    <div className="benefits-section">
      {benefits.map((benefit, index) => (
        <div className="benefit-card" key={index}>
          <div className="benefit-icon">{benefit.icon}</div>
          <h3 className="benefit-title">{benefit.title}</h3>
          <p className="benefit-description">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BenefitsSection;
