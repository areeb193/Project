import React, { createContext, useState, useContext } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    phone: '+1234567890',
    weight: '70',
    height: '175',
    goal: 'Lose Weight',
  });

  const updateUserData = (newData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  const saveProfile = (newData) => {
    updateUserData(newData); // Update context with new profile data
    console.log('Profile saved:', newData); // Log the updated profile data
    alert('Profile saved successfully!');
  };

  return (
    <ProfileContext.Provider value={{ userData, updateUserData, saveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
