# 🛡️ AI Safety Incident Log API

This is a RESTful backend API built for logging and managing hypothetical **AI Safety Incidents**.  

---

## 🚀 Tech Stack

- **Language:** JavaScript (ES6+)
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose ODM)
- **Environment Management:** dotenv

---

## 📁 Project Structure

```
ai-safety-backend/
├── controllers/
│   └── incident.controller.js
├── models/
│   └── incident.model.js
├── routes/
│   └── incident.route.js
├── db.js
├── server.js
├── .env
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/incident-log-api.git
cd ai-safety-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<YOUR_USERNAME>:<YOUR_PASSWORD>@<CLUSTER_URL>/<DATABASE_NAME>?retryWrites=true&w=majority&appName=<APP_NAME>
```

> ℹ️ Check `.env` for reference
Replace <YOUR_USERNAME>, <YOUR_PASSWORD>, <CLUSTER_URL>, <DATABASE_NAME>, and <APP_NAME> with your MongoDB details.
---

### 4. Configuring the Database Schema

In the **`models/incident.model.js`** file, the schema for the incidents is defined as follows:

```javascript
import mongoose from "mongoose";

const incidentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        enum: ["Low", "Medium", "High"],
        required: true
    },
    reported_at: {
        type: Date,
        default: Date.now
    }
});

const Incident = mongoose.model("Incident", incidentSchema);
export default Incident;
```

## ▶️ Run the Server

```bash
npm run start
```

Server will start at:  
📍 `http://localhost:5000`

---

## 📡 API Endpoints

All endpoints accept and return `application/json`.

---

### `GET api/incidents` — Get All Incidents

Returns a list of all incidents from the database.

---

### `POST api/incidents` — Create Incident

Create a new incident with the following body:

```json
{
  "title": "System Failure",
  "description": "AI misclassified critical object in surveillance.",
  "severity": "High"
}
```

---

### `GET api/incidents/:id` — Get Incident by ID

Returns a single incident by its unique ID.  
Returns `404` if not found.

---

### `DELETE /incidents/:id` — Delete Incident by ID

Deletes a specific incident by its ID.  
Returns `404` if not found.

---

## ⚠️ Validation & Error Handling

- Ensures all required fields are provided in requests.
- Validates severity must be either `"Low"`, `"Medium"`, or `"High"`.
- Uses proper HTTP status codes: `400`, `404`, `500`, `201`, and `200`.

---

## ✍️ Design Notes

- **Modular MVC** architecture with separate folders for models, controllers, and routes.
- Auto-generates `reported_at` timestamp using default `Date.now`.
- Tested all endpoints using **Postman**.
