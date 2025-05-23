import HeroSection from "../../../components/HeroSection";
import TableOfContents from "../../../components/TableOfContents";
import Section from "../../../components/Section";
import TechStack from "../../../components/TechStack";
import FeaturesList from "../../../components/FeaturesList";
import CodeBlock from "../../../components/CodeBlock";
import ImageWithCaption from "../../../components/ImageWithCaption";
import SummaryTable from "../../../components/SummaryTable";
import Contributing from "../../../components/Contributing";
import License from "../../../components/License";

export default function DocumentationPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <HeroSection
        title="Baburam Foundation Information System - Next.js Project with DevOps Implementation"
        subtitle="A modern web application built with Next.js, showcasing advanced DevOps practices including CI/CD, secure environment management, and cloud deployment."
        image="/projects/baburam-project-setup/cover.png"
      />

      <TableOfContents />

      <Section id="project-overview" title="Project Overview">
        <p className="mb-4">
          The Baburam Foundation Information System is a modern web application
          built with Next.js, featuring a robust DevOps implementation that
          enables seamless deployment and management of the application
          infrastructure.
        </p>
        <TechStack />
        <FeaturesList />
      </Section>

      <Section id="development-setup" title="Development Setup">
        <h3 className="text-xl font-semibold mb-2">Development Environment</h3>
        <p className="mb-4">
          The project was set up with a focus on developer experience and
          efficient workflows. The development environment includes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Node.js 18+ runtime environment</li>
          <li>npm package manager for dependency management</li>
          <li>Git for version control</li>
          <li>Local environment variables for development</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Local Setup</h3>
        <p className="mb-2">Clone the repository:</p>
        <CodeBlock
          language="bash"
          code={`git clone https://github.com/nishantchy/Internship
cd /path/to/project`}
        />
      </Section>

      <Section id="devops-implementation" title="DevOps Implementation">
        <h3 className="text-xl font-semibold mb-4">
          My Role as DevOps Engineer
        </h3>
        <p className="mb-4">
          As the DevOps engineer for this project, I implemented a complete
          CI/CD pipeline using GitHub Actions and Vercel, focusing on
          automation, security, and reliability. My key responsibilities
          included:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>Setting up automated build and deployment workflows</li>
          <li>Implementing secure environment variable management</li>
          <li>Configuring blue-green deployment strategy</li>
          <li>Setting up monitoring and observability</li>
          <li>Troubleshooting deployment and build issues</li>
        </ul>

        <ImageWithCaption
          src="/projects/baburam-project-setup/devops-process.svg"
          alt="DevOps Process Flow"
          caption="DevOps Process Flow Implemented for the Project"
        />

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">
            CI/CD Pipeline Implementation
          </h4>
          <p className="mb-4">
            I designed and implemented a GitHub Actions workflow that automates
            the entire deployment process. The workflow is triggered on pushes
            to the main branch and handles:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Code checkout from the repository</li>
            <li>Setting up Node.js environment</li>
            <li>Installing dependencies</li>
            <li>Building the application</li>
            <li>Deploying to Vercel</li>
          </ul>

          <p className="mb-4">
            The CI/CD pipeline uses GitHub Secrets to securely handle sensitive
            information like API keys and database credentials, ensuring they're
            never exposed in the codebase.
          </p>

          <ImageWithCaption
            src="/projects/baburam-project-setup/github-actions.png"
            alt="GitHub Actions Workflow"
            caption="Automated CI/CD with GitHub Actions"
          />

          <p className="mb-4">
            The GitHub Actions workflow YAML configuration includes:
          </p>

          <CodeBlock
            language="yaml"
            code={`name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"
      - name: Install dependencies
        run: npm ci
      - name: Build application
        run: npm run build
        env:
          # Environment variables from GitHub Secrets
          # Securely accessed without exposing values
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./
          vercel-args: "--prod"`}
          />
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">
            Environment Management Strategy
          </h4>
          <p className="mb-4">
            I implemented a secure environment variable management strategy that
            separates configuration across different environments:
          </p>

          <ImageWithCaption
            src="/projects/baburam-project-setup/env-management.svg"
            alt="Environment Management"
            caption="Environment Variable Management Across Different Stages"
          />

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Development:</strong> Local .env.local files for
              developers
            </li>
            <li>
              <strong>Staging:</strong> Preview deployments with
              staging-specific variables
            </li>
            <li>
              <strong>Production:</strong> Production environment with secure,
              production-ready variables
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">
            Secret Management Architecture
          </h4>
          <p className="mb-4">
            One of the key challenges was implementing a secure secret
            management system. I designed a workflow that keeps secrets secure
            while making them available during both CI/CD and runtime:
          </p>

          <ImageWithCaption
            src="/projects/baburam-project-setup/secret-management.svg"
            alt="Secret Management Flow"
            caption="Secret Management Flow Between GitHub and Vercel"
          />

          <p className="mb-4">This architecture ensures that:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Secrets are never committed to the repository</li>
            <li>CI/CD processes have access to required secrets</li>
            <li>Runtime environment has access to necessary configuration</li>
            <li>All secrets are encrypted at rest and in transit</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Build Troubleshooting</h4>
          <p className="mb-4">
            During implementation, I resolved several critical issues:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fixed dependency conflicts causing build failures</li>
            <li>Resolved memory issues during build process</li>
            <li>Optimized build performance by implementing caching</li>
            <li>Ensured consistent builds across different environments</li>
          </ul>
        </div>
      </Section>

      <Section id="deployment-process" title="Deployment Process">
        <h3 className="text-xl font-semibold mb-4">
          Vercel Deployment Strategy
        </h3>
        <p className="mb-4">
          I implemented a blue-green deployment strategy using Vercel's platform
          capabilities:
        </p>

        <ImageWithCaption
          src="/projects/baburam-project-setup/vercel-deployment.png"
          alt="Vercel Deployment Flow"
          caption="Blue-Green Deployment Strategy on Vercel"
        />

        <p className="mb-4">The deployment process follows these steps:</p>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">
            <strong>Connect GitHub repository to Vercel</strong> - Set up
            automatic deployments from the GitHub repository
          </li>
          <li className="mb-2">
            <strong>Configure build settings</strong> - Optimize build
            configuration for Next.js
          </li>
          <li className="mb-2">
            <strong>Set up environment variables</strong> - Configure
            environment-specific variables securely
          </li>
          <li className="mb-2">
            <strong>Configure Vercel integration with GitHub Actions</strong> -
            Enable automated deployments through CI/CD
          </li>
        </ol>

        <h3 className="text-xl font-semibold mb-4">Zero-Downtime Deployment</h3>
        <p className="mb-4">
          The blue-green deployment strategy ensures zero-downtime deployments:
        </p>

        <SummaryTable />

        <p className="mb-4">
          This approach ensures that users always see a working version of the
          application, even during deployments.
        </p>
      </Section>

      <Section id="environment-configuration" title="Environment Configuration">
        <h3 className="text-xl font-semibold mb-4">
          Secure Environment Configuration
        </h3>

        <p className="mb-4">
          I implemented a secure environment configuration system that includes:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>
            Separation of development, staging, and production environments
          </li>
          <li>
            Secret management through GitHub Secrets and Vercel Environment
            Variables
          </li>
          <li>
            Environment-specific configuration for APIs, databases, and services
          </li>
          <li>Secure access control to sensitive information</li>
        </ul>

        <p className="mb-4">
          The environment variables are categorized by their purpose:
        </p>

        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>API Keys:</strong> For external service authentication
          </li>
          <li>
            <strong>Database Credentials:</strong> For secure database access
          </li>
          <li>
            <strong>Service Configuration:</strong> For third-party service
            integration
          </li>
          <li>
            <strong>Deployment Tokens:</strong> For CI/CD process authentication
          </li>
        </ul>

        <ImageWithCaption
          src="/projects/baburam-project-setup/env-variables.png"
          alt="Environment Variables Setup"
          caption="Environment Variables Configuration in Vercel"
        />
      </Section>

      <Section
        id="monitoring-and-maintenance"
        title="Monitoring and Maintenance"
      >
        <h3 className="text-xl font-semibold mb-4">
          Observability Implementation
        </h3>
        <p className="mb-4">
          I set up a comprehensive monitoring and observability system:
        </p>

        <ImageWithCaption
          src="/projects/baburam-project-setup/observability.svg"
          alt="Observability Architecture"
          caption="Observability Architecture for the Next.js Application"
        />

        <p className="mb-4">The monitoring system includes:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Vercel Analytics for performance monitoring</li>
          <li>Error tracking for application issues</li>
          <li>Custom metrics for business-specific monitoring</li>
          <li>Unified dashboards for comprehensive visibility</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Maintenance Procedures</h3>
        <p className="mb-4">
          I established maintenance procedures for ongoing operations:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Regular dependency updates to maintain security</li>
          <li>Performance optimization based on analytics</li>
          <li>Backup and recovery procedures</li>
          <li>Scaling strategies for increased traffic</li>
        </ul>
      </Section>

      <Section id="architecture" title="Project Architecture">
        <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
        <p className="mb-4">
          The complete system architecture showcases how all components work
          together:
        </p>

        <ImageWithCaption
          src="/projects/baburam-project-setup/architecture.svg"
          alt="System Architecture"
          caption="Complete System Architecture of the Next.js Application"
        />

        <p className="mb-4">
          As the DevOps engineer, I ensured that the architecture supports:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Scalability for growing user base</li>
          <li>Reliability through redundancy and error handling</li>
          <li>Security at all layers of the application</li>
          <li>Performance optimization for better user experience</li>
          <li>Cost efficiency through appropriate resource utilization</li>
        </ul>
      </Section>

      <Contributing />
      <License />
    </main>
  );
}
