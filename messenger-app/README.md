# Messenger Web App - Frontend

This folder contains the code for the frontend part of the **Messenger Web App**. Below, you'll find instructions on how to run the project locally, how to deploy it to Firebase, and information about the core libraries used in the app.

## Getting Started

### Prerequisites

- **Node.js** (version 18.x or later)
- **npm** or **yarn** for managing dependencies
- Firebase CLI (for deployment)

### Installation

1. Clone the repository and navigate to the `messenger-app` directory:

    ```bash
    git clone https://github.com/Cadrew/messenger.git
    cd messenger/messenger-app
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

### Running the App Locally

To start the development server, run the following command:

```bash
npm start
```

The app will be available at http://localhost:3000

###  Building for Production

```bash
npm run build
```

This will create an optimized build of the app in the build folder.

###  Deployment

This app is deployed using Firebase Hosting. You can deploy the app by following these steps:

1. Make sure you have the Firebase CLI installed:

```bash
npm install -g firebase-tools
```

2. Login to Firebase:

```bash
firebase login
```

or

```bash
make login
```

3. Deploy the app:

```bash
firebase deploy
```

Alternatively, you can use the provided Makefile to handle the deployment:

```bash
make deploy
```

### Core Libraries

- React: A library for building the user interface of the app.
- Redux: For managing the application's global state. It helps to handle the chat state and user data efficiently.
- React Router: A routing library that allows for navigation between different views in the app.
- React Chat Elements: This library provides pre-built chat UI components like message bubbles, chat lists, and input fields. It simplifies the creation of a functional chat interface.
- [react-chat-elements](https://www.npmjs.com/package/react-chat-elements) - Documentation for usage and customization.

### Additional Libraries

- **TypeScript**: Ensures type safety and helps to catch errors early in the development process.
- **Firebase SDK**: For hosting management.
