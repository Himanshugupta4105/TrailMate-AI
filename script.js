/* =====================================================
   TRAILMATE AI
   JavaScript
===================================================== */


/* =====================================================
   DATA
===================================================== */

const missions = {

    Walk: [
        {
            title: "Take a mindful walk",
            description:
                "Walk outside for 10 minutes. Notice three different sounds around you and one thing you have never noticed before.",
            time: "10 min",
            goal: "3 observations",
            icon: "🚶"
        },

        {
            title: "Find something yellow",
            description:
                "Walk around your area and find three naturally occurring yellow things. Notice where they are and why they caught your attention.",
            time: "15 min",
            goal: "3 discoveries",
            icon: "🌼"
        },

        {
            title: "Look up",
            description:
                "Take a 10-minute walk while looking at the sky, trees and buildings around you instead of your phone.",
            time: "10 min",
            goal: "10 min outside",
            icon: "☁️"
        }
    ],

    Hike: [
        {
            title: "Find the highest point",
            description:
                "Take a short hike and find the highest safe point you can reach. Observe how the view changes as you move.",
            time: "30 min",
            goal: "1 viewpoint",
            icon: "🥾"
        },

        {
            title: "Trail texture hunt",
            description:
                "Find three different natural textures: rough bark, smooth stone, soft grass or something else.",
            time: "20 min",
            goal: "3 textures",
            icon: "🪨"
        }
    ],

    Birding: [
        {
            title: "Listen before looking",
            description:
                "Sit quietly outside for five minutes. Listen for bird calls and try to count how many different sounds you hear.",
            time: "15 min",
            goal: "3 bird sounds",
            icon: "🐦"
        },

        {
            title: "Find a flying visitor",
            description:
                "Spend some time watching the sky and nearby trees. Look for birds and notice their movement.",
            time: "20 min",
            goal: "2 birds",
            icon: "🦅"
        }
    ],

    Nature: [
        {
            title: "Leaf detective",
            description:
                "Find three different leaves. Compare their shapes, sizes and textures.",
            time: "15 min",
            goal: "3 leaves",
            icon: "🍃"
        },

        {
            title: "Tiny world",
            description:
                "Look closely at the ground around you. Find one tiny natural detail you normally would not notice.",
            time: "10 min",
            goal: "1 discovery",
            icon: "🔎"
        }
    ]
};


/* =====================================================
   STATE
===================================================== */

let selectedActivity = "Walk";

let missionCompleted =
    Number(localStorage.getItem("missionCompleted")) || 0;

let outsideMinutes =
    Number(localStorage.getItem("outsideMinutes")) || 0;

let discoveries =
    Number(localStorage.getItem("discoveries")) || 0;

let streak =
    Number(localStorage.getItem("streak")) || 0;

let timerSeconds = 600;

let timerInterval = null;

let uploadedImage = false;


/* =====================================================
   ELEMENTS
===================================================== */

const activities =
    document.querySelectorAll(".activity");

const generateMission =
    document.getElementById("generateMission");

const missionTitle =
    document.getElementById("missionTitle");

const missionDescription =
    document.getElementById("missionDescription");

const missionTime =
    document.getElementById("missionTime");

const missionGoal =
    document.getElementById("missionGoal");

const missionIcon =
    document.querySelector(".mission-icon");

const completeMission =
    document.getElementById("completeMission");

const missionCount =
    document.getElementById("missionCount");

const outsideMinutesElement =
    document.getElementById("outsideMinutes");

const discoveryCount =
    document.getElementById("discoveryCount");

const streakCount =
    document.getElementById("streakCount");

const heroMissions =
    document.getElementById("heroMissions");

const heroMinutes =
    document.getElementById("heroMinutes");

const heroDiscoveries =
    document.getElementById("heroDiscoveries");

const imageInput =
    document.getElementById("imageInput");

const imagePreview =
    document.getElementById("imagePreview");

const analyzeBtn =
    document.getElementById("analyzeBtn");

const aiResult =
    document.getElementById("aiResult");

const timer =
    document.getElementById("timer");

const startTimerButton =
    document.getElementById("startTimer");

const resetTimerButton =
    document.getElementById("resetTimer");

const toast =
    document.getElementById("toast");

const toastMessage =
    document.getElementById("toastMessage");


/* =====================================================
   INITIALIZE
===================================================== */

updateProgress();

updateTimerDisplay();


/* =====================================================
   ACTIVITY SELECTION
===================================================== */

activities.forEach(activity => {

    activity.addEventListener("click", () => {

        activities.forEach(item => {
            item.classList.remove("active");
        });

        activity.classList.add("active");

        selectedActivity =
            activity.dataset.activity;

        showToast(
            `${selectedActivity} selected 🌿`
        );
    });

});


/* =====================================================
   GENERATE MISSION
===================================================== */

generateMission.addEventListener("click", generateNewMission);


function generateNewMission() {

    const list =
        missions[selectedActivity];

    const randomIndex =
        Math.floor(Math.random() * list.length);

    const mission =
        list[randomIndex];

    missionTitle.textContent =
        mission.title;

    missionDescription.textContent =
        mission.description;

    missionTime.textContent =
        mission.time;

    missionGoal.textContent =
        mission.goal;

    missionIcon.textContent =
        mission.icon;

    showToast(
        "New mission generated ✨"
    );
}


/* =====================================================
   COMPLETE MISSION
===================================================== */

completeMission.addEventListener(
    "click",
    () => {

        missionCompleted++;

        outsideMinutes += 10;

        streak++;

        saveProgress();

        updateProgress();

        showToast(
            "Mission completed! 🌿 Great job."
        );

        completeMission.textContent =
            "✓ Mission Completed";

        completeMission.disabled = true;

        setTimeout(() => {

            completeMission.textContent =
                "✓ Complete Mission";

            completeMission.disabled = false;

        }, 2500);

    }
);


/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

    missionCount.textContent =
        missionCompleted;

    outsideMinutesElement.textContent =
        outsideMinutes;

    discoveryCount.textContent =
        discoveries;

    streakCount.textContent =
        streak;

    heroMissions.textContent =
        missionCompleted;

    heroMinutes.textContent =
        outsideMinutes;

    heroDiscoveries.textContent =
        discoveries;
}


function saveProgress() {

    localStorage.setItem(
        "missionCompleted",
        missionCompleted
    );

    localStorage.setItem(
        "outsideMinutes",
        outsideMinutes
    );

    localStorage.setItem(
        "discoveries",
        discoveries
    );

    localStorage.setItem(
        "streak",
        streak
    );
}


/* =====================================================
   IMAGE UPLOAD
===================================================== */

imageInput.addEventListener(
    "change",
    function (event) {

        const file =
            event.target.files[0];

        if (!file) {
            return;
        }

        uploadedImage = true;

        const reader =
            new FileReader();

        reader.onload =
            function (e) {

                imagePreview.innerHTML =
                    `<img src="${e.target.result}" alt="Outdoor discovery">`;

            };

        reader.readAsDataURL(file);

        analyzeBtn.disabled = false;

        showToast(
            "Photo ready for AI analysis 📷"
        );
    }
);


/* =====================================================
   AI DISCOVERY
===================================================== */

analyzeBtn.addEventListener(
    "click",
    analyzeDiscovery
);


function analyzeDiscovery() {

    if (!uploadedImage) {
        return;
    }

    analyzeBtn.disabled = true;

    analyzeBtn.textContent =
        "AI is thinking...";

    aiResult.innerHTML = `

        <div class="ai-welcome">

            <div class="big-leaf">
                🧠
            </div>

            <h3>
                Analyzing your discovery...
            </h3>

            <p>
                TrailMate AI is looking closely.
            </p>

        </div>

    `;


    setTimeout(() => {

        const discoveriesList = [

            {
                icon: "🍃",
                name: "Green Leaf",
                confidence: "92% confidence",
                description:
                    "This looks like a healthy green leaf. Look at its shape, veins and edges. Try comparing it with another leaf nearby."
            },

            {
                icon: "🌿",
                name: "Wild Plant",
                confidence: "87% confidence",
                description:
                    "This appears to be a small outdoor plant. Notice the leaf arrangement and the environment where it is growing."
            },

            {
                icon: "🌼",
                name: "Wild Flower",
                confidence: "89% confidence",
                description:
                    "This looks like a small flowering plant. Observe its petals, color and the insects visiting it."
            },

            {
                icon: "🌳",
                name: "Tree Discovery",
                confidence: "91% confidence",
                description:
                    "This appears to be part of a tree. Compare its bark, leaves and overall structure with nearby trees."
            }

        ];


        const result =
            discoveriesList[
            Math.floor(
                Math.random() *
                discoveriesList.length
            )
            ];


        aiResult.innerHTML = `

            <div class="ai-analysis">

                <div class="result-icon">
                    ${result.icon}
                </div>

                <h3>
                    ${result.name}
                </h3>

                <span class="confidence">
                    ${result.confidence}
                </span>

                <p>
                    ${result.description}
                </p>

            </div>

        `;


        discoveries++;

        saveProgress();

        updateProgress();

        analyzeBtn.disabled = false;

        analyzeBtn.textContent =
            "✨ Analyze Again";

        showToast(
            "Discovery added to your journey 🔎"
        );

    }, 1800);

}


/* =====================================================
   TIMER
===================================================== */

startTimerButton.addEventListener(
    "click",
    startTimer
);


resetTimerButton.addEventListener(
    "click",
    resetTimer
);


function startTimer() {

    if (timerInterval !== null) {
        return;
    }

    startTimerButton.textContent =
        "Running...";

    timerInterval =
        setInterval(() => {

            if (timerSeconds <= 0) {

                clearInterval(
                    timerInterval
                );

                timerInterval = null;

                startTimerButton.textContent =
                    "Start";

                outsideMinutes += 10;

                saveProgress();

                updateProgress();

                showToast(
                    "Outdoor timer completed! 🌎"
                );

                return;
            }

            timerSeconds--;

            updateTimerDisplay();

        }, 1000);
}


function resetTimer() {

    clearInterval(
        timerInterval
    );

    timerInterval = null;

    timerSeconds = 600;

    startTimerButton.textContent =
        "Start";

    updateTimerDisplay();
}


function updateTimerDisplay() {

    const minutes =
        Math.floor(timerSeconds / 60);

    const seconds =
        timerSeconds % 60;

    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


/* =====================================================
   QUICK WALK
===================================================== */

function startQuickWalk() {

    document
        .getElementById("mission")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(() => {

        selectedActivity = "Walk";

        activities.forEach(
            activity => {

                activity.classList.remove(
                    "active"
                );

                if (
                    activity.dataset.activity ===
                    "Walk"
                ) {
                    activity.classList.add(
                        "active"
                    );
                }

            }
        );

        generateNewMission();

    }, 600);
}


/* =====================================================
   SCROLL TO MISSION
===================================================== */

function scrollToMission() {

    document
        .getElementById("mission")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {

    toastMessage.textContent =
        message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 2500);
}


/* =====================================================
   ONLINE / OFFLINE STATUS
===================================================== */

const offlineStatus =
    document.getElementById(
        "offlineStatus"
    );


function updateConnectionStatus() {

    if (navigator.onLine) {

        offlineStatus.innerHTML =
            `<span class="status-dot"></span> Online`;

    } else {

        offlineStatus.innerHTML =
            `<span class="status-dot"></span> Offline Ready`;

    }
}


window.addEventListener(
    "online",
    updateConnectionStatus
);

window.addEventListener(
    "offline",
    updateConnectionStatus
);

updateConnectionStatus();


/* =====================================================
   RANDOM QUOTE
===================================================== */

const quotes = [

    "The best adventures start when you put your phone down.",

    "Go outside. Look around. Notice something new.",

    "You don't need a perfect trail to explore.",

    "A ten-minute walk can change the way you see your day.",

    "The world is bigger than your screen.",

    "Slow down. Look closer. Touch grass."

];


const quote =
    quotes[
    Math.floor(
        Math.random() * quotes.length
    )
    ];


document.getElementById(
    "dailyQuote"
).textContent = quote;