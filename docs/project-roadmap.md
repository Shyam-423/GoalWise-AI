GoalWise V1 - FINAL (Architecture Locked)
🏗 Tech Stack
Frontend
React 19
TypeScript
Tailwind CSS v4
shadcn/ui
React Router
React Query
React Hook Form
Zod
Axios
Recharts
Framer Motion
Backend
Node.js
Express
TypeScript
PostgreSQL
Prisma ORM
JWT (HTTP-only Cookies)
bcrypt
Zod Validation
AI
Gemini API
Deployment
Vercel
Render
Neon PostgreSQL
🗄 Database (LOCKED)

We'll use UUID as the primary key for all tables.

Tables
users
user_profile
goals
expenses
recurring_expenses
salary_history
monthly_reviews
notifications
Enums

Instead of storing strings like

cash
upi
card

We'll use Prisma Enums.

PaymentMethod
UPI
CASH
DEBIT_CARD
CREDIT_CARD
NET_BANKING
WALLET
GoalPriority
LOW
MEDIUM
HIGH
GoalStatus
ACTIVE

COMPLETED

PAUSED
SalaryType
FIXED

VARIABLE
ExpenseCategory
Food

Transport

Shopping

Medical

Entertainment

Education

Travel

Bills

EMI

Groceries

Investment

Others