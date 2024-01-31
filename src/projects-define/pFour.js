// P_FourDocumentation.js

import React from 'react';
import { Card } from "antd";
import "./style.css"; 

const P_Four = () => {
  return (
    <Card className="card-style">
      <div className="overall-div">
        <header className="overall-header">
          <h1>P_Four Project Documentation</h1>
        </header>

        <section className="overall-section">
          <h2>Project Overview</h2>
          <p>
            <strong>Project Name:</strong> P_Four <br />
            <strong>Type:</strong> Construction Project <br />
            <strong>Location:</strong> Singapore <br />
            <strong>Objective:</strong> Managing employee information, stock inventory, and project profiles for a construction company.
          </p>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <ul>
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
            <li>Employee Management: The system allows for the management of employee information...</li>
            <li>Stock Management: Inventory management functionality for tracking stock...</li>
            <li>Project Profiles: Creation and management of project profiles...</li>
          </ul>
        </section>

        <section>
          <h2>Conclusion</h2>
          <p>
            P_Four is a construction project management application tailored for the needs of a Singapore-based construction company...
          </p>
        </section>
      </div>
    </Card>
  );
};

export default P_Four;
