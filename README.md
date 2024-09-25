# Blog App

## Demo

https://ayse-blog-app.vercel.app/

## Project Gif
![blog-app](https://github.com/user-attachments/assets/f4638f00-c433-4539-b9d2-9b6cf8efb8f2)

## Project Purpose

The Blog App is designed for users to create, like, and manage blogs, as well as view blogs they've liked on their personal page. The app supports user authentication, adding new categories, and managing blog posts with detailed features. This project enhances skills in React, Redux Toolkit, Material UI, and handling HTTP requests using Axios. 

## Project Structure


blog-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── app/
│   │   └── store.jsx
│   ├── assets/
│   │   ├── logo.webp
│   │   ├── owl.png
│   │   ├── react.svg
│   │   └── Woman icon.png
│   ├── components/
│   │   ├── Modals/
│   │   │   ├── CommentModal.jsx
│   │   │   ├── EditModal.jsx
│   │   │   └── NewCategoryModal.jsx
│   │   ├── BlogList.jsx
│   │   ├── Calendar.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── HalloCard.jsx
│   │   ├── LoginForm.jsx
│   │   ├── MenuListItems.jsx
│   │   ├── NewPost.jsx
│   │   ├── RegisterForm.jsx
│   │   └── WeatherCard.jsx
│   ├── features/
│   │   ├── authSlice.jsx
│   │   └── blogSlice.jsx
│   ├── helper/
│   │   └── ToastNotify.js
│   ├── hooks/
│   │   ├── useAuthCall.jsx
│   │   ├── useAxios.jsx
│   │   └── useBlogCall.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Detail.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── MyBlogs.jsx
│   │   ├── News.jsx
│   │   ├── Profile.jsx
│   │   └── Register.jsx
│   ├── routers/
│   │   ├── AppRouter.jsx
│   │   └── PrivateRouter.jsx
│   ├── styles/
│   │   └── globalStyle.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
└── pnpm-lock.yaml
```

## Project Features

- **User Authentication**: Managed through the authSlice and secure routes using PrivateRouter.
- **Category Management**: Users can add new categories using the NewCategoryModal component.
- **Blog Management**: Users can create, edit, and delete blog posts. Liked blogs can be viewed on the user's personal page.
- **State Management**: Redux Toolkit is used to handle global state, with slices for authentication and blog management.
- **Custom Hooks**: Hooks like `useAuthCall`, `useAxios`, and `useBlogCall` are implemented for reusable logic.
- **Responsive Design**: The app is fully responsive and styled using Tailwind CSS and Material UI.
- **Toast Notifications**: Real-time feedback for user actions is provided using Toastify.
- **Datepicker**: Implemented a datepicker component for selecting dates in blog creation or editing.

## Technologies Used

- **ReactJS**: For building the user interface.
- **Redux Toolkit**: For state management.
- **Material UI (MUI)**: Provides pre-built components for a better user experience.
- **Axios**: For handling HTTP requests.
- **React Router**: For routing and navigation within the application.
- **Vite**: A fast build tool for frontend development.
- **PNPM**: For efficient package management.
- **Toastify**: For displaying toast notifications.
- **Datepicker**: For handling date input.

## API

The application uses Axios to make API requests for fetching and manipulating blog data. Example endpoints:

- `GET /blogs`: Fetch all blog posts.
- `POST /blogs`: Create a new blog post.
- `GET /categories`: Fetch available categories.

## Outcome

This project helped me strengthen my skills in:

- **Redux Toolkit**: Handling global state management efficiently.
- **Axios**: Making API requests and handling responses.
- **React Router**: Navigating through different parts of the app with protected routes.
- **Material UI & Tailwind CSS**: Building responsive and user-friendly UIs.
- **Custom Hooks**: Reusing logic across multiple components.
- **Toast Notifications**: Providing users with instant feedback using Toastify.

<p align="center"> 📝 Happy Coding! 🚀 </p>
