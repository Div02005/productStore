# ProductStore 🛍️

> A full-stack MERN e-commerce inventory application featuring Zustand state management, Chakra UI modular components, and an MVC backend architecture.
---

## 🔗 Live Demo
> **Live Site:** [product-store-nine-zeta.vercel.app]

---

## ✨ Features
* **MVC Backend Architecture:** Cleanly decoupled Express routes, Mongoose models, and domain controllers.
* **Zustand Global Store:** Lightweight, boilerplate-free React state management for product catalogs.
* **Product Inventory Management:** Add, delete, and edit products with instant UI state synchronization.
* **Chakra UI Component System:** Accessible, responsive modal dialogs, cards, and grid layouts.
* **Client-Side Data Safeguards:** Strict validation preventing empty, negative, or invalid price/image inputs.
* **Vercel Zero-Config Ready:** Optimized serverless API routing and Edge-cached static delivery.

---

## 📁 Folder Structure

```text
productStore/
├── api/
│   └── index.js      # Vercel Serverless Function entry point
├── backend/
│   ├── config/       # MongoDB connection database setup
│   ├── controllers/  # Product MVC business logic (product.controller.js)
│   ├── models/       # Mongoose product schema (product.model.js)
│   ├── routes/       # API endpoints (/api/products)
│   └── server.js     # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # Chakra UI ProductCard, Navbar, EditModal
│   │   ├── pages/      # HomePage, CreatePage
│   │   └── store/      # Zustand global product store (product.js)
│   ├── package.json
│   └── vite.config.js
├── vercel.json         # Vercel zero-config serverless rewrites
└── package.json        # Root scripts for automated builds
