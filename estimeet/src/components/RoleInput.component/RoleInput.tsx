// src/components/RoleInput.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Role } from '../../models/role';
import './RoleInput.css'; 

type RoleInputProps = {
  fetchRoles: () => Promise<Role[]>;
};

const RoleInput: React.FC<RoleInputProps> = ({ fetchRoles }) => {
  const [role, setRole] = useState<Role[]>([]);
  const [newRoleTitle, setNewRoleTitle] = useState('');
  const [newRolePrice, setNewRolePrice] = useState('');

  useEffect(() => {
    const loadRole = async () => {
      const fetchedRole = await fetchRoles();
      setRole(fetchedRole);
    };

    loadRole();
  }, [fetchRoles]);



  return (
    <div className="roles-input">
        <input
        type="text"
        placeholder="Titre du rôle"
        value={newRoleTitle}
        onChange={(e) => setNewRoleTitle(e.target.value)}
        className="role-input"
        />
        <input
        type="number"
        placeholder="Prix"
        value={newRolePrice}
        onChange={(e) => setNewRolePrice(e.target.value)}
        className="price-input"
        />
        <button  className="add-role-button">
            Ajouter le rôle
          </button>
   </div>
);
};

export default RoleInput;