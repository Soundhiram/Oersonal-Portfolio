// EmyyDocumentation.js

import React from 'react';
import { Card } from "antd";
import "./style.css"; 


const Emyy = () => {
  return (
    <Card className="card-style">
      <div className="overall-div">
     <header className="overall-header">
      <h1>Emyy Project Documentation</h1>
      </header>

      <section className="overall-section">
        <h2>Project Overview</h2>
        <p>
          <strong>Project Name:</strong> Emyy <br />
          <strong>Type:</strong> Service App <br />
          <strong>Location:</strong> United Kingdom <br />
          <strong>Objective:</strong> Facilitating the connection between workers and employers by providing a platform for finding both work opportunities and workers.
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
          <li>Job Posting and Discovery: Employers can post job opportunities...</li>
          <li>Profile Management: Users can create and manage their profiles...</li>
          <li>Matching Algorithm: The platform employs a matching algorithm...</li>
          <li>Real-time Communication: Emyy includes real-time communication...</li>
        </ul>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          Emyy is a comprehensive service app designed to streamline the process of finding workers and work opportunities in the United Kingdom...
        </p>
      </section>
    </div>
   </Card>
  );
};

export default Emyy;
