# Bike Nest

## Introduction

`Bike Nest - Your Ultimate Destination for All Things Sporting!`

## Project Description

### Purpose

### Goals

## Features

# File Structure

<details>
<summary>View</summary>

```
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

</details>

### Homepage

### Product Listing (All Products Page)

### Product Details (Single Product Page)

### Cart Page

### Checkout Page

### Manage Products

## Technology Stack

### Frontend

- React ⚛️
- Redux + RTK Query🌀
- Shadcn UI

### Backend

- Node.js 🟢
- Express.js 🌐
- Mongoose 🍃
- TypeScript 📘

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
   WIll update later
```

### Step:5 **Run the project**

```bash
   npm run dev
```

The server will start running on http://localhost:5173 or http://localhost:5174

## API References

### Body Params

> Search by title

| Name | Type | Required? | Description |
| ---- | ---- | --------- | ----------- |
|      |      |           |             |
|      |      |           |             |
|      |      |           |             |

### Responses

|     | Response Body |
| --- | ------------- |
| 200 |               |
| 400 |               |

## Code Examples

### Installation

### Request

```js
import axios from "axios";

const options = {
  method: "POST",
  url: "https://api.notion.com/v1/oauth/token",
  headers: { accept: "application/json", "content-type": "application/json" },
  data: { grant_type: '"authorization_code"' },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```
