/*
==========================================
FLAVA OS
Event Control Module
Version 1.0.0
==========================================
*/

const EventModule = {

    event: {

        name: "Flava Base Launch Party",

        date: "18 July 2026",

        venue: "Molesworth Village Hall",

        expectedGuests: 35,

        checkedIn: 0

    },

    init() {

        this.render();

    },

    render() {

        const container =
            document.getElementById("module-container");

        if (!container) return;

        container.innerHTML = `

        <section class="event-module">

            <h2>🎟️ Event Control</h2>

            <div class="event-summary">

                <p><strong>Event:</strong> ${this.event.name}</p>

                <p><strong>Date:</strong> ${this.event.date}</p>

                <p><strong>Venue:</strong> ${this.event.venue}</p>

                <p><strong>Expected Guests:</strong> ${this.event.expectedGuests}</p>

                <p><strong>Checked In:</strong>
                    <span id="checkedInCount">${this.event.checkedIn}</span>
                </p>

            </div>

            <div class="event-actions">

                <button id="openGuestList" class="module-button">
                    👥 Guest List
                </button>

                <button id="openKitchen" class="module-button">
                    👨‍🍳 Kitchen
                </button>

                <button id="eventReport" class="module-button">
                    📊 Live Report
                </button>

            </div>

        </section>

        `;

        this.bindButtons();

    },

    bindButtons() {

        document
            .getElementById("openGuestList")
            ?.addEventListener("click", () => {

                alert("Guest List module coming next.");

            });

        document
            .getElementById("openKitchen")
            ?.addEventListener("click", () => {

                alert("Kitchen module coming soon.");

            });

        document
            .getElementById("eventReport")
            ?.addEventListener("click", () => {

                alert("Dashboard coming soon.");

            });

    }

};
