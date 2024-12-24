# Smile House Dental Care

![Smile House Dental Care Logo](./public/smilehouse-logo.png)

This is a [Next.js](https://nextjs.org) project for Smile House Dental Care, providing comprehensive dental solutions to help you achieve a perfect smile in a comfortable and compassionate environment.

Smile House Dental Care is dedicated to providing exceptional dental services in a comfortable and compassionate environment. Led by Dr. Ratnesh Vishwakarma, our clinic focuses on helping you achieve a healthy, beautiful smile with personalized care.

We offer a range of services, from routine check-ups to advanced treatments, using the latest technology to ensure the best results. Our friendly and professional team is committed to making every visit a positive experience.

Choose Smile House Dental Care for quality care, comfort, and a smile that lasts.

## Table of Contents

- [Smile House Dental Care](#smile-house-dental-care)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Features](#features)
  - [Environment Variables](#environment-variables)
  - [Scripts](#scripts)
  - [License](#license)

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/smilehousedentalcare.git
cd smilehousedentalcare
```

Install the dependecies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Features

- **Home Page:** Welcome message and introduction to Smile House Dental Care.
- **About Page:** Information about the clinic and Dr. Ratnesh Vishwakarma.
- **Services Page:** Detailed list of dental services offered.
- **Contact Page:** Contact form and clinic location.
- **Appointment Booking:** Book an appointment online.
- **Testimonials:** Patient testimonials.
- **FAQ:** Frequently asked questions.

## Environment Variables

Create a .env file in the root directory and add the following environment variables:

```
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
FROM_EMAIL_ADDRESS=your-email@example.com
EMAIL_PASSWORD=your-email-password
FROM_EMAIL_USERNAME=Your Name
TO_EMAIL_ADDRESS=recipient-email@example.com
```

## Scripts

- dev: Runs the development server.
- build: Builds the application for production.
- start: Starts the production server.
- lint: Runs ESLint to check for linting errors.
- postbuild: Generates the sitemap after building the application.

## License

This project is licensed under the MIT License.
