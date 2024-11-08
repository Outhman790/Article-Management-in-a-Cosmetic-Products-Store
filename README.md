README.md

# Product Management System

A responsive web-based product management system that allows users to create, read, update, and delete product information with form validation and local storage functionality.

## 🚀 Features

- Create, read, update, and delete product entries
- Real-time form validation
- Data persistence using Local Storage
- Responsive design for all screen sizes
- Modal confirmation for delete operations
- Input validation for:
  - Product name
  - Brand name
  - Price
  - Production date
  - Product type
  - Promotion status

## 💻 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Local Storage API

## 📋 Product Information Fields

- Name
- Brand (Marque)
- Price
- Production Date
- Product Type Categories:
  - Hygiène et toilette
  - Soins esthétiques
  - Produits solaires
  - Beauté des mains et des pieds
  - Produits de maquillage
  - Entretien capillaires
  - Parfums
- Promotion Status (Yes/No)

## 🎯 Form Validation Rules

- Name and Brand: Must contain only letters, spaces, hyphens, or apostrophes
- Price: Must contain only numbers
- Date: Cannot be empty
- Type: Must be selected from provided options
- Promotion: Must select either Yes or No

## 📱 Responsive Design

The application is fully responsive with specific styling for different screen sizes:

- Desktop (1000px+)
- Tablet (800px - 1000px)
- Small Tablet (600px - 800px)
- Mobile (400px - 600px)
- Small Mobile (< 400px)

## 🛠️ Project Structure

```
├── index.html          # Main HTML structure
├── css/
│   └── style.css      # Styling and responsive design
├── js/
│   ├── script.js      # Main application logic
│   ├── style.js       # Error/Success handling functions
│   └── validation.js  # Form validation functions
```

## 💾 Data Persistence

The application uses the browser's Local Storage to persist data. Products are stored in JSON format and automatically loaded when the page is refreshed.

## 🎨 Styling

- Custom color scheme with primary color `#388c73`
- Font family: Lato (400, 700, 900 weights)
- Background color: `#b2e6fd`
- Responsive table design
- Interactive buttons with hover effects
- Modal overlay with blur effect
