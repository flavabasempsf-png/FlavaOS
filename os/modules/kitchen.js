/*
==========================================
FLAVA OS
Kitchen Module
Version 0.1.0
==========================================
*/

const KitchenModule = {

    orders: [],

    addGuest(guest) {

        this.orders.push({

            id: guest.id,
            name: guest.name,
            starter: guest.starter,
            main: guest.main,
            drink: guest.drink,
            status: "Waiting"

        });

    },

    render() {

        const container = document.getElementById("module-container");

        if (!container) return;

        let html = `
            <section class="kitchen">

                <h2>🍛 Kitchen Queue</h2>
        `;

        if (this.orders.length === 0) {

            html += "<p>No orders waiting.</p>";

        } else {

            this.orders.forEach(order => {

                html += `
                    <div class="guest-card">

                        <h3>${order.name}</h3>

                        <p><strong>Starter:</strong> ${order.starter}</p>

                        <p><strong>Main:</strong> ${order.main}</p>

                        <p><strong>Drink:</strong> ${order.drink}</p>

                        <p><strong>Status:</strong> ${order.status}</p>

                    </div>
                `;

            });

        }

        html += "</section>";

        container.innerHTML = html;

    }

};
