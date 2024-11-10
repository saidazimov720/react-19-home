import React from 'react';

const AddressSelector: React.FC = () => {
  return (
    <div className="address-selector">
      <h2>Адрес доставки</h2>
      <input type="text" placeholder="Введите адрес" />
    </div>
  );
};

export default AddressSelector;
