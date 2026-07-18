/*
==========================================
FLAVA OS
Application Engine
Version 1.0.0
==========================================
*/

const FlavaOS = {

    version: "1.0.0",

    currentModule: "home",

    init() {

        console.log(`Flava OS v${this.version}`);

        this.bindNavigation();

    },

    bindNavigation() {

        document.querySelectorAll(".module-card").forEach(card => {

            card.addEventListener("click", () => {

                const module = card.dataset.module;

                this.loadModule(module);

            });

        });

    },

    loadModule(module) {

        this.currentModule = module;

        switch (module) {

            case "event":

                if (typeof EventModule !== "undefined") {
                    EventModule.render();
                }

                break;

            case "kitchen":

                if (typeof KitchenModule !== "undefined") {
                    KitchenModule.render();
                }

                break;

            case "dashboard":

                if (typeof DashboardModule !== "undefined") {
                    DashboardModule.render();
                }

                break;

            case "guest-list":

                if (typeof GuestListModule !== "undefined") {
                    GuestListModule.render();
                }

                break;

            case "checkin":

                if (typeof CheckInModule !== "undefined") {
                    CheckInModule.render();
                }

                break;

            case "settings":

                document.getElementById("module-container").innerHTML = `
                    <div class="card">
                        <h2>⚙️ Settings</h2>
                        <p>Settings module coming soon.</p>
                    </div>
                `;

                break;

            default:

                document.getElementById("module-container").innerHTML = `
                    <div class="card">
                        <h2>Module Not Found</h2>
                        <p>Please check your configuration.</p>
                    </div>
                `;

        }

    }

};

document.addEventListener("DOMContentLoaded", () => {

    FlavaOS.init();

});
