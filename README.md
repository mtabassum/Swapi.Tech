## Star Wars Characters Webpage

This project fetches and displays Star Wars character information using the [SWAPI](https://www.swapi.tech/) API. The main page lists all characters and clicking on a character opens a dynamic detail page showing their personal information and the films they appeared in.

### **Features**

-   Displays a list of Star Wars characters.
    
-   Each character links to a **dynamic detail page**.
    
-   Detail page shows:
    
    -   Gender, Skin Color, Hair Color, Height, Eye Color, Mass, Birth Year
        
    -   Films (Title, Episode, Director, Release Date)

### **Folder Structure**

project-folder/  
│  
├── index.html          # Main page listing all characters  
├── character.html      # Detail page for each character  
├── style.css           # Styles for both pages  
├── index.js            # JS for main page  
└── character.js        # JS for detail page

### **Getting Started**

### **1. Clone the Repository**

git clone https://github.com/mtabassum/Swapi.Tech.git

### **2. Navigate to the project folder**

cd Swapi.Tech

### **3. Open the Project in a Browser**

Since this is a simple static site, you can open `index.html` directly in your browser.

> **Note:** Some browsers may block API requests when opening HTML files locally. It’s recommended to use a simple local server.

### **4. Run Using a Local Server (Recommended)**

#### **Using VS Code Live Server Extension**

1.  Install [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
    
2.  Open the project folder in VS Code.
    
3.  Right-click `index.html` → **Open with Live Server**

### **5. How to Use**

1.  Open the **main page** (`index.html`) to see the list of Star Wars characters.
    
2.  Click **“View Details”** for any character.
    
3.  The **detail page** dynamically loads character information and their films.

4.  Click **“Back to all characters”** to return to the main list of characters.