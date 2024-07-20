// src/components/RoleList.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Role } from '../../models/role';
import './RoleList.css'; // Importez le fichier CSS associé
import RoleInput from '../RoleInput.component/RoleInput';

type RoleListProps = {
  fetchRoles: () => Promise<Role[]>; // Fonction pour récupérer les rôles depuis le backend ou le store
};

const RoleList: React.FC<RoleListProps> = ({ fetchRoles }) => {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const loadRoles = async () => {
      const fetchedRoles = await fetchRoles();
      setRoles(fetchedRoles);
    };

    loadRoles();
  }, [fetchRoles]);

  const handleAddRole = (newRole: Role) => {
    setRoles([...roles, newRole]);
  };

  const handleRolePriceChange = (index: number, newPrice: number) => {
    const updatedRoles = [...roles];
    updatedRoles[index].price = newPrice;
    setRoles(updatedRoles);
  };

  return (
    <div className="roles-list">
      <h3>Roles:</h3>
      {roles.length > 0 ? (
        <>
          <ul>
            {roles.map((role, index) => (
              <li key={index}>
                {role.title} - 
                <input
                  type="number"
                  value={role.price}
                  onChange={(e) => handleRolePriceChange(index, parseInt(e.target.value))}
                  className="price-input"
                />
              </li>
            ))}
          </ul>
          <div>
            <h4>Ajoutez un rôle :</h4>
            <RoleInput fetchRoles={fetchRoles} onAddRole={handleAddRole} />
          </div>
        </>
      ) : (
        <div>
          <h4>Aucun rôle défini. Ajoutez un nouveau rôle :</h4>
          <RoleInput fetchRoles={fetchRoles} onAddRole={handleAddRole} />
        </div>
      )}
    </div>
  );
};

export default RoleList;
