// src/components/RoleInput.component/RoleInput.tsx
import React, { useState } from 'react';
import { Role } from '../../models/role';

type RoleInputProps = {
  fetchRoles: () => Promise<Role[]>;
  onAddRole: (newRole: Role) => void; // Fonction de rappel pour ajouter un rôle
};

const RoleInput: React.FC<RoleInputProps> = ({ fetchRoles, onAddRole }) => {
  const [newRoleTitle, setNewRoleTitle] = useState('');
  const [newRolePrice, setNewRolePrice] = useState('');

  const handleAddRole = () => {
    if (newRoleTitle && newRolePrice) {
      const newRole: Role = { title: newRoleTitle, price: parseInt(newRolePrice) };
      onAddRole(newRole);
      setNewRoleTitle('');
      setNewRolePrice('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Titre du rôle"
        value={newRoleTitle}
        onChange={(e) => setNewRoleTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Prix"
        value={newRolePrice}
        onChange={(e) => setNewRolePrice(e.target.value)}
      />
      <button onClick={handleAddRole}>Ajouter le rôle</button>
    </div>
  );
};

export default RoleInput;
