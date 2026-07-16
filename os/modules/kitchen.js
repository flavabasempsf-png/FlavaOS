/*
==========================================
FLAVA OS
Kitchen Module
Version 0.2.0
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

    updateStatus(id) {

        const order = this.orders.find(o => o.id === id);

        if (!order) return;

        switch (order.status) {

            case "Waiting":
                order.status = "Cooking";
                break;

            case "Cooking":
                order.status = "Ready";
                break;

            case "Ready":
                order.status = "Served";
                break;

        }

        this.render();

    },

    render() {

        const container = document.getElementById("module-container");

        if (!container) return;

        let html = `
            <section class="kitchen">

                <h2>🍛 Kitchen Queue</h2>

                <p>Total Orders: ${this.orders.length}</p>
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

                        <button onclick="KitchenModule.updateStatus(${order.id})">

                            Next Stage

                        </button>

                    </div>
                `;

            });

        }

        html += "</section>";

        container.innerHTML = html;

    }

};
