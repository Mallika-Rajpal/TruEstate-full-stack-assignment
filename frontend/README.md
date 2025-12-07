# Retail Sales Management System

## 1. Overview (3–5 lines)
Retail Sales Management System built as part of the TruEstate SDE Intern assignment.  
The system provides a full-stack interface to explore a large retail sales dataset with search, multi-criteria filtering, sorting, and pagination.  
It demonstrates clean separation of frontend and backend responsibilities, predictable state management, and production-like data handling.

## 2. Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Axios  
- **Backend:** Node.js, Express  
- **Other:** CSV parser, in-memory data store

## 3. Search Implementation Summary
Search is implemented on the backend as a full-text, case-insensitive search over customer name and phone number.  
The frontend sends a `search` query parameter, which is combined with active filters, sorting, and pagination so that search never breaks state.

## 4. Filter Implementation Summary
Filters support:
- Customer region  
- Gender  
- Age range  
- Product category  
- Tags  
- Payment method  
- Date range  

The backend exposes filter parameters as query params (e.g. `gender`, `region`, `payment`, `ageMin/ageMax`, `startDate/endDate`).  
Filter logic is centralized in backend service modules to avoid duplication and to keep behaviour consistent.

## 5. Sorting Implementation Summary
Sorting is implemented on the backend with a single `sort` parameter:
- `date` – transaction date (newest first)  
- `quantity` – quantity (descending)  
- `name` – customer name (A–Z)  

Sorting is applied after filtering and search, and the frontend preserves the active sort option while navigating pages or changing filters.

## 6. Pagination Implementation Summary
Pagination is handled on the backend with fixed page size of 10 records.  
The API returns metadata (`total`, `page`, `totalPages`, `hasNextPage`, `hasPrevPage`) along with the current page of data.  
The frontend uses this metadata to render Previous/Next buttons and keep search/filter/sort state intact across pages.

## 7. Setup Instructions

### Backend
```bash
cd backend
npm install
npm start

This starts the API server at http://localhost:5001 (or the configured port).

Frontend
cd frontend
npm install
npm run dev

This starts the frontend at http://localhost:5173.


