# Full-stack CRUD with Prisma, Express and React

This project is a full-stack CRUD (create, read, update, delete) application using [Prisma](https://www.prisma.io/), [Express](https://expressjs.com), and [React](https://reactjs.org)

## Back-End

```bash
cd backend
```

copy the `.env.example` file to `.env`

```
APP_PORT=5000
DATABASE_URL="mysql://root:123456@localhost:3306/prisma-react"
```

Install dependencies

```bash
npm install
```

Generate the Prisma Client

```
npx prisma generate
```

Migrate Database with Prisma

```
npx prisma migrate dev
```

Start the server

```bash
npm start
```

Your express server will now be running on port 5000. You can visit [http://localhost:5000](http://localhost:5000) in your web browser to verify that the server is working correctly.

## Front-End

```bash
cd frontend

# Install dependencies...
npm install

# To start the application...
npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


# Project Description: Task Management Application

#### Overview:
Develop a Task Management Application where users can create, update, delete, and categorize tasks. The application will use React for the frontend and Redux for state management.

#### Features:

1. **User Authentication:**
   - Implement a simple login and registration system.
   - Users should be able to sign up, log in, and log out.

2. **Task Management:**
   - Users can create tasks with a title, description, due date, and priority level (e.g., low, medium, high).
   - Tasks can be marked as complete or incomplete.
   - Users can edit or delete tasks.

3. **Categorization:**
   - Users can categorize tasks into different projects or categories (e.g., Work, Personal, School).
   - Users can view tasks based on selected categories.

4. **Filtering and Sorting:**
   - Implement functionality to filter tasks based on their completion status or priority level.
   - Users can sort tasks by due date or priority.

5. **Notifications:**
   - Implement notifications to remind users of upcoming tasks or overdue tasks.

6. **User Interface:**
   - Develop a clean and responsive user interface using CSS or a UI library (e.g., Material-UI, TailwindCss).

7. **Redux Integration:**
   - Use Redux for state management to handle the application's data and user actions.
   - Implement actions, reducers, and store to manage the state of tasks, categories, and user authentication.

#### Learning Outcomes:
- Understanding of React components and lifecycle.
- Practical implementation of Redux for state management.
- User authentication and data management.
- UI/UX design principles and responsive design.

#### Stretch Goals:
- Implement data persistence using a backend server or local storage.
- Add the ability to collaborate with other users on tasks.
- Integrate a calendar view for tasks.
