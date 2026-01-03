# AFCON 2025 AI Assistant – Frontend

## 📌 Overview
This is the **frontend application** of the **AFCON 2025 AI Assistant**, developed using **React**.  
It provides users with:
- A **statistics dashboard** for the AFCON tournament
- An **interactive AI chatbot interface** to ask questions in natural language

The frontend communicates with a Flask backend via REST APIs.

---

## 🎯 Features
- 📊 Display of AFCON tournament statistics
- 🤖 Chatbot interface powered by an AI backend
- ⚡ Fast and responsive user interface
- 🌐 Real-time communication with backend API

---

## 🛠️ Technologies Used
- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Fetch API / Axios

---

## 📂 Project Structure
```

src/
│── components/        # Reusable UI components
│── pages/             # Pages (Statistics, Chatbot)
│── services/          # API communication logic
│── App.js             # Main application component
│── main.jsx / index.js

````

---

## ▶️ Installation
Make sure you have **Node.js** installed.

```bash
npm install
````

---

## ▶️ Run the Application

```bash
npm run dev
```

The application will run on:

```
http://localhost:8080
```

(or another port depending on Vite configuration)

---
## 🤖 AI Chatbot Integration

The conversational AI chatbot used in this application is implemented as a separate service.

🔗 **Chatbot Backend Repository**:  
https://github.com/youssefmaimouni/can2025_chat.git

### Chatbot Features
- Retrieval-Augmented Generation (RAG) using AFCON historical and 2025 data
- Natural language question answering about:
  - AFCON 2025 tournament
  - Teams, squads, and coaches
  - Stadiums and referees
  - Historical AFCON match statistics
- SQL-based statistical queries combined with semantic search

### API Communication
The frontend communicates with the chatbot via the following endpoint:


## 🔗 Backend API Connection

Ensure the backend server is running.

Default backend URL:

```
http://127.0.0.1:5000
```

Chatbot endpoint used by the frontend:

```
POST /api/ask
```

Example request body:

```json
{
  "question": "Who won AFCON 2019?"
}
```

---

## 🚀 Future Enhancements

* Advanced data visualizations (charts)
* Multilingual interface (Arabic / French / English)
* Authentication and user profiles
* Improved UI/UX design

---

## 👤 Author

**Youssef Maimouni**

## 📅 Year

2026
