// src/app/HomePage.tsx
"use client";
import React, { useState, useEffect } from "react";
import RoleList from "../components/RoleList.component/RoleList";
import MeetingCostCalculator from "../components/MeetingCostCalculator.component/MeetingCostCalculator";
import { Role } from "../models/role";

const fetchRoles = async (): Promise<Role[]> => {
  return [
    { title: "Manager", price: 500, iteration: 1 },
    { title: "Developer", price: 400, iteration: 1 },
    { title: "Tech Lead", price: 450, iteration: 1 },
  ];
};

const HomePage = () => {
  const [meetingNotes, setMeetingNotes] = useState("");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [emailList, setEmailList] = useState("");
  const [duration, setDuration] = useState({ hours: 0, minutes: 0 });
  const [roles, setRoles] = useState<Role[]>([]);

  const handleSendEmail = () => {
    const emails = emailList.split(",").map((email) => email.trim());
    console.log("Envoyer l'invitation à :", emails);
    console.log("ordre du jours :", meetingNotes);
    alert("L'invitation envoyé aux emails spécifiés.");
  };

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [hours, minutes] = e.target.value.split(":").map(Number);
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
          value="01:00"
          required
          className="duration-input"
          onChange={handleDurationChange}
        />
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
