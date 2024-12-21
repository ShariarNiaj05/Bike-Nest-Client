# File Structure

README.md
SERVICE.md
LICENSE.md

# README.md

# Bike Nest

## Introduction

`Bike Nest - Your Ultimate Destination for All Things Sporting!`

## Project Description

### Purpose

### Goals

## Features

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
