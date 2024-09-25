import React from 'react';
import './BenefitsSection.css'; // Assuming you're using a separate CSS file for styling

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Find the Best Players",
      description: "Analyze past performances and player statistics to discover the most suitable players for your team.",
      icon: "🎥", // Replace this with actual icon/image
    },
    {
      title: "Performance-Based Suggestions",
      description: "Get player recommendations based on runs, wickets, strike rates, economy, and more, tailored to your team's needs.",
      icon: "⬇️", // Replace this with actual icon/image
    },
    {
      title: "Auction-Ready Profiles",
      description: "Detailed player profiles with insights on strengths, weaknesses, and auction potential, helping you make informed decisions.",
      icon: "📱", // Replace this with actual icon/image
    },
    {
      title: "Build a Winning Strategy",
      description: "Create customized lineups and select players that enhance team balance and adaptability in upcoming matches.",
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
