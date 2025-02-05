# HEKTO E-commerce Project

Here's a comprehensive README.md for your HEKTO e-commerce project:

# HEKTO - Modern E-commerce Platform

[![HEKTO Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://hekto-demo.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

![HEKTO Banner](https://via.placeholder.com/1920x600.png?text=HEKTO+E-commerce+Platform)

HEKTO is a modern headless e-commerce platform built with Next.js and Sanity.io, featuring an intuitive admin dashboard and seamless content management.

## Features

### Admin Dashboard
- 📊 Real-time order tracking
- 🔍 Filter orders by status (Pending, Dispatch, Success)
- 📦 Detailed order view with customer information
- 🖼️ Product management with image uploads
- 📈 Order history and sales analytics
- 🗑️ Order deletion with confirmation

### User Features
- 🛒 Product catalog with categories
- 🔎 Advanced product search and filtering
- 📦 Cart management system
- 💳 Secure checkout process
- 📱 Fully responsive design

### General
- 🔐 Authentication with NextAuth.js
- 🖼️ Image optimization with Next.js Image
- 📦 Headless CMS integration with Sanity.io
- 📱 Mobile-first responsive design
- 🚀 Server-side rendering (SSR) & Static site generation (SSG)

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- React Hook Form

**Backend:**
- Sanity.io (CMS)
- Next.js API Routes

**Utilities:**
- SweetAlert2 (Notifications)
- Heroicons (Icons)
- react-hot-toast (Notifications)
- @sanity/client (Sanity SDK)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/hekto.git
cd hekto
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure Sanity Studio:
```bash
cd studio
npm install
```

5. Run the development server:
```bash
# In root directory
npm run dev

# In separate terminal for Sanity Studio
cd studio && npm run dev
```

## Configuration

Update `.env.local` with your credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
NEXT_PUBLIC_SANITY_TOKEN=your_sanity_token

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

GITHUB_CLIENT_ID=your_github_id
GITHUB_CLIENT_SECRET=your_github_secret
```

## Project Structure

```bash
├── app
│   ├── (admin)              # Admin dashboard routes
│   ├── (store)              # Store frontend routes
│   ├── api                  # API routes
│   └── components           # Shared components
├── lib
│   └── sanity               # Sanity client configuration
│       ├── client.ts
│       └── image.ts
├── schemas                  # Sanity schema definitions
├── public                   # Static assets
└── studio                   # Sanity Studio configuration
```

## Deployment

1. **Vercel** (Frontend):
```bash
vercel
```

2. **Sanity Studio** (Backend):
```bash
cd studio && sanity deploy
```

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- Sanity.io team for the amazing headless CMS
- Vercel for Next.js and deployment platform
- Tailwind CSS for the utility-first CSS framework
```

**Screenshots:**

![Admin Dashboard](https://via.placeholder.com/800x500.png?text=Admin+Dashboard+Preview)
![Product Page](https://via.placeholder.com/800x500.png?text=Product+Page+Preview)
![Mobile View](https://via.placeholder.com/400x700.png?text=Mobile+View+Preview)

---

Replace placeholder URLs and screenshots with your actual project links and images. This README provides a professional overview while maintaining technical details for developers. Customize the content to match your specific implementation details and add any additional sections relevant to your project!