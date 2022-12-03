import React from 'react';

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  return (
    <div>
      <img src={avatarUrl || '/noavatar.png'} alt={fullName} />
      <div>
        <span>{fullName}</span>
        <span>{additionalText}</span>
      </div>
    </div>
  );
};