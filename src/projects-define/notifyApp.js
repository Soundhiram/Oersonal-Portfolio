
import React from "react";
import "./style.css"; 
import { Card } from "antd";

const NotifyApp = () => {
  return (
    <Card className="card-style">
      <div className="overall-div">
      <header className="overall-header">
        <h1>Notification App Documentation</h1>
      </header>

      <section className="overall-section">
        <h2>Project Overview</h2>

        <h3 className="overall-h3" >Frontend (React.tsx, Ant Design)</h3>
        <ul className="overall-ul">
          <li className="overall-li">
            <h4>React.tsx Components:</h4>
            <ul className="overall-ul">
              <li className="overall-li">
                Notification Component: Display notifications with different
                providers.
              </li>
              <li className="overall-li">NotificationList Component: Show a list of notifications.</li>
              <li className="overall-li">Dashboard Component: Overview of notification statistics.</li>
            </ul>
          </li>
          <li className="overall-li">
            Ant Design Integration:
            <ul className="overall-ul">
              <li className="overall-li">
                Use Ant Design components for a consistent and visually
                appealing UI.
              </li>
              <li className="overall-li">Utilize Ant Design Grid system for responsive layouts.</li>
            </ul>
          </li>
        </ul>

        <h3 className="overall-h3">Backend (NestJS, MongoDB, Prisma, GraphQL, PubSub)</h3>
        <h4 className="overall-h4">NestJS Server:</h4>
        <ul className="overall-ul">
          <li className="overall-li">Handles GraphQL queries, mutations, and subscriptions.</li>
          <li className="overall-li">
            Implements GraphQL resolvers for interacting with the database and
            PubSub.
          </li>
          <h4 className="overall-h4">Database Setup (MongoDB, Prisma):</h4>

          <li className="overall-li">MongoDB used for storing user data and notifications.</li>
          <li className="overall-li">
            Prisma for defining the database schema and handling migrations.
          </li>
          <h4 className="overall-h4">GraphQL Schema:</h4>
          <li className="overall-li">Define GraphQL types for users, notifications, and providers.</li>
          <li className="overall-li">Implement queries and mutations for CRUD operations.</li>
          <li className="overall-li">Set up subscriptions for real-time updates.</li>
          <h4 className="overall-h4">PubSub Integration:</h4>
          <li className="overall-li">Utilize PubSub for handling real-time communication.</li>
          <li className="overall-li">
            Implement PubSub events for notifying clients about new messages.
          </li>
        </ul>

        <h3 className="overall-h3">Integration with Notification Providers</h3>
        <ul className="overall-ul">
          <h4 className="overall-h4">NOD_EMAILER:</h4>
          <li className="overall-li">Integrate NOD_EMAILER for sending email notifications.</li>
          <h4 className="overall-h4">SEND_IN_BLUE:</h4>
          <li className="overall-li">Set up integration with SEND_IN_BLUE for email notifications.</li>
          <h4 className="overall-h4">MAIL_JET:</h4>
          <li className="overall-li">
            Implement MAIL_JET integration for sending transactional emails.
          </li>
          <h4 className="overall-h4">META:</h4>
          <li className="overall-li">Configure META for additional email notification options.</li>
          <h4 className="overall-h4">TWILIO:</h4>
          <li className="overall-li">Integrate TWILIO for sending SMS notifications.</li>
          <h4 className="overall-h4">INFOBib:</h4>
          <li className="overall-li">Set up INFOBib integration for custom notification channels.</li>
          <h4 className="overall-h4">TEXT_LOCAL:</h4>
          <li className="overall-li">Implement TEXT_LOCAL for sending SMS notifications.</li>
          <h4 className="overall-h4">TELEGRAM_BOT:</h4>
          <li className="overall-li">Configure TELEGRAM_BOT for sending notifications to Telegram.</li>
          <h4 className="overall-h4">SLACK_BOT:</h4>
          <li className="overall-li">
            Integrate SLACK_BOT for sending notifications to Slack channels.
          </li>
        </ul>

        <h3 className="overall-h3">Authentication and Security</h3>
        <ul className="overall-ul">
          <h4 className="overall-h4">Firebase Authentication:</h4>
          <li className="overall-li">
            Implement Firebase authentication for user registration and login.
          </li>
          <h4 className="overall-h4">Authorization:</h4>
          <li className="overall-li">Set up roles and permissions for accessing certain features.</li>
        </ul>

        <h3 className="overall-h3">Development Setup</h3>
        <ul className="overall-ul">
          <h4 className="overall-h4">Install Dependencies:</h4>
          <li className="overall-li">
            Provide clear instructions for installing project dependencies.
          </li>
          <h4 className="overall-h4">Configuration:</h4>
          <li className="overall-li">
            Document how to configure API keys, environment variables, and other
            settings.
          </li>
          <h4 className="overall-h4">Run the Application:</h4>
          <li className="overall-li">
            Explain how to start the frontend and backend servers for local
            development.
          </li>
        </ul>

        <h3 className="overall-h3">Conclusion</h3>
        <ul className="overall-ul">
          <li className="overall-li">Encourage contributors.</li>
          <li className="overall-li">Provide contact information for support.</li>
          <li className="overall-li">Express openness to community involvement.</li>
        </ul>
      </section>

      <footer>
        <p>
          Encourage contributors, provide contact information for support, and
          express openness to community involvement.
        </p>
      </footer>
    </div>

    </Card>
  );
};

export default NotifyApp;
