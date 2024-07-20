// src/components/RoleList.tsx
import React, { useEffect, useState } from "react";
import { Role } from "../../models/role";
import "./RoleList.css"; // Importez le fichier CSS associé
import RoleInput from "../RoleInput.component/RoleInput";
import RoleElement from "../RoleElement.component/RoleElement";

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

  const handleRolePriceChange = (index: number, newRole: Role) => {
    const updatedRoles = [...roles];
    updatedRoles[index] = newRole;
    setRoles(updatedRoles);
  };

  const handleDeleteRole = (index: number) => {
    const updatedRoles = roles.filter((_, i) => i !== index);
    setRoles(updatedRoles);
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
                  handleRolePriceChange(index, newRole)
                }
                onDeleteRole={() => handleDeleteRole(index)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h4>Aucun rôle défini. Ajoutez un nouveau rôle :</h4>
          <RoleInput onAddRole={handleAddRole} />
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
