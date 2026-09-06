# Signup Form

A React signup form built with the `useState` hook that validates email, password, and confirm password inputs in real time, providing visual feedback and error messages.

## Features

- Email input validated against a proper email address format.
- Password input validated to be at least 8 characters long.
- Confirm password input validated to match the password field.
- Email input border turns **green** when valid and **red** when invalid.
- Inline error messages displayed below each invalid field.
- Submit button triggers an alert:
  - `"Form submitted successfully"` when all inputs are valid.
  - `"Can't submit the form"` when any input is invalid.
- Responsive, styled UI with focus/hover transitions and fade-in animation.

## Components

- **App** — Root component. Renders `SignupForm`.
- **SignupForm** — Manages form state (`email`, `password`, `confirmPassword`) and validation error state using `useState`; handles input change validation and form submission.

## Project Structure

```
Project 2. signup-form/
├── src/
│   ├── components/
│   │   ├── App.js
│   │   └── SignupForm.js
│   ├── styles/
│   │   └── App.css
│   ├── index.js
│   └── index.html
├── webpack.config.js
├── .babelrc
└── package.json
```

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm start
```

App will open at `http://localhost:8080`.

### Build for production

```bash
npm run build
```

## Tech Stack

- React 16
- Webpack 4
- Babel
