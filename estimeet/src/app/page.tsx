// src/components/HomePage.tsx

"use client";

import React, { useState } from 'react';
import { Role } from '../models/role'; // Assurez-vous que le chemin est correct

const HomePage = () => {
  const [meetingNotes, setMeetingNotes] = useState('');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [emailList, setEmailList] = useState('');

  // Exemple d'utilisation du type Role
  const roles: Role[] = [
    { title: 'Manager', price: 5000 },
    { title: 'Developer', price: 4000 },
  ];

  const handleSendEmail = () => {
    const emails = emailList.split(',').map(email => email.trim());
    // Simuler l'envoi d'email (remplacer cela par une véritable logique d'envoi d'email côté serveur)
    console.log('Envoyer le compte rendu à :', emails);
    console.log('Compte rendu :', meetingNotes);
    alert('Compte rendu envoyé aux emails spécifiés.');
  };

  return (
    <div className="container">
      <input
      type='text' 
        placeholder="Titre de la réunion" 
        value={meetingTitle}
        onChange={(e) => setMeetingTitle(e.target.value)}
        className="title-input"
      />
      <textarea 
        className="resume-container"
        placeholder="Ordre du jours" 
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

      <div className="roles-list">
        <h3>Roles:</h3>
        <ul>
          {roles.map((role, index) => (
            <li key={index}>
              {role.title} - ${role.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
