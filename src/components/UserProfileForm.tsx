import React, { useState } from 'react';

const UserInfoForm: React.FC = () => {
  const [name, setName] = useState('Илья');
  const [phone, setPhone] = useState('+7 999 999-99-99');

  return (
    <div className="user-info-form">
      <h2>Личные данные</h2>
      <label>Имя</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Номер телефона</label>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
    </div>
  );
};

export default UserInfoForm;
