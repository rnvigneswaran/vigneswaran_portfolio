# Deployment Guide

Since the `gh` (GitHub) and `vercel` CLI tools are not installed on your system, you need to perform the deployment steps manually.

## 1. Push to GitHub

I have already initialized the git repository and committed your code locally.

1.  **Create a New Repository**:
    *   Go to [GitHub.com/new](https://github.com/new).
    *   Name it `portfolio` (or whatever you prefer).
    *   **Do not** initialize with valid README, .gitignore, or license (we already have them).
    *   Click **Create repository**.

2.  **Connect and Push**:
    *   Copy the HTTPS or SSH URL of your new repository (e.g., `https://github.com/rnvigneswaran/portfolio.git`).
    *   Run the following commands in your terminal:

    ```powershell
    git remote add origin <YOUR_REPOSITORY_URL>
    git branch -M main
    git push -u origin main
    ```

## 2. Deploy to Vercel

1.  **Log in to Vercel**:
    *   Go to [Vercel.com](https://vercel.com) and log in (preferably with GitHub).

2.  **Import Project**:
    *   Click **"Add New..."** -> **"Project"**.
    *   Select **"Import"** next to your new `portfolio` repository from the list.

3.  **Configure and Deploy**:
    *   Vercel will detect it's a Vite + React project automatically.
    *   The build settings should be pre-filled correctly (`npm run build`).
    *   Click **Deploy**.

your site will be live in less than a minute!
