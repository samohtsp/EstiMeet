import React, { useState, useEffect } from "react";
import { Role } from "../../models/role";
import "./RoleElement.css";

type RoleElementProps = {
  role: Role;
  onChangePriceRole: (newRole: Role) => void;
  onChangeIterationRole: (newRole: Role) => void;
  onDeleteRole: () => void;
};

const RoleElement: React.FC<RoleElementProps> = ({
  role,
  onChangePriceRole,
  onChangeIterationRole,
  onDeleteRole,
}) => {
  const [newRolePrice, setNewRolePrice] = useState(role.price);
  const [newRoleIteration, setNewRoleIteration] = useState(role.iteration);

  const handleRolePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedPrice = Number(e.target.value);
    setNewRolePrice(updatedPrice);
    onChangePriceRole({ ...role, price: updatedPrice });
  };

  const handleRoleIterationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const updatedIteration = Number(e.target.value);
    setNewRoleIteration(updatedIteration);
    onChangeIterationRole({ ...role, iteration: updatedIteration });
  };

  return (
    <div className="role-element">
      <input
        type="number"
        min = "1"
        placeholder="Iteration"
        value={newRoleIteration}
        onChange={handleRoleIterationChange}
      />
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
