# myPOS App

A modern Point of Sale (POS) system built with React.js and JSON Server. This application provides a complete solution for managing products, processing orders, and generating receipts.

## 🚀 Live Demo

**Production URL:** [https://main.d139itpg7gxdkm.amplifyapp.com/](https://main.d139itpg7gxdkm.amplifyapp.com/)

## 📋 Features

- **Product Management**: Browse and manage product catalog
- **Shopping Cart**: Add/remove items with real-time calculations
- **Receipt Generation**: Print receipts with order details
- **Order Queue**: Track and manage pending orders
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Live product and cart synchronization

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Backend**: JSON Server (Mock API)
- **Styling**: Bootstrap CSS
- **Print**: React-to-Print, jsPDF
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Deployment**: AWS Amplify
- **Containerization**: Docker

## 📁 Project Structure

```
myPOS-app/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── print/        # Print-related components
│   │   ├── Cart.jsx      # Shopping cart component
│   │   ├── ProductList.jsx # Product display component
│   │   └── ComponentToPrint.jsx # Receipt template
│   ├── hooks/            # Custom React hooks
│   │   ├── useCart.js    # Cart management logic
│   │   └── useProducts.js # Product fetching logic
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   ├── POS.jsx       # Main POS interface
│   │   └── OrderQueue.jsx # Order management
│   ├── services/         # API services
│   └── App.js           # Main application component
├── db.json              # Mock database
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose setup
└── package.json         # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd myPOS-app
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   yarn server
   ```
   This starts the mock API server on `http://localhost:8000`

4. **Start the React App (Frontend)**
   ```bash
   yarn start
   ```
   This starts the development server on `http://localhost:3000`

### Available Scripts

- `yarn start` - Start the React development server
- `yarn server` - Start the JSON Server backend
- `yarn build` - Build the app for production
- `yarn test` - Run the test suite
- `yarn eject` - Eject from Create React App

## 🐳 Docker Setup

### Using Docker Compose (Recommended)

```bash
# Build and start both services
docker-compose up --build

# Run in detached mode
docker-compose up -d --build
```

### Using Docker directly

```bash
# Build the image
docker build -t mypos-app .

# Run the container
docker run -p 3001:3000 -p 8001:8000 mypos-app
```

## 📊 API Endpoints

The JSON Server provides the following endpoints:

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch a specific product
- `POST /products` - Create a new product
- `PUT /products/:id` - Update a product
- `DELETE /products/:id` - Delete a product

### Sample Product Data

```json
{
  "id": 123,
  "name": "Orange",
  "price": "2",
  "image": "https://example.com/orange.jpg"
}
```

## 🎯 Usage

### Main POS Interface

1. Navigate to `/pos` to access the main POS system
2. Browse products in the left panel
3. Click on products to add them to the cart
4. Review items in the cart on the right panel
5. Click "Print Receipt" to generate a receipt

### Order Management

1. Navigate to `/order-queue` to view pending orders
2. Track order status and manage queue

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=http://localhost:8000
NODE_ENV=development
```

### JSON Server Configuration

The `json-server.json` file contains server configuration:

```json
{
  "port": 8000,
  "watch": true,
  "static": "./public"
}
```

## 🚀 Deployment

### AWS Amplify (Current)

The app is deployed on AWS Amplify with automatic builds from the main branch.