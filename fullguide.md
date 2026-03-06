# Full MedusaJS 2.0 Scratch Setup Guide

This document is your master reference for building a Medusa store from zero. Follow these steps sequentially to create a new environment anytime.

---

## 1. System Requirements
Confirm your environment is ready before starting:
- **Node.js**: v20 or higher (`node -v`)
- **PostgreSQL**: v13 or higher (`psql --version`)
- **NPM**: v10+ (`npm -v`)

---

## 2. Database Preparation (pgAdmin)
1. Open **pgAdmin 4**.
2. Expand **Servers** > **PostgreSQL [version]**.
3. Right-click **Databases** > **Create** > **Database...**
4. Set Name: `medusa_v2_new_store` (or your preferred name).
5. Ensure you know your `postgres` user password (e.g., `lion`).

---

## 3. Project Initialization
Open your terminal (PowerShell recommended) and navigate to your workspace.

### The CLI Command:
```powershell
powershell -ExecutionPolicy Bypass -Command "npx create-medusa-app@latest --directory-path my-store --with-nextjs-starter"
```

### Prompt Strategy:
- **Project Name**: `my-store`
- **Email**: `admin@medusa-test.com` (or your email)
- **Database URL**: `postgres://postgres:[PASSWORD]@localhost:5432/[DB_NAME]`
  - *Example: `postgres://postgres:lion@localhost:5432/medusa_v2_new_store`*

---

## 4. Understanding the Folder Structure
Medusa 2.0 uses a monorepo setup:
- `/my-store/my-store`: This is the **Backend** (Node.js/Medusa).
- `/my-store/my-store-storefront`: This is the **Frontend** (Next.js).

---

## 5. Booting the Servers
You need to run these in **two separate terminal windows**.

### Window 1: The Backend
```bash
cd my-store/my-store
npm run dev
```
- **Admin Access**: [http://localhost:9000/app](http://localhost:9000/app)
- **Default Admin Password**: `medusa` (if you seeded the DB).

### Window 2: The Storefront
```bash
cd my-store/my-store-storefront
npm run dev
```
- **Store Access**: [http://localhost:8000](http://localhost:8000)

---

## 6. Extending the Backend (The "Aha" Moment)
To add custom logic, create a new file in the backend:
`src/api/store/custom-test/route.ts`

```typescript
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  res.json({ message: "Custom Backend Logic is Working!" })
}
```
*Test at: http://localhost:9000/store/custom-test*

---

## 7. Troubleshooting (Common Windows Issues)
- **Permission Errors**: Always use `powershell -ExecutionPolicy Bypass -Command "..."` for npx commands.
- **Forgotten Password**: In the backend folder, run:
  `npx medusa user --email admin@test.com --password mynewpassword`
- **Database Connection**: Ensure the PostgreSQL Service is "Running" in Windows Services.
- **Port Conflicts**: If port 9000 is used by WAMP/PHP, change the `PORT` in `.env`.
