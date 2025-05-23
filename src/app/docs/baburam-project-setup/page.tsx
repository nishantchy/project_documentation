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
          This project demonstrates a modern web application built with Next.js,
          with a strong focus on DevOps practices such as automated CI/CD,
          secure environment management, and cloud deployment using Vercel.
        </p>
        <TechStack />
        <FeaturesList />
      </Section>

      <Section id="development-setup" title="Development Setup">
        <h3 className="text-xl font-semibold mb-2">Prerequisites</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Node.js 18+</li>
          <li>npm (or pnpm/yarn)</li>
          <li>Git</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Local Development</h3>
        <p className="mb-2">1. Clone the repository:</p>
        <CodeBlock
          language="bash"
          code={`git clone [https://github.com/nishantchy/Internship]
          cd /path/to/project`}
        />

        <p className="mb-2">2. Install dependencies:</p>
        <CodeBlock
          language="bash"
          code={`npm install
# or
pnpm install`}
        />

        <p className="mb-2">3. Set up environment variables:</p>
        <CodeBlock
          language="bash"
          code={`cp .env.example .env.local
# Edit .env.local with your configuration`}
        />

        <p className="mb-2">4. Run development server:</p>
        <CodeBlock
          language="bash"
          code={`npm run dev
# or
pnpm dev`}
        />
      </Section>

      <Section id="devops-implementation" title="DevOps Implementation">
        <h3 className="text-xl font-semibold mb-4">
          DevOps Work Done in This Project
        </h3>

        <ImageWithCaption
          src="/projects/baburam-project-setup/devops-process.png"
          alt="DevOps Process Flow"
          caption="Complete DevOps Process Flow from Development to Production"
        />

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">CI/CD Pipeline Setup</h4>
          <p className="mb-2">
            Designed and implemented a GitHub Actions workflow for automated
            build and deployment, ensuring the workflow installs dependencies,
            builds the app, and deploys to Vercel on every push to{" "}
            <code>main</code>.
          </p>
          <ImageWithCaption
            src="/projects/baburam-project-setup/github-actions.png"
            alt="GitHub Actions Workflow"
            caption="Automated CI/CD with GitHub Actions"
          />
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
          # All required environment variables from GitHub Secrets
          AUTH_KEY_SECRET: \${{ secrets.AUTH_KEY_SECRET }}
          CLOUDFLARE_URL: \${{ secrets.CLOUDFLARE_URL }}
          JWT_SECRETE: \${{ secrets.JWT_SECRETE }}
          MONGO: \${{ secrets.MONGO }}
          NEXT_PUBLIC_CLOUDINARY_API_KEY: \${{ secrets.NEXT_PUBLIC_CLOUDINARY_API_KEY }}
          NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: \${{ secrets.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME }}
          NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL: \${{ secrets.NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL }}
          CLOUDINARY_API_SECRET: \${{ secrets.CLOUDINARY_API_SECRET }}
          SMTP_USER: \${{ secrets.SMTP_USER }}
          SMTP_PASS: \${{ secrets.SMTP_PASS }}
          NEXT_PUBLIC_EMAILJS_SERVICE_ID: \${{ secrets.NEXT_PUBLIC_EMAILJS_SERVICE_ID }}
          NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: \${{ secrets.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID }}
          NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: \${{ secrets.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }}
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
          <h4 className="text-lg font-medium mb-2">Environment Management</h4>
          <p className="mb-4">
            Managed sensitive environment variables using GitHub Secrets for
            CI/CD and Vercel dashboard for runtime, ensuring no secrets are
            committed to the repository.
          </p>
          <ImageWithCaption
            src="/projects/baburam-project-setup/env-management.png"
            alt="Environment Management"
            caption="Secure Environment Variable Management"
          />
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Secret Management</h4>
          <p className="mb-4">
            Coordinated secret storage between GitHub Actions and Vercel to
            ensure secure and seamless deployments.
          </p>
          <ImageWithCaption
            src="/projects/baburam-project-setup/secret-management.png"
            alt="Secret Management Flow"
            caption="Secret Management Flow Between GitHub and Vercel"
          />
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Build Troubleshooting</h4>
          <p className="mb-4">
            Diagnosed and resolved build issues related to package managers,
            lockfiles, and native dependencies (e.g., sharp). Fixed stack
            overflow errors by adjusting dependency installation and
            configuration.
          </p>
        </div>
      </Section>

      <Section id="deployment-process" title="Deployment Process">
        <h3 className="text-xl font-semibold mb-4">Vercel Deployment Setup</h3>

        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">
            <strong>Connect GitHub repository to Vercel</strong> - Set up
            automatic deployments from the GitHub repository
          </li>
          <li className="mb-2">
            <strong>Configure build settings</strong> - Default settings work
            well for Next.js projects
          </li>
          <li className="mb-2">
            <strong>Set up environment variables</strong> - Add all necessary
            environment variables in the Vercel dashboard
          </li>
          <li className="mb-2">
            <strong>Add Vercel secrets to GitHub</strong> - For CI/CD
            deployments, add the following secrets:
            <ul className="list-disc pl-6 mt-2">
              <li>
                <code>VERCEL_TOKEN</code>: API token for deployment
              </li>
              <li>
                <code>VERCEL_ORG_ID</code>: Organization identifier
              </li>
              <li>
                <code>VERCEL_PROJECT_ID</code>: Project identifier
              </li>
            </ul>
          </li>
        </ol>

        <ImageWithCaption
          src="/projects/baburam-project-setup/vercel-deployment.png"
          alt="Vercel Deployment Flow"
          caption="Blue-Green Deployment Strategy on Vercel"
        />

        <h3 className="text-xl font-semibold mb-4">
          Deployment Strategy: Blue-Green Deployments
        </h3>
        <p className="mb-4">
          Vercel uses a blue-green (atomic) deployment strategy that ensures
          zero-downtime deployments and safe rollouts:
        </p>

        <SummaryTable />

        <p className="mb-4">
          This ensures zero-downtime deployments and safe rollouts, matching the
          blue-green deployment pattern.
        </p>
      </Section>

      <Section id="environment-configuration" title="Environment Configuration">
        <h3 className="text-xl font-semibold mb-4">
          Required Environment Variables
        </h3>

        <CodeBlock
          language="env"
          code={`AUTH_KEY_SECRET=
CLOUDFLARE_URL=
JWT_SECRETE=
MONGO=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_UPLOAD_URL=
CLOUDINARY_API_SECRET=
SMTP_USER=
SMTP_PASS=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
VERCEL_TOKEN=
VERCEL_ORG_ID=
VERCEL_PROJECT_ID=`}
        />

        <h3 className="text-xl font-semibold mb-4">Setting Up Secrets</h3>
        <div className="mb-4">
          <h4 className="text-lg font-medium mb-2">GitHub Secrets</h4>
          <ol className="list-decimal pl-6">
            <li>Go to repository settings → Secrets and variables → Actions</li>
            <li>Add all required environment variables and Vercel secrets</li>
          </ol>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-medium mb-2">
            Vercel Environment Variables
          </h4>
          <ol className="list-decimal pl-6">
            <li>Go to project settings in Vercel</li>
            <li>
              Add all runtime environment variables for production and preview
            </li>
          </ol>
        </div>

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
        <h3 className="text-xl font-semibold mb-4">Performance Monitoring</h3>
        <p className="mb-4">
          The project utilizes several monitoring tools to ensure optimal
          performance:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Vercel Analytics for real-time performance monitoring</li>
          <li>Lighthouse scores for web vitals tracking</li>
          <li>Core Web Vitals monitoring for user experience metrics</li>
        </ul>

        <ImageWithCaption
          src="/projects/baburam-project-setup/monitoring.png"
          alt="Performance Monitoring"
          caption="Performance Monitoring Dashboard on Vercel"
        />

        <h3 className="text-xl font-semibold mb-4">Error Tracking</h3>
        <p className="mb-4">Error tracking is implemented using:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Vercel Error Logs for production errors</li>
          <li>GitHub Actions logs for CI/CD pipeline issues</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Maintenance Tasks</h3>
        <p className="mb-4">Regular maintenance includes:</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Regular dependency updates</li>
          <li>Security patches</li>
          <li>Performance optimization</li>
          <li>Database maintenance</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">
          Observability & Monitoring
        </h3>
        <p className="mb-4">
          While Vercel is a serverless platform that doesn't natively support
          direct integration with Prometheus or Grafana, the project implements
          observability through:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            Vercel's built-in analytics and logs for performance and error
            tracking
          </li>
          <li>
            Integration with third-party services like Sentry for
            application-level monitoring
          </li>
          <li>
            Custom metrics sent to external monitoring systems via API endpoints
          </li>
        </ul>

        <ImageWithCaption
          src="/projects/baburam-project-setup/observability.png"
          alt="Observability Architecture"
          caption="Observability Architecture for the Next.js Application"
        />
      </Section>

      <Section id="architecture" title="Project Architecture">
        <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
        <p className="mb-4">
          The project follows a modern architecture pattern with Next.js at its
          core:
        </p>

        <ImageWithCaption
          src="/projects/baburam-project-setup/architecture.png"
          alt="System Architecture"
          caption="Complete System Architecture of the Next.js Application"
        />

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Frontend</h4>
          <ul className="list-disc pl-6">
            <li>Next.js for server-side rendering and static generation</li>
            <li>Tailwind CSS for styling</li>
            <li>React components for UI elements</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Backend</h4>
          <ul className="list-disc pl-6">
            <li>Next.js API routes for serverless functions</li>
            <li>MongoDB for database storage</li>
            <li>Authentication using JWT</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium mb-2">Infrastructure</h4>
          <ul className="list-disc pl-6">
            <li>Vercel for hosting and serverless functions</li>
            <li>GitHub for source code management</li>
            <li>GitHub Actions for CI/CD pipeline</li>
            <li>Cloudinary for image storage and optimization</li>
          </ul>
        </div>
      </Section>

      <Contributing />
      <License />
    </main>
  );
}
