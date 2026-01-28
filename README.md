
---

# 🎸 NiN Systems - Music & Event Management

**NiN Systems** is a premium, full-service event production and management platform. Specializing in high-impact musical festivals and live events, the platform allows users to explore professional event services—from stage design and live streaming to crystal-clear audio solutions—and book them seamlessly.

🔗 **Live Site:** [music-events-managements.web.app](https://music-events-managements.web.app/)

🔗 **GitHub Repo:** [github.com/najatul6/music-festival](https://github.com/najatul6/music-festival)

---

## ✨ Key Features

* **Professional Event Services:** Detailed listings for Live Streaming, Stage Design, Audio Engineering, Lighting, and Scenic Elements.
* **Service Details & Booking:** In-depth information for each service including tiered pricing and "Book Now" functionality.
* **User Authentication:** Secure access using **Firebase Authentication**, supporting Google Social Login and Email-based registration.
* **Interactive UI/UX:**
* **AOS (Animate On Scroll):** Smooth scroll animations for a modern feel.
* **Dynamic Gallery:** Visual showcase of past events and production setups.
* **Responsive Design:** Fully optimized for mobile, tablet, and desktop using **Tailwind CSS** and **DaisyUI**.


* **Location Integration:** Integrated maps for event locations via `google-map-react`.
* **Engagement:** Customer feedback/testimonial section to showcase user experiences.

---

## 🛠️ Tech Stack

### Frontend

* **React.js** (Vite for lightning-fast development)
* **React Router DOM v6** (Navigation and protected routing)
* **Tailwind CSS** (Utility-first styling)
* **DaisyUI** (Professional UI component library)

### Backend & Services

* **Firebase:** Authentication and hosting.
* **AOS:** Scroll animation library.
* **SweetAlert2:** Elegant popup notifications for user actions.
* **React Icons:** High-quality vector icons.

---

## 📦 Installation & Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/najatul6/music-festival.git
cd music-festival

```


2. **Install dependencies:**
```bash
npm install

```


3. **Setup Environment Variables:**
Create a `.env.local` file in the root directory and add your Firebase credentials:
```env
VITE_apiKey=your_api_key
VITE_authDomain=your_auth_domain
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messaging_sender_id
VITE_appId=your_app_id

```


4. **Run the application:**
```bash
npm run dev

```



---

## 🏗️ Project Structure

```text
├── src
│   ├── components  # Header, Footer, ServiceCard, Testimonials
│   ├── layouts     # Main layout structure
│   ├── pages       # Home, ServiceDetails, Login, Register, Gallery
│   ├── providers   # AuthProvider for global user state
│   ├── routes      # Public and Private route configuration
│   └── assets      # Images, Lottie files, and static content

```

---

## 🚀 Available Scripts

* `npm run dev` – Starts the development server.
* `npm run build` – Optimized production build.
* `npm run lint` – Run ESLint to ensure code quality.
* `npm run preview` – Preview the production build locally.

---

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Md Najatul Islam**

* Portfolio: [Najatul isalm](https://najatul-islam.vercel.app/)
* GitHub: [@najatul6](https://github.com/najatul6)

---

*Created with passion for music and event production.*