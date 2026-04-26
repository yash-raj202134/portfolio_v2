# Yash Raj - Portfolio Website (React + TypeScript)

A modern, professional portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features beautiful glassmorphic design effects throughout.


URL: https://yashraj001.netlify.app/


## 🚀 Features

- **Modern Design**: Glassmorphic UI with backdrop blur effects
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript**: Full type safety
- **Sections**:
  - Hero with animated background
  - About Me with timeline
  - Skills with expandable categories
  - Projects showcase
  - Testimonials carousel
  - Blog posts
  - Research Papers
  - Contact form
  - Footer with social links

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: Web3Forms (configured in Contact component)

## 📦 Installation

```bash
# Navigate to project directory
cd portfolio-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Project Structure

```
portfolio-react/
├── public/
│   └── Images/          # Copy your existing Images folder here
├── src/
│   ├── components/      # All React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Blog.tsx
│   │   ├── Papers.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolioData.ts  # All content data
│   ├── styles/
│   │   └── glassmorphism.css # Glassmorphic utilities
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

All content can be customized in `src/data/portfolioData.ts`:
- Projects
- Blog posts
- Skills
- Experience
- Education
- Social links
- Contact information

## 🖼️ Assets

Copy your existing `Images` folder from the root portfolio directory to `portfolio-react/public/Images/` to use all your existing assets.

## 📄 License

All rights reserved - Yash Raj
