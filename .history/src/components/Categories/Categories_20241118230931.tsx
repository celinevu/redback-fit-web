import React, { useState } from 'react';
import { FaRunning, FaBiking, FaSwimmer, FaBed, FaDumbbell } from 'react-icons/fa'; // Example icons

// Badge Component with optional graphic icon
const Badge: React.FC<{ name: string; icon?: React.ReactNode }> = ({ name, icon }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      margin: '5px',
      padding: '5px 10px',
      backgroundColor: '#007BFF',
      color: 'white',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: 'bold',
    }}
  >
    {icon && <span style={{ marginRight: '8px' }}>{icon}</span>}
    {name}
  </span>
);

// Define the badge type
interface BadgeType {
  name: string;
  icon?: React.ReactNode;
}

// Define the category type
interface Category {
  name: string;
  description: string;
  link: string;
  badges: BadgeType[];
}

// Categories data
const categories: Category[] = [
  {
    name: 'Running Insights',
    description: `Running insights can improve your performance by tracking stride length, pace, and heart rate.
                  Explore training strategies tailored to your fitness level.`,
    link: '/categories/running',
    badges: [
      { name: 'Pace Master', icon: <FaRunning /> },
      { name: 'Marathon Pro', icon: <FaRunning /> },
      { name: 'Sprint Champion', icon: <FaRunning /> },
      { name: 'Trail Explorer', icon: <FaRunning /> },
      { name: 'Endurance Hero', icon: <FaRunning /> },
    ],
  },
  {
    name: 'Cycling Performance',
    description: `Cycling analytics can optimize your training routines by focusing on cadence, speed, and power output.`,
    link: '/categories/cycling',
    badges: [
      { name: 'Speedster', icon: <FaBiking /> },
      { name: 'Hill Conqueror', icon: <FaBiking /> },
      { name: 'Endurance Rider', icon: <FaBiking /> },
      { name: 'Power Cyclist', icon: <FaBiking /> },
    ],
  },
  {
    name: 'Swimming Analytics',
    description: `Swimming metrics such as stroke rate, lap times, and breathing patterns can help elevate your training.`,
    link: '/categories/swimming',
    badges: [
      { name: 'Stroke Specialist', icon: <FaSwimmer /> },
      { name: 'Lap Leader', icon: <FaSwimmer /> },
      { name: 'Breath Expert', icon: <FaSwimmer /> },
    ],
  },
  {
    name: 'Recovery & Health',
    description: `Recovery insights can help improve sleep quality, manage wellness, and track recovery times for balanced training.`,
    link: '/categories/recovery',
    badges: [
      { name: 'Sleep Tracker', icon: <FaBed /> },
      { name: 'Wellness Guru', icon: <FaBed /> },
      { name: 'Recovery Champ', icon: <FaBed /> },
    ],
  },
  {
    name: 'Custom Training Plans',
    description: `Create and customize training schedules tailored to your sport and fitness goals.`,
    link: '/categories/training-plans',
    badges: [
      { name: 'Strength Builder', icon: <FaDumbbell /> },
      { name: 'Flexibility Master', icon: <FaDumbbell /> },
      { name: 'Cardio Strategist', icon: <FaDumbbell /> },
    ],
  },
];

// Main component
const Categories: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleBadges = (categoryName: string) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <div>
      {/* Top Bar */}
      <div style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', textAlign: 'center' }}>
        <p style={{ margin: 0 }}>
          Welcome to the Categories Page. Click to hear about our exciting features and badges.
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: '20px', color: 'white', textAlign: 'center' }}>
        <h1>Explore Categories</h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        {categories.map((category, index) => (
          <div key={index} style={{ width: '100%', maxWidth: '600px', textAlign: 'center' }}>
            {/* Category Info */}
            <div
              style={{
                border: '1px solid white',
                borderRadius: '10px',
                padding: '15px',
                backgroundColor: '#333',
                color: 'white',
              }}
            >
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <a
                href={category.link}
                style={{
                  color: '#007BFF',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                Learn More
              </a>
            </div>

            {/* Badges Section */}
            <div style={{ margin: '20px 0', textAlign: 'center' }}>
              <h4>{`${category.name} Badges`}</h4>
              {category.badges.slice(0, 3).map((badge, badgeIndex) => (
                <Badge key={badgeIndex} name={badge.name} icon={badge.icon} />
              ))}

              {/* Show More/Show Less */}
              {category.badges.length > 3 && (
                <>
                  {expandedCategory === category.name &&
                    category.badges.slice(3).map((badge, badgeIndex) => (
                      <Badge key={`expanded-${badgeIndex}`} name={badge.name} icon={badge.icon} />
                    ))}
                  <div>
                    <button
                      onClick={() => toggleBadges(category.name)}
                      style={{
                        marginTop: '10px',
                        padding: '5px 15px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      {expandedCategory === category.name ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Other Badges Section */}
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '20px',
            backgroundColor: '#444',
            borderRadius: '10px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h3>Other Badges</h3>
          <p>Explore additional badges for activities outside the main categories.</p>
          <Badge name="General Fitness" icon={<FaDumbbell />} />
          <Badge name="Cross-Training" icon={<FaRunning />} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
