// src/components/MeetingCostCalculator.component/MeetingCostCalculator.tsx
import React, { useEffect, useState } from "react";
import { Role } from "../../models/role";
import "./MeetingCostCalculator.css";

type MeetingCostCalculatorProps = {
  roles: Role[];
  duration: { hours: number; minutes: number };
};

const MeetingCostCalculator: React.FC<MeetingCostCalculatorProps> = ({
  roles,
  duration,
}) => {
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const totalMinutes = duration.hours * 60 + duration.minutes;
    const totalHours = totalMinutes / 60;

    const calculatedTotalCost = roles.reduce((sum, role) => {
      const hourlyRate = role.price / 8; // Supposons une journée de travail de 8 heures
      return sum + hourlyRate * totalHours * (role.iteration || 1);
    }, 0);
    console.log("Durée totale en heures : ", totalHours);
    console.log("Coût total calculé : ", calculatedTotalCost);
    console.log("Rôles : ", roles);
    setTotalCost(calculatedTotalCost);
  }, [duration, roles]);

  return (
    <div className="meeting-cost-calculator">
      <h3>Calculate Meeting Cost</h3>
      <div className="total-cost">Total Cost: ${totalCost.toFixed(2)}</div>
    </div>
  );
};

export default MeetingCostCalculator;
