// src/components/HomePage.tsx
"use client";

import React, { useState } from 'react';
// import '../styles/globals.css';
import RoleList from '../components/RoleList.component/RoleList';  
import { Role } from '../models/role';

const fetchRoles = async (): Promise<Role[]> => {
  // Simuler la récupération de rôles depuis le backend ou le store
  // Remplacez cette partie par la logique réelle de récupération des données
  return [
    { title: 'Manager', price: 500 },
    { title: 'Developer', price: 400 },
    { title: 'Tech Lead', price: 450 },
  ];
};

const HomePage = () => {
  const [meetingNotes, setMeetingNotes] = useState('');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [emailList, setEmailList] = useState('');

  const handleSendEmail = () => {
    const emails = emailList.split(',').map(email => email.trim());
    console.log('Envoyer le compte rendu à :', emails);
    console.log('Compte rendu :', meetingNotes);
    alert('Compte rendu envoyé aux emails spécifiés.');
  };

  return (
    <div className="page-container">
      <input
        type='text'
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
      <input
        type="text"
        placeholder="Emails (séparés par des virgules)"
        value={emailList}
        onChange={(e) => setEmailList(e.target.value)}
        className="email-input"
      />
      <button onClick={handleSendEmail} className="send-button">
        Envoyer le compte rendu
      </button>

      <RoleList fetchRoles={fetchRoles} />
    </div>
  );
};

export default HomePage;
