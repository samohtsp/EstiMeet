// src/components/RoleList.tsx
import React, { useEffect, useState } from "react";
import { Role } from "../../models/role";
import "./RoleList.css";
import RoleInput from "../RoleInput.component/RoleInput";
import RoleElement from "../RoleElement.component/RoleElement";

type RoleListProps = {
  fetchRoles: () => Promise<Role[]>;
  onRolesChange: (roles: Role[]) => void; // Fonction de rappel pour remonter les rôles
};

const RoleList: React.FC<RoleListProps> = ({ fetchRoles, onRolesChange }) => {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const loadRoles = async () => {
      const fetchedRoles = await fetchRoles();
      setRoles(fetchedRoles);
      onRolesChange(fetchedRoles); // Remonter les rôles lors du chargement initial
    };

    loadRoles();
  }, [fetchRoles, onRolesChange]);

  const handleAddRole = (newRole: Role) => {
    const updatedRoles = [...roles, newRole];
    setRoles(updatedRoles);
    onRolesChange(updatedRoles); // Remonter les rôles après ajout
  };

  const handleRoleChange = (index: number, newRole: Role) => {
    const updatedRoles = [...roles];
    updatedRoles[index] = newRole;
    setRoles(updatedRoles);
    console.log(updatedRoles);
    onRolesChange(updatedRoles); // Remonter les rôles après modification du prix
  };

  const handleDeleteRole = (index: number) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles);
    onRolesChange(updatedRoles); // Remonter les rôles après suppression
  };

  return (
    <div className="roles-list">
      <h3>Roles:</h3>
      {roles.length > 0 ? (
        <ul>
          {roles.map((role, index) => (
            <li key={index}>
              <RoleElement
                role={role}
                onChangePriceRole={(newRole) =>
                  handleRoleChange(index, newRole)
                }
                onChangeIterationRole={(newRole) =>
                  handleRoleChange(index, newRole)
                }
                onDeleteRole={() => handleDeleteRole(index)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h4>Aucun rôle défini. Ajoutez un nouveau rôle :</h4>
        </div>
      )}
      <div>
        <h4>Ajoutez un rôle :</h4>
        <RoleInput onAddRole={handleAddRole} />
      </div>
    </div>
  );
};

export default RoleList;
