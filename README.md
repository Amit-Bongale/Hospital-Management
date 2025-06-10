# 🏥 Hospital Management System (React + Tailwind CSS)

A modern, responsive Hospital Management System built using ReactJS and Tailwind CSS that efficiently manages hospital operations across multiple user roles—**Admin, Doctor, Patient, and Staff**. This project was built with a focus on clean UI/UX, scalability, and modular code architecture.

---

## 🚀 Features

### ✅ Admin
- Manage Doctors, Patients, and Staff (Add/Edit/Delete)
- Ward Management (Add/Edit/Delete Wards)
- View Contact Requests
- Monitor Performance Metrics (Income, Occupancy, Active Users)
- Manage Salary Details

### ✅ Doctor
- View and manage schedules
- Add and view patient test results
- Admit patients and manage test details

### ✅ Staff
- Admit new or returning patients
- Generate bills and test reports
- Update doctor availability and status

### ✅ Patient
- Book, edit, or cancel appointments
- View personal details and medical history
- Access test reports
- Contact the hospital

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux
- **Routing**: React Router DOM
- **Icons**: Heroicons / Custom Icons
- **Build Tool**: React Scripts / Vite

---

## 📦 Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/amit-bongale-hospital-management.git
cd amit-bongale-hospital-management


## Folder Highlights
src/Components/
Each role (Admin, Doctor, Patient, Staff) has its own modular structure of components for better separation of concerns.

src/Redux/
Role-based Redux slices for managing global state cleanly.

src/Routers/
Includes protected routes to ensure only authenticated users access specific pages.

src/Pages/
All route-level views categorized by user roles.


## Future Enhancements
Backend API Integration (MongoDB + Node.js/Express)

Authentication & Authorization (JWT)

Notification System (e.g., Email, SMS via Twilio)

Responsive Admin Analytics Dashboard with Charts

Unit and Integration Testing



