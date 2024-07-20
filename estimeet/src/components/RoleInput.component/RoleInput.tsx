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

  const handleAddRole = () => {
    if (newRoleTitle && newRolePrice) {
      const newRole: Role = {
        title: newRoleTitle,
        price: parseInt(newRolePrice),
      };
      onAddRole(newRole);
      setNewRoleTitle("");
      setNewRolePrice("");
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
