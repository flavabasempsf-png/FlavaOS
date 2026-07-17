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

    <div class="guest-card card fade-in ${guest.checkedIn ? "checked" : ""}">

        <div class="guest-info">

            <div class="guest-name">
                👤 ${guest.name}
            </div>

            <div class="group-name">
                ${guest.group}
            </div>

            <div class="ticket-number">
                🎫 ${guest.ticketNumber || "No Ticket"}
            </div>

            <div class="order-grid">

                <div class="order-item">
                    <span>Starter</span>
                    <strong>${guest.starter}</strong>
                </div>

                <div class="order-item">
                    <span>Main</span>
                    <strong>${guest.main}</strong>
                </div>

                <div class="order-item">
                    <span>Drink</span>
                    <strong>${guest.drink}</strong>
                </div>

            </div>

            ${
                guest.checkedIn
                ? `<div class="arrival-time">🕒 Arrived ${guest.arrivalTime}</div>`
                : ""
            }

        </div>

        <div class="card-actions">

            ${
                guest.checkedIn

                ? `<div class="badge checked">✅ Checked In</div>`

                : `<div class="badge waiting">Waiting</div>`

            }

            <button
                class="btn btn-primary"
                onclick="CheckInModule.checkIn(${guest.id})"
                ${guest.checkedIn ? "disabled" : ""}>

                ${guest.checkedIn ? "Checked In" : "Check In"}

            </button>

        </div>

    </div>

    `;

});
        
