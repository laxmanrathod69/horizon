<div align="center">
  <br />
    <a href="https://horizon-banking-sigma.vercel.app/" target="_blank">
      <img src="https://github.com/laxmanrathod69/horizon/blob/main/public/horizon_thumbnail.png" alt="Project Banner">
    </a>
  <br />
  <div>
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="nextdotjs" />
    <img src="https://shields.io/badge/react-0F172A?logo=react&style=for-the-badge" alt="reactdotjs" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
    <img src="https://img.shields.io/badge/Appwrite-F02E65?style=for-the-badge&logo=Appwrite&logoColor=white" alt="appwrite" />
  </div>
  <h3 align="center">Horizon - A Fintech Bank Application</h3>

   <div align="center">
        Horizon is a modern, secure, and user-friendly financial management application built with Next.js, leveraging cutting-edge technologies to provide a seamless banking experience.
    </div>
</div>

## 📋 Table of Contents

1. 🍁 [Introduction](#-introduction)
2. ⚙️ [Tech Stack](#️-tech-stack)
3. 🕸️ [Features](#️-features)
4. 🤸 [Quick Start](#-getting-started)
5. 📂 [Project Structure](#-project-structure)
6. 🔭 [Deployment](#-deployment)
7. ⚠️ [Error Monitoring](#️-error-monitoring)
8. 🔗 [Assets](#-assets)
9. 🤝 [Contributing](#-contributing)
10. 📄 [License](#-license)

## 🍁 Introduction

Horizon is a online banking application built with Next.js, React, TaildwindCSS, Appwrite, Plaid & Dwolla that provides users with a secure and convenient way to manage their finances on the go. Key features include account management, bill pay, money transfers, budgeting tools and more. The app is designed to be fast, responsive and accessible across all devices.
The goal of Horizon is to simplify personal finance management with an intuitive interface and seamless user experience. Modern banking functionality is made accessible through a minimal yet powerful feature set. Data security and privacy are top priorities, with credentials and transactions fully encrypted on the backend.

## ⚙️ Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Appwrite (Backend as a Service)
- React Hook Form (Form Management)
- Zod (Input Validation)
- Chart.js (Graphs and Charts)
- ShadCN (Components library)
- Plaid API (Financial data aggregation)
- Dwolla API (Payment processing)
- Sentry (Error tracking and performance monitoring)

## 🕸️ Features

- User authentication and account management
- Bank account integration using Plaid
- Real-time transaction tracking and categorization
- Fund transfers between linked accounts
- Detailed financial insights and analytics
- Secure payment processing with Dwolla integration
- Responsive design for desktop and mobile devices

## 🤸 Getting Started

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/) - for version control
- [Node.js](https://nodejs.org/en/) - for running JavaScript on the server
- [npm](https://www.npmjs.com/) - Node Package Manager

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/horizon.git
```

2. **Install dependencies:**

```bash
npm install

```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory and add the necessary environment variables (refer to `.env.example` for required variables).

```bash
#NEXT
NEXT_PUBLIC_SITE_URL=http://localhost:300

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/), [Plaid](https://plaid.com/) and [Dwolla](https://dwolla.com/)

4. **Run the development server:**

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📂 Project Structure

- `app/`: Next.js app router and page components
- `components/`: Reusable React components
- `lib/`: Utility functions and API clients
- `constants/`: Application-wide constants
- `public/`: Static assets
- `type/`: TypeScript types

## 🔭 Deployment

The app is configured for easy deployment on `Vercel`. Connect your `GitHub repository` to Vercel for automatic deployments on each push to the main branch.

## ⚠️ Error Monitoring

`Sentry` is integrated for error tracking and performance monitoring. Configure your Sentry DSN in the `sentry.*.config.ts` files.

## 🔗 Assets

Static assets like images, fonts etc. are stored in the `public` directory and referenced using the `/` path prefix.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

To contribute:

Fork the repository </br>
Create your feature branch (`git checkout -b feature/your-feature`) </br>
Commit your changes (`git commit -m 'feat: add your feature'`) </br>
Push to the branch (`git push origin feature/your-feature`) </br>
Open a pull request

## 📄 License

This project is licensed under the [MIT License](LICENSE).
