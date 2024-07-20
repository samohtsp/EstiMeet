// src/components/RoleInput.component/RoleInput.tsx
"use client";

import React, { useState } from "react";
import { Role } from "../../models/role";
import "./RoleInput.css";

type RoleInputProps = {
  onAddRole: (newRole: Role) => void;
};

const RoleInput: React.FC<RoleInputProps> = ({ onAddRole }) => {
  const [newRoleTitle, setNewRoleTitle] = useState("");
  const [newRolePrice, setNewRolePrice] = useState("");
  const [newRoleIteration, setNewRoleIteration] = useState(1);

  const handleAddRole = () => {
    if (newRoleTitle && newRolePrice && newRoleIteration) {
      const newRole: Role = {
        iteration: newRoleIteration,
        title: newRoleTitle,
        price: parseInt(newRolePrice),
      };
      onAddRole(newRole);
      setNewRoleTitle("");
      setNewRolePrice("");
      setNewRoleIteration(1);
    }
  };

  return (
    <div>
      <input
        className="role-input"
        type="text"
        placeholder="Titre du rôle"
        value={newRoleTitle}
        onChange={(e) => setNewRoleTitle(e.target.value)}
      />

      <input
        className="price-input"
        type="number"
        placeholder="Prix"
        value={newRolePrice}
        onChange={(e) => setNewRolePrice(e.target.value)}
      />
      <button className="add-role-button" onClick={handleAddRole}>
        Ajouter le rôle
      </button>
    </div>
  );
};

export default RoleInput;
