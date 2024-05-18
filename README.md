# VisuVision

Welcome to the VisuVision! This AI-Powered web-based image editor provides intuitive tools and real-time previews for editing images. Built with Next.js, TailwindCSS, shadcn, and MongoDB, it leverages Cloudinary AI to enhance your image editing experience. It also integrates with Stripe for secure and easy user payments, and Clerk for user authentication.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **AI-Powered Tools:** Utilize Cloudinary AI API to edit your images effortlessly.
- **Real-Time Previews:** See the changes to your images in real-time.
- **User Authentication:** Secure user authentication using Clerk.
- **Secure Payments:** Easy and secure payments integration with Stripe.
- **Responsive Design:** Built with shadcn and TailwindCSS for a responsive and beautiful UI.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:your-username/visuvision.git
   cd visuvision
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root of your project and add the following variables:

   ```plaintext
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
   WEBHOOK_SECRET=<your-webhook-secret>
   MONGODB_URL=<your-mongodb-url>
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
   STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
   NEXT_PUBLIC_SERVER_URL=<your-deployed-url->
   NEXT_PUBLIC_SERVER_URL=http://localhost:3000
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

Once the server is running, you can use the following features:

- **Login/Register:** Use Clerk for user authentication.
- **Image Editing:** Upload an image and use the Cloudinary AI API to edit it.
- **Preview Changes:** See the changes to your image in real-time as you edit.
- **Purchase Plans:** Use Stripe to securely purchase credits for more edits.

## Contributing

We welcome contributions to the VisuVision! To contribute, follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit them:**

   ```bash
   git commit -m 'Add some awesome feature'
   ```

4. **Push to the branch:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a pull request.**

Please make sure to update tests as appropriate and adhere to the code style guidelines.

## License

This project is licensed under the MIT License. See LICENSE for more details.

## Acknowledgments

- **[Next.js Documentation](https://nextjs.org/docs)**
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)**
- **[MongoDB Documentation](https://www.mongodb.com/docs/)**
- **[shadcn Documentation](https://ui.shadcn.com/docs)**
- **[Clerk Documentation](https://clerk.com/docs)**
- **[Stripe Documentation](https://docs.stripe.com/)**
