/*
==========================================
FLAVA OS
Guest List Module
Version 0.3.1
==========================================
*/

const GuestListModule = {

    render(search = "") {

        const container = document.getElementById("module-container");

        if (!container) return;

        const guests = GuestDatabase.guests.filter(guest =>

            guest.name.toLowerCase().includes(search.toLowerCase()) ||
            guest.group.toLowerCase().includes(search.toLowerCase())

        );

        let html = `
            <section class="guest-list">

                <h2>👥 Guest List</h2>

                <p>Total Guests: ${GuestDatabase.guests.length}</p>

                <input
                    type="search"
                    id="guestSearch"
                    placeholder="Search guest..."
                    value="${search}"
                >

                <div id="guestCards">
        `;

        guests.forEach(guest => {

            html += `
                <div class="guest-card ${guest.checkedIn ? "checked" : ""}">

                    <h3>${guest.name}</h3>

                    <p><strong>Group:</strong> ${guest.group}</p>

                    <p><strong>Starter:</strong> ${guest.starter}</p>

                    <p><strong>Main:</strong> ${guest.main}</p>

                    <p><strong>Drink:</strong> ${guest.drink}</p>

                    ${
                        guest.checkedIn
                            ? `<p><strong>Arrived:</strong> ${guest.arrivalTime}</p>`
                            : ""
                    }

                    <button
                        onclick="CheckInModule.checkIn(${guest.id})"
                        ${guest.checkedIn ? "disabled" : ""}>

                        ${guest.checkedIn ? "✅ Checked In" : "Check In"}

                    </button>

                </div>
            `;

        });

        html += `
                </div>

            </section>
        `;

        container.innerHTML = html;

        document
            .getElementById("guestSearch")
            .addEventListener("input", (e) => {

                GuestListModule.render(e.target.value);

            });

    }

};
