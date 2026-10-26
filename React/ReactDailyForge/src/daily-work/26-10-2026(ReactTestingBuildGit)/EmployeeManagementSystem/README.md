# Employee Management System (EMS)

## 1. Project Overview

The Employee Management System (EMS) is a web application developed using React.js to manage employee information through a centralized interface.

The application provides features for viewing employee records, adding new employees, updating existing information, deleting records, and viewing employee details.

It includes a dashboard for employee statistics, search and filtering functionality, sorting, pagination, form validation, and protected routes.

The application uses JSON Server as a REST API for employee data management.

## 2. Project Objectives

- Develop a user-friendly employee management interface.
- Implement employee creation, reading, updating, and deletion (CRUD).
- Display employee statistics on the dashboard.
- Implement search, filtering, sorting, and pagination.
- Validate employee information before submission.
- Integrate the React frontend with a REST API.
- Implement login and protected routes.
- Handle loading states and API errors.
- Build the application for production.

## 3. Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interface |
| JavaScript (ES6+) | Application logic |
| React Router | Page navigation and protected routes |
| Context API | Shared authentication and employee state |
| useReducer | Employee state management |
| React Hooks | Component state and lifecycle management |
| HTML5 | Application structure |
| CSS3 | Styling and responsive layouts |
| JSON Server | REST API and employee data persistence |
| Vite | Development server and production build |
| npm | Package management |
| Git and GitHub | Version control and source code hosting |

## 4. Main Features

### Authentication and Navigation
- Login page.
- Protected application routes.
- Navigation between application pages.
- Redirect unauthenticated users to the login page.

### Dashboard
- Total employee count.
- Active employee count.
- Inactive employee count.
- Employees on leave.
- Department-wise employee statistics.

### Employee Management
- View the employee list.
- Add new employee records.
- View individual employee details.
- Edit existing employee information.
- Delete employee records.

### Search and Data Organization
- Search employee records.
- Filter employees by department.
- Filter employees by employment status.
- Sort employee records.
- Navigate through paginated results.
- Change the number of records displayed per page.

### Form Validation
- Required-field validation.
- First and last name validation.
- Email format validation.
- Duplicate email detection.
- Indian mobile number validation.
- Department and designation validation.
- Employment status validation.
- Joining date validation.
- Annual salary validation.

### API Integration
- Retrieve employee records from the API.
- Create employee records.
- Update employee records.
- Delete employee records.
- Display loading and error states.

## 5. Application Pages

| Page | Route | Description |
|---|---|---|
| Login | `/login` | User login interface |
| Dashboard | `/dashboard` | Employee statistics and summary |
| Employee List | `/employees` | Employee records with search and filters |
| Add Employee | `/employees/new` | Form to create an employee |
| Employee Details | `/employees/:id` | Individual employee information |
| Edit Employee | `/employees/:id/edit` | Form to update employee information |

Protected pages require authentication according to the application's authentication implementation.

## 6. Project Structure

```text
EmployeeManagementSystem/
├── public/
├── src/
│   ├── components/
│   │   ├── AppNavigation.jsx
│   │   ├── Button.jsx
│   │   ├── EmployeeForm.jsx
│   │   ├── EmployeeTable.jsx
│   │   ├── FeedbackStates.jsx
│   │   ├── LoadingState.jsx
│   │   ├── Notification.jsx
│   │   ├── PageHeader.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── StatCard.jsx
│   │   └── Status