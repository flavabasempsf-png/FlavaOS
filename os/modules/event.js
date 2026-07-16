/*
==========================================
FLAVA OS
Event Control Module
Version 0.3.0
==========================================
*/

const EventModule = {

    render() {

        const container = document.getElementById("module-container");

        if (!container) return;

        const total = GuestDatabase.guests.length;
        const checked = GuestDatabase.guests.filter(g => g.checkedIn).length;
        const remaining = total - checked;

        container.innerHTML = `

            <section class="event-control">

                <h2>🎟️ Event Control</h2>

                <div class="event-summary">

                    <div class="summary-card">
                        <strong>Total Guests</strong>
                        <span>${total}</span>
                    </div>

                    <div class="summary-card">
                        <strong>Checked In</strong>
                        <span>${checked}</span>
                    </div>

                    <div class="summary-card">
                        <strong>Remaining</strong>
                        <span>${remaining}</span>
                    </div>

                </div>

                <button id="openGuestList" class="module-button">
                    👥 Open Guest List
                </button>

            </section>

        `;

        document
            .getElementById("openGuestList")
            .addEventListener("click", () => {

                GuestListModule.render();

            });

    }

};
