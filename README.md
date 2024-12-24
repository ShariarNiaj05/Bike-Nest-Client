# Bike Nest

## Introduction

`Bike Nest - Your Ultimate Destination for All Things Sporting!`

## **_Project Description_**

### **_Purpose:_**

The Bike Nest web application is purposed for the development of an effective, user-friendly platform where users can view, book, and manage bike rentals with ease. This system integrates both frontend and backend functionalities to provide a modern web application that caters to customers, ensures easy administration, and enables secure transactions.

### **_Objectives:_**

1. **User Convenience**: Simplify the process of renting bikes with an intuitive interface.
2. **Efficient Management**: Provide administrators to manage inventory, users, and rentals effectively.
3. **Responsiveness**: Ensure the platform is accessible across devices, offering a seamless experience on desktops, tablets, and mobiles.

### **_Goals:_**

1. **Enable a hassle-free bike rental experience** for users, from browsing to booking and payment.
2. **Streamline operations** for administrators, allowing quick updates to bike inventory and rental statuses.
3. **Build trust and credibility** through detailed pages, such as "About Us" and customer testimonials.
4. Improve user retention with personalized dashboards and user account management.
5. Provide error handling and friendly messages for seamless navigation, even in case of issues.
6. Offer scalability to integrate future features like geolocation, notifications, or multilingual support.

### **Features**

### **1. Public Pages**

- **Home Page**: Hero section, featured bikes, testimonials.
- **About Us**: Mission, team profiles, milestones, and contact details.
- **Bike Listing and Details**: Filterable bike catalog with detailed bike profiles.
- **Authentication**: User-friendly sign-up/login interfaces.

### **2. Private/User Features**

- **Dashboard**: Personalized interface displaying rentals, payments, and quick access to profile.
- **Profile Management**: Update personal details easily.
- **Rental History**: Tabs for paid and unpaid rentals with payment features.

### **3. Admin Features**

- **Bike Management**: Add, edit, or remove bikes, and filter them by attributes like model or availability.
- **User Management**: Promote users to admin roles or deactivate inactive accounts.
- **Rental Handling**: Process bike returns and calculate costs automatically.
- **Coupon Management**: Create and track coupon usage.

### **4. Extra Features**

- Responsive design with a dark mode toggle.
- Side-by-side bike comparison tool for customers.
- Micro-animations for smooth interactions.
- Comprehensive error handling and custom 404 pages.

# File Structure

```js
.eslintrc.cjs
.gitignore
LICENSE.md
OVERVIEW.md
README.md
components.json
index.html
package-lock.json
package.json
postcss.config.js
public
   |-- fevicon.png
src
   |-- App.css
   |-- App.tsx
   |-- assets
   |   |-- comming-soon.json
   |   |-- cto.jpg
   |   |-- dark-logo.png
   |   |-- ho.jpg
   |   |-- logo.png
   |   |-- nav-bike.jpg
   |   |-- shariar.png
   |-- components
   |   |-- custom
   |   |   |-- BikeCard.tsx
   |   |   |-- Checkout.tsx
   |   |   |-- Contact.tsx
   |   |   |-- CouponsAndDiscounts.tsx
   |   |   |-- FeaturedCategory.tsx
   |   |   |-- FeaturedSections.tsx
   |   |   |-- HeroSection.tsx
   |   |   |-- NavbarItem.tsx
   |   |   |-- OurTeam.tsx
   |   |   |-- PaymentComplete.tsx
   |   |   |-- PaymentPage.tsx
   |   |   |-- PromotionalBanner.tsx
   |   |   |-- Testimonials.tsx
   |   |   |-- Title.tsx
   |   |   |-- WhyChooseUs.tsx
   |   |-- shared
   |   |   |-- ComingSoon.tsx
   |   |   |-- Container.tsx
   |   |   |-- Footer.tsx
   |   |   |-- Loading.tsx
   |   |   |-- Navbar.tsx
   |   |   |-- SideBar.tsx
   |   |-- ui
   |   |   |-- alert-dialog.tsx
   |   |   |-- badge.tsx
   |   |   |-- button.tsx
   |   |   |-- card.tsx
   |   |   |-- carousel.tsx
   |   |   |-- dialog.tsx
   |   |   |-- drawer.tsx
   |   |   |-- input.tsx
   |   |   |-- label.tsx
   |   |   |-- menubar.tsx
   |   |   |-- navigation-menu.tsx
   |   |   |-- select.tsx
   |   |   |-- sheet.tsx
   |   |   |-- slider.tsx
   |   |   |-- switch.tsx
   |   |   |-- table.tsx
   |   |   |-- tabs.tsx
   |   |   |-- textarea.tsx
   |   |   |-- toast.tsx
   |   |   |-- toaster.tsx
   |-- hooks
   |   |-- use-toast.ts
   |-- index.css
   |-- layout
   |   |-- DashboardLayout.tsx
   |   |-- MainLayout.tsx
   |   |-- ProtectedRoute.tsx
   |-- lib
   |   |-- ThemeContext.tsx
   |   |-- utils.ts
   |-- main.tsx
   |-- pages
   |   |-- About.tsx
   |   |-- BikeDetails.tsx
   |   |-- Bikes.tsx
   |   |-- Contact.tsx
   |   |-- DashboardLanding.tsx
   |   |-- Home.tsx
   |   |-- Login.tsx
   |   |-- PaymentPage.tsx
   |   |-- PrivacyPolicy.tsx
   |   |-- Register.tsx
   |   |-- TermsOfService.tsx
   |   |-- UpdateProfile.tsx
   |   |-- admin
   |   |   |-- ManageUser.tsx
   |   |   |-- ReturnBike.tsx
   |   |   |-- adminBikeManagement
   |   |   |   |-- AddBulkBike.tsx
   |   |   |   |-- AddSingleBike.tsx
   |   |   |   |-- AdminBikeManagement.tsx
   |   |-- user
   |   |   |-- MyRentals.tsx
   |-- redux
   |   |-- api
   |   |   |-- baseApi.ts
   |   |-- features
   |   |   |-- adminBike.ts
   |   |   |-- authApi.ts
   |   |   |-- authSlice.ts
   |   |   |-- bikes.ts
   |   |   |-- manageUser.ts
   |   |   |-- rentals.ts
   |   |   |-- user.ts
   |   |-- hooks.ts
   |   |-- store.ts
   |-- routes
   |   |-- admin.routes.tsx
   |   |-- routes.tsx
   |   |-- user.routes.tsx
   |-- styles
   |   |-- stripe.style.css
   |-- types
   |   |-- bike.type.ts
   |   |-- index.ts
   |   |-- myRental.type.ts
   |   |-- rental.ts
   |   |-- routes.type.ts
   |   |-- user.type.ts
   |-- utils
   |   |-- demoBikes.ts
   |   |-- formatDate.ts
   |   |-- routeGenerator.ts
   |-- vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vercel.json
vite.config.ts
```

<!-- ### Homepage

### Product Listing (All Products Page)

### Product Details (Single Product Page)

### Cart Page

### Checkout Page

### Manage Products -->

## Technology Stack

| Frontend          | Backend    | DevOps/ Deployment |
| ----------------- | ---------- | ------------------ |
| TypeScript        | TypeScript | Frontend: Vercel   |
| React             | Node.js    | Backend: Vercel    |
| Redux + RTK Query | Express.js |                    |
| Shadcn UI         | Mongoose   |                    |

## Installation Guideline

Follow The Instructions To Run The Application Locally

### Step:1 **Clone the repository**

```bash
  git clone https://github.com/ShariarNiaj05/Bike-Nest-Client.git
```

### Step:2 **Change the directory**

```bash
  cd Bike-Nest-Client
```

Or simply navigate to the folder and open VS Code in that directory.

### Step:3 **Install node modules and all the dependencies**

```bash
  npm install
```

### Step:4 **.env file setup**

```bash
   Check example .env file
```

### Step:5 **Run the project**

```bash
   npm run dev
```

The server will start running on http://localhost:5173 or http://localhost:5174

## API Endpoints

### User/ Authentication

<details>
<summary>SignUp User</summary>

> Request Body

Endpoint: `{{bike-rental-url}}/auth/signup`

Method: `POST`

Access: `public`

```json
{
  "name": "admin 3",
  "email": "admin55@example.com",
  "password": "password123",
  "phone": "1234567890",
  "address": "123 Main St, Anytown",
  "role": "admin"
}
```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User registered successfully",
  "data": {
    "name": "admin 3",
    "email": "admin55@example.com",
    "phone": "1234567890",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "_id": "6768117611ef05e2107d1b4e",
    "createdAt": "2024-12-22T13:17:42.356Z",
    "updatedAt": "2024-12-22T13:17:42.356Z",
    "__v": 0
  }
}
```

</details>

<details>
<summary>Login User </summary>

Endpoint: `{{bike-rental-url}}/auth/login`

Method: `POST`

Access: `public`

> Request Body

```json
{
  "email": "admin2@example.com",
  "password": "password123"
}
```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluMkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTczNDk2OTQ1MiwiZXhwIjoxNzM3NTYxNDUyfQ.3Zzu1EYDQgjgME9zHGlGiAE1Os0kDgUHAoarC2-QjDQ",
  "data": {
    "_id": "668028096d51eca6fe6afcbb",
    "name": "admin now 06",
    "email": "admin2@example.com",
    "phone": "0987654321",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "createdAt": "2024-06-29T15:28:09.881Z",
    "updatedAt": "2024-07-06T14:00:04.918Z",
    "__v": 0
  }
}
```

</details>

<details>
<summary>Get Profile </summary>

Endpoint: `{{bike-rental-url}}/auth/users/me`

Method: `GET`

Access: `Private (Headers Authorization)`

> Response:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User profile retrieved successfully",
  "data": {
    "_id": "668028096d51eca6fe6afcbb",
    "name": "admin now 06",
    "email": "admin2@example.com",
    "phone": "0987654321",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "createdAt": "2024-06-29T15:28:09.881Z",
    "updatedAt": "2024-07-06T14:00:04.918Z",
    "__v": 0
  }
}
```

</details>

<details>
<summary> Update Profile</summary>

Endpoint: `{{bike-rental-url}}/auth/users/me`

Method: `PUT`

Access: `Private (Headers Authorization)`

> Request Body:

```json
{
  "name": "admin now 06",
  "phone": "0987654321"
  // Desired field that is supposed to update
}
```

> Response - 200

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Profile updated successfully",
  "data": {
    "_id": "668028096d51eca6fe6afcbb",
    "name": "admin now 06",
    "email": "admin2@example.com",
    "phone": "0987654321",
    "address": "123 Main St, Anytown",
    "role": "admin",
    "createdAt": "2024-06-29T15:28:09.881Z",
    "updatedAt": "2024-12-23T16:03:24.672Z",
    "__v": 0
  }
}
```

</details>

## Bikes

### Create Bike

### Get All Bike

### Update Bike

### Delete Bike

## Bookings/ Rentals

### Create New Booking

### Get All Bookings for Users

### Return Bike

### Make Payment
