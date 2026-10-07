# 🌿 TrailMate AI

> **Less screen. More world.**

TrailMate AI is an outdoor companion designed to encourage people to spend less time on screens and more time exploring the real world.

It gives users simple outdoor missions such as walking, hiking, birding, and nature observation. Users can complete these missions outside, upload photos of their discoveries, and track their outdoor progress.

The project is being developed for the **Hacktoberfest Open-Source AI Challenge — Week 1: Touch Grass**.

---

## 🌎 The Problem

People spend a large amount of time looking at screens, even when they could be exploring the world around them.

Many applications are designed to keep users inside the app for as long as possible.

TrailMate AI takes the opposite approach.

Instead of asking users to spend more time inside the application, TrailMate is designed to make the **screen the shortest part of the experience**.

The goal is simple:

> Open the app → get an outdoor mission → put the phone away → go outside → explore → come back and learn.

---

# 💡 The Idea

TrailMate AI turns outdoor activities into small, achievable adventures.

A user can choose an activity such as:

* 🚶 Walking
* 🥾 Hiking
* 🐦 Birding
* 🌿 Nature exploration

TrailMate then provides an outdoor mission.

### Example

A user chooses:

**Birding 🐦**

TrailMate can give them a mission such as:

> Spend 15 minutes outside. Listen carefully and try to identify three different bird sounds.

The user then puts the phone away and completes the mission.

After returning, they can record their discovery and continue building their outdoor progress.

---

# ✨ Features

## 🎯 Outdoor Missions

Users can select an outdoor activity and generate a mission.

Available activities include:

* Walking
* Hiking
* Birding
* Nature exploration

Each mission contains:

* Mission title
* Description
* Recommended time
* Goal
* Activity type

---

## ⏱️ Outdoor Timer

TrailMate includes an outdoor timer that encourages users to put their phone away.

For example:

```text
10:00

Start
   ↓
Put your phone away
   ↓
Explore outside
   ↓
Come back when the timer ends
```

The purpose of the timer is not to encourage more screen time.

It is designed to encourage **less screen time**.

---

## 📷 Nature Discovery

Users can upload a photo of something they discovered outside.

Possible discoveries include:

* Leaves
* Plants
* Flowers
* Trees
* Birds
* Natural objects

The interface is designed around the idea of using AI to help users understand what they discovered.

---

## 🤖 AI Nature Assistant

TrailMate includes an AI assistant interface called:

**TrailMate AI — Nature Assistant**

The planned AI system can help answer questions such as:

* What did I find?
* What type of plant is this?
* What should I observe?
* What makes this discovery interesting?
* What outdoor activity should I try next?

The long-term version will use an **open-weight/open-source AI model** rather than making a closed AI API the core of the application.

---

## 📊 Outdoor Progress

TrailMate tracks the user's outdoor activity.

The dashboard can display:

* Missions completed
* Minutes spent outside
* Discoveries made
* Outdoor streak

Example:

```text
🌱 Missions completed     5

⏱️ Time outside           70 min

🔎 Discoveries             3

🔥 Outdoor streak          4 days
```

Progress data is stored locally using browser `localStorage`.

---

## 📱 Responsive Design

TrailMate is designed to work on:

* Desktop
* Laptop
* Tablet
* Mobile

The interface automatically adjusts to smaller screens.

---

# 🧠 Why Open-Source AI Matters

Open innovation is an important part of TrailMate AI.

The goal is not simply to add an AI chatbot to an outdoor website.

The AI should actually help make outdoor exploration more useful while keeping the user experience lightweight and privacy-friendly.

An open AI approach can provide several advantages.

### 🔐 Privacy

Outdoor discoveries can include photos, locations, and personal information.

With local or self-hosted AI inference, sensitive information does not necessarily need to be sent to a third-party AI provider.

---

### 📡 Offline Possibility

One of the most important goals of TrailMate is outdoor use.

Outdoor locations may have:

* Poor internet
* No mobile signal
* Limited connectivity

An open-weight model that can run locally makes it possible to build toward an experience that works without continuous internet access.

---

### 🔄 Model Freedom

With an open model, developers can potentially:

* Replace the model
* Experiment with different models
* Fine-tune models
* Change prompts
* Modify the AI pipeline
* Run the model locally

This reduces dependence on one closed AI provider.

---

### 💰 Lower Running Cost

A locally running model can reduce API costs because inference can happen on the user's own hardware.

This is especially useful for an application intended to be accessible to students and outdoor enthusiasts.

---

# 🏗️ Project Architecture

The current frontend is built using three main files:

```text
TrailMate-AI/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

### `index.html`

Responsible for the structure of the application.

It contains:

* Navigation
* Hero section
* Mission section
* Activity selection
* Outdoor timer
* Discovery section
* AI interface
* Progress section
* Footer

---

### `style.css`

Responsible for the visual design.

It handles:

* Layout
* Colors
* Typography
* Buttons
* Cards
* Responsive design
* Animations/transitions
* Mobile layout

---

### `script.js`

Responsible for the application logic.

It handles:

* Activity selection
* Mission generation
* Mission completion
* Timer
* Image upload
* Discovery interface
* Progress tracking
* `localStorage`
* Online/offline status
* Notifications

---

# 🔄 How TrailMate Works

The basic user journey is:

```text
                 Open TrailMate
                       │
                       ↓
              Choose an activity
                       │
          ┌────────────┼────────────┐
          ↓            ↓            ↓
        Walk         Hike        Birding
          │            │            │
          └────────────┼────────────┘
                       ↓
                Generate Mission
                       │
                       ↓
                 Go Outside 🌿
                       │
                       ↓
                Complete Mission
                       │
                       ↓
                Discover Something
                       │
                       ↓
                  Take a Photo
                       │
                       ↓
                    AI Help
                       │
                       ↓
                Track Progress
```

The most important step is:

> **Go Outside**

The application should support the outdoor experience rather than become the experience itself.

---

# 🛠️ Technology Stack

## Current Frontend

| Technology   | Purpose                            |
| ------------ | ---------------------------------- |
| HTML5        | Website structure                  |
| CSS3         | Styling and responsive design      |
| JavaScript   | Application functionality          |
| LocalStorage | Local progress storage             |
| File API     | Image upload                       |
| Browser APIs | Timer and online/offline detection |

No frontend framework is currently required.

There is no React, Angular, Vue, or other framework in the current prototype.

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/TrailMate-AI.git
```

Replace `YOUR-USERNAME` with your GitHub username.

---

## 2. Open the project

```bash
cd TrailMate-AI
```

---

## 3. Open the website

You can simply open:

```text
index.html
```

in your browser.

Alternatively, use the **Live Server** extension in VS Code.

### VS Code method

1. Open the project folder in VS Code.
2. Install **Live Server** if you don't already have it.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The application will open in your browser.

---

# 🖥️ Running the Project

The current frontend does not require:

* Database
* Backend server
* API key
* Environment variables

The basic prototype runs directly in the browser.

---

# 📸 Project Experience

The application is designed around a simple principle:

### Before going outside

The user opens TrailMate.

### During the activity

The user receives a short mission and puts the phone away.

### After exploring

The user can return to the application and record a discovery.

### Over time

TrailMate tracks their outdoor progress.

---

# 🤖 Current AI Status

The current three-file prototype contains an **AI-style demonstration interface** so that the complete frontend can run without an external API.

The discovery responses in this prototype are simulated.

For example, the current prototype may display:

```text
Green Leaf
92% confidence

This looks like a healthy green leaf...
```

This is currently a demonstration of the intended experience, not a real computer-vision prediction.

### Planned AI implementation

The next version will replace the simulated discovery system with a real open-weight AI model.

The target architecture is:

```text
User Photo
    │
    ↓
Open-Weight Vision Model
    │
    ↓
Nature Identification
    │
    ↓
Open-Weight Language Model
    │
    ↓
Explanation / Outdoor Mission
```

This will make open-source AI a core part of the actual application.

---

# 🔮 Future Roadmap

## Phase 1 — Frontend Prototype

* [x] Landing page
* [x] Activity selection
* [x] Outdoor missions
* [x] Mission completion
* [x] Outdoor timer
* [x] Image upload
* [x] AI interface
* [x] Progress tracking
* [x] LocalStorage
* [x] Responsive design

---

## Phase 2 — Real Open AI

* [ ] Select an open-weight language model
* [ ] Select an open-weight vision model
* [ ] Connect the frontend to the AI layer
* [ ] Generate missions dynamically
* [ ] Analyze outdoor photos
* [ ] Generate explanations
* [ ] Replace simulated AI responses

---

## Phase 3 — Offline AI

* [ ] Local model inference
* [ ] Offline mission generation
* [ ] Offline image analysis
* [ ] Local discovery history
* [ ] Reduce dependence on internet connectivity

---

## Phase 4 — Outdoor Intelligence

Future versions could include:

* 🗺️ Trail suggestions
* 🌳 Plant identification
* 🐦 Bird identification
* 🌦️ Outdoor conditions
* 🥾 Hiking challenges
* 🌅 Sunrise/sunset-based missions
* 🍂 Seasonal nature missions
* 📍 Local exploration
* 🏃 Running challenges
* 🚲 Cycling missions

---

# 🔒 Privacy Philosophy

TrailMate is designed around a privacy-first approach.

The long-term goal is to keep as much information as possible on the user's device.

Potentially sensitive information includes:

* Photos
* Location
* Outdoor activity
* Discovery history
* Personal progress

The project aims to minimize unnecessary transmission of this information to external servers.

---

# 🌱 Design Philosophy

TrailMate follows three principles.

### 1. Screen should be the shortest part

The app should not encourage endless scrolling.

The user should quickly get a mission and leave the screen.

---

### 2. Small adventures matter

Not everyone has access to mountains, forests or hiking trails.

An outdoor adventure can be as simple as:

* Walking around the neighborhood
* Looking at the sky
* Finding different leaves
* Listening to birds
* Observing trees
* Exploring a local park

---

### 3. AI should help people experience the world

The purpose of AI is not to keep the user talking to AI.

Instead:

> **AI helps the user understand the real world.**

---

# 🎯 Challenge Connection

TrailMate AI was built for the:

**Hacktoberfest Open-Source AI Challenge — Week 1: Touch Grass**

The challenge asks developers to build something with open-source/open-weight AI that helps people get off the screen and into the world.

TrailMate directly addresses this goal.

```text
AI
 ↓
Outdoor Mission
 ↓
Phone Down
 ↓
Real World
 ↓
Explore
 ↓
Learn
```

The screen is the starting point, not the destination.

---

# 🏆 Why TrailMate Is Different

Traditional AI applications often encourage users to spend more time interacting with a screen.

TrailMate takes the opposite approach.

| Traditional AI App      | TrailMate AI             |
| ----------------------- | ------------------------ |
| More screen time        | Less screen time         |
| AI conversation         | Real-world activity      |
| Stay inside the app     | Leave the app            |
| Digital experience      | Physical exploration     |
| Cloud-first possibility | Local/offline-first goal |
| Passive interaction     | Outdoor action           |

---

# 🤝 Contributing

Contributions are welcome.

If you want to contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git add .
git commit -m "Add new outdoor mission"
```

5. Push your branch.

```bash
git push origin feature/new-feature
```

6. Open a Pull Request.

---

# 💡 Possible Contribution Ideas

You can contribute by adding:

* New outdoor missions
* New activity types
* Better responsive design
* Accessibility improvements
* Open-weight AI integration
* Plant identification
* Bird identification
* Offline functionality
* Trail recommendations
* New progress features
* Localization/language support

---

# 📜 License

This project is intended as an open-source project.

A suitable open-source license can be added to the repository, such as the MIT License.

---

# 👨‍💻 Author

Built as an open-source AI project for the **Touch Grass** challenge.

**TrailMate AI**

> 🌿 Less screen. More world.

---

## ⭐ If you like the idea

Give the repository a ⭐ on GitHub and consider contributing.

The goal is simple:

**Build technology that helps people spend more time experiencing the world instead of staring at it.**
