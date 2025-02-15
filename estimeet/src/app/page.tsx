// src/app/HomePage.tsx

"use client";

import React, { useState } from "react";

import RoleList from "../components/RoleList.component/RoleList";
import MeetingCostCalculator from "../components/MeetingCostCalculator.component/MeetingCostCalculator";
import { Role } from "../models/role";

const fetchRoles = async (): Promise<Role[]> => [
  { title: "Manager", price: 500, iteration: 1 },
  { title: "Developer", price: 400, iteration: 1 },
  { title: "Tech Lead", price: 450, iteration: 1 },
];

const HomePage = () => {
  const [meetingNotes, setMeetingNotes] = useState(" toto titi tata");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [emailList, setEmailList] = useState("");
  const [duration, setDuration] = useState({ hours: 1, minutes: 0 }); // Valeur par défaut initialisée
  const [roles, setRoles] = useState<Role[]>([]);
  const [durationError, setDurationError] = useState<string | null>(null); // Pour gérer les erreurs de durée

  const handleSendEmail = () => {
    const emails = emailList.split(",").map((email) => email.trim());
    console.log("Envoyer l'invitation à :", emails);
    console.log("Ordre du jour :", meetingNotes);
    alert("L'invitation envoyée aux emails spécifiés.");
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(":").map(Number);
    if (isNaN(hours) || isNaN(minutes)) {
      setDurationError("Veuillez entrer une durée valide.");
      return;
    }
    setDurationError(null); // Réinitialiser l'erreur
    setDuration({ hours, minutes });
  };

  return (
    <div className="page-container">
      <input
        type="text"
        placeholder="Titre de la réunion"
        value={meetingTitle}
        onChange={(e) => setMeetingTitle(e.target.value)}
        className="title-input"
      />
      <textarea
        className="resume-container"
        placeholder="Ordre du jour"
        value={meetingNotes}
        onChange={(e) => setMeetingNotes(e.target.value)}
      />
      <div>
        <span>Durée </span>
        <input
          type="time"
          value={`${String(duration.hours).padStart(2, "0")}:${String(
            duration.minutes
          ).padStart(2, "0")}`}
          className="duration-input"
          onChange={handleDurationChange}
        />
        {durationError && <div className="error-message">{durationError}</div>}
      </div>

      <input
        type="text"
        placeholder="Emails (séparés par des virgules)"
        value={emailList}
        onChange={(e) => setEmailList(e.target.value)}
        className="email-input"
      />
      <button onClick={handleSendEmail} className="send-button">
        Envoyer l&apos;invitation
      </button>

      <RoleList fetchRoles={fetchRoles} onRolesChange={setRoles} />
      <MeetingCostCalculator roles={roles} duration={duration} />
    </div>
  );
};

export default HomePage;
