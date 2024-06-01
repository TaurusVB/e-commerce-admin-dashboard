# Admin-dashboard - Shop Builder App

Admin-dashboard is a web application that serves as an e-commerce store builder, empowering users to create and manage their online shops effortlessly. Whether you're an individual seller or a small business owner, Shop Builder provides an intuitive admin panel for setting up your store, adding products with details like name, size, color, category, and product images. Start selling your products on your customized storefront today!

Using this website, I've already created a store where I added many products, and you can make payments. Of course, the payment is in test mode. You can check it out by following the link: [store created by Admin-dashboard](https://github.com/TaurusVB/e-commerce-store)

<div align="left">
  <img height="450" src="https://res.cloudinary.com/dvlinx4rz/image/upload/v1701012973/admin-dashboard_o9lq74.png"  />
</div>

###

## Features

- **User-Friendly Interface:** Intuitive and easy-to-use interface for creating and managing your online store.
  
- **Product Customization:** Add details such as product name, size, color, category, and showcase your product with appealing images.

- **Individual Storefronts:** Each user gets a dedicated storefront to display and sell their unique products.

- **E-commerce Essentials:** Essential e-commerce features for a seamless buying and selling experience.

- **Sales Overview:** View a graphical representation of sales on the "Overview" page.

- **Order Management:** Utilize the "Orders" page to track and manage customer orders, ensuring efficient order fulfillment.
  
 ## Technologies Used

- React
- Tailwind CSS
- Next.js
- MySQL + Prisma + PlanetScale
- Clerk
- Shadcn/ui
- Vercel
- Stripe

## Key Features:

- We will be using Shadcn UI for the Admin!
- Our admin dashboard is going to serve as both CMS, Admin and API!
- You will be able to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and our CMS will generate API routes for all of those individually!)
- You will be able to create, update and delete categories!
- You will be able to create, update and delete products!
- You will be able to upload multiple images for products, and change them whenever you want!
- You will be able to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- You will be able to create, update and delete "Billboards" which are these big texts on top of the page. You will be able to attach them to a single category, or use them standalone (Our Admin generates API for all of those cases!)
- You will be able to Search through all categories, products, sizes, colors, billboards with included pagination!
- You will be able to control which products are "featured" so they show on the homepage!
- You will be able to see your orders, sales, etc.
- You will be able to see graphs of your revenue etc.
- You will learn Clerk Authentication!
- Order creation
- Stripe checkout
- Stripe webhooks

## Installation and Setup

### Cloning the repository

```shell
git clone https://github.com/TaurusVB/e-commerce-admin-dashboard.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=''

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=""

FRONTEND_STORE_URL=

STRIPE_WEBHOOK_SECRET=
STRIPE_API_KEY=

```

### Connect to PlanetScale and Push Prisma
```shell
npx prisma generate
npx prisma db push
```

### Start the app

```shell
npm run dev
```
