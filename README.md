# PathWise

A modern money management application built with Next.js, designed to help you manage all your financial needs in one place.

## Features

- 💰 **Transaction Management** - Track and manage your transactions
- 📊 **Dashboard** - View your financial overview at a glance
- 👤 **Account Management** - Manage multiple accounts
- 🔐 **Secure Authentication** - Built-in authentication with Clerk
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🛡️ **Application Security with Arcjet** – Implements bot detection, rate limiting, and request shielding to prevent abuse and protect APIs.
- ⏳ **Background Jobs with Inngest (CRON)** – Handles budget notifications, recurring transaction creation, and monthly report generation with financial insights.
- 🤖 **Snap or upload a receipt** - Let AI automatically log the transaction for you.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Tailwind CSS
- **Authentication**: [Clerk](https://clerk.com/)
- **Database**: PostgreSQL with [Prisma](https://www.prisma.io/)
- **Font**: Geist (Google Fonts)

## Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL database
- Clerk account (for authentication)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Wolviner/PathWise.git
cd moneyx4
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Database

```bash
npx prisma generate
npx prisma migrate dev
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── middleware.ts     # Clerk authentication middleware
└── ...
public/              # Static assets and favicon
prisma/              # Database schema
```

## Protected Routes

The following routes require authentication:
- `/dashboard` - Main dashboard
- `/account` - Account management
- `/transaction` - Transaction management

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint



## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue on GitHub or contact the development team.

---

Made with ❤️ by the PathWise Team
