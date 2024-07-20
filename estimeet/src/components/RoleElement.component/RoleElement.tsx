import React, { useState, useEffect } from "react";
import { Role } from "../../models/role";
import "./RoleElement.css";

type RoleElementProps = {
  role: Role;
  onChangePriceRole: (newRole: Role) => void; // Fonction de rappel pour changer le prix un rôle
  onDeleteRole: () => void;
};

const RoleElement: React.FC<RoleElementProps> = ({
  role,
  onChangePriceRole,
  onDeleteRole,
}) => {
  const [newRolePrice, setNewRolePrice] = useState(role.price.toString());

  const handleRolePriceChange = () => {
    if (newRolePrice) {
      const newRole: Role = {
        title: role.title,
        price: parseInt(newRolePrice),
      };
      onChangePriceRole(newRole);
    }
  };

  return (
    <div className="role-element">
      {role.title} -
      <input
        type="number"
        value={newRolePrice}
        onChange={handleRolePriceChange}
        className="price-input"
      />
      <button onClick={onDeleteRole}>Supprimer</button>
    </div>
  );
};

export default RoleElement;
