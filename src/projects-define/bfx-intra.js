// BFXIntraDocumentation.js

import React from 'react';
import { Card } from "antd";
import "./style.css"; 

const BFXIntra = () => {
  return (
    <Card className="card-style">
      <div className="overall-div">
        <header className="overall-header">
          <h1>BFX INTRA Project Documentation</h1>
        </header>

        <section className="overall-section">
          <h2>Project Overview</h2>
          <p>
            <strong>Project Name:</strong> BFX INTRA <br />
            <strong>Type:</strong> Employee Management App <br />
            <strong>Location:</strong> Global <br />
            <strong>Objective:</strong> Simplifying employee management by providing a centralized platform for employers to manage their workforce efficiently.
          </p>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <ul >
            <li>React.tsx: A JavaScript library for building user interfaces...</li>
            <li>NestJs: A progressive Node.js framework for building efficient...</li>
            <li>GraphQL: A query language and runtime for APIs...</li>
            <li>Prisma: A modern database toolkit that simplifies database access...</li>
            <li>Typescript: A superset of JavaScript that adds static typing...</li>
            <li>Nx Workspace: A set of extensible dev tools for monorepos...</li>
            <li>MongoDB: A NoSQL database that provides high performance...</li>
          </ul>
        </section>

        <section>
          <h2>Project Structure</h2>
          <ul>
            <li>Frontend (React.tsx): The client-side application responsible...</li>
            <li>Backend (NestJs): The server-side application that handles...</li>
            <li>Database (MongoDB with Prisma): MongoDB is used as the primary...</li>
            <li>API Layer (GraphQL): The GraphQL layer serves as the interface...</li>
          </ul>
        </section>

        <section>
          <h2>Functionality</h2>
          <ul>
            <li>User Registration and Authentication: Users can register...</li>
            <li>Employee Profile Management: Employers can create and manage employee profiles...</li>
            <li>Task Assignment and Tracking: Employers can assign tasks to employees...</li>
            <li>Attendance Tracking: The platform includes features for tracking employee attendance...</li>
            <li>Communication Hub: BFX INTRA includes a communication hub for real-time employee interaction...</li>
          </ul>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>
            BFX INTRA is a powerful employee management app designed to streamline workforce management processes globally...
          </p>
        </section>
      </div>
    </Card>
  );
};

export default BFXIntra;
