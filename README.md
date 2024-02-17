# Site-Exploration

In this project, I aimed to create an exact pixel-perfect implementation of this [Figma design](https://www.figma.com/file/qikBjRR4Fq8BVKhg4uC9MP/Test-Email-(Copy)?type=design&node-id=1-428&mode=design).
The site is deployed and fully responsive for different screen sizes.

## Component Structure:

- **MVC Architecture:**
  - **Frontend (client folder):**
    - Pages: Contains pages to be displayed.
    - Components: Reusable components like buttons, categories, etc.
  - **Backend (server folder):**
    - Utils, Models, Routes, Controllers: Organized for their respective purposes.

## Assumptions:
- Changes made in `vite.config.js` for proxy setup.
- Environment variables need to be set up in `.env` for `MONGO` and `JWT_SECRET`.
- Took screenshots of icons from Figma which were not available.

## Technical Requirements:

- Languages and Libraries:
  - JavaScript
  - React.js
  - Express.js
  - Node.js
  - MongoDB
  - Tailwind CSS for styling

## Setup Instructions:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/1nilaypatel/Site-Exploration.git

2. **Install NPM dependencies (in root folder) for server side:**
    ```bash
    npm install

3. **Start the server (in root folder):**
    ```bash
    npm run dev

4. **Move to the Client Folder (in new terminal):**
    ```bash
    cd client

5. **Install NPM dependencies:**
    ```bash
    npm install

6. **Run the project:**
    ```bash
    npm run dev

7. **Access the application in your browser (port may vary):**
    ```bash
    http://localhost:5173/

### Note: Ensure you have Node.js and npm installed on your system.
