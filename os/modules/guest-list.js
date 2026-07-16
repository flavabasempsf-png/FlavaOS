/*
==========================================
FLAVA OS
Guest List Module
Version 0.2.0
==========================================
*/

const GuestListModule = {

    render() {

        const container = document.getElementById("module-container");

        if (!container) return;

        const guests = GuestDatabase.guests;

        let html = `
            <section class="guest-list">

                <h2>👥 Guest List</h2>

                <p>Total Guests: ${guests.length}</p>

                <input
                    type="search"
                    id="guestSearch"
                    placeholder="Search guest..."
                >

                <div id="guestCards">
        `;

        guests.forEach(guest => {

            html += `
                <div class="guest-card">

                    <h3>${guest.name}</h3>

                    <p>${guest.group}</p>

                    <p>${guest.main}</p>

                    <button
                        onclick="CheckInModule.checkIn(${guest.id})">

                        Check In

                    </button>

                </div>
            `;

        });

        html += `
                </div>

            </section>
        `;

        container.innerHTML = html;

    }

};
