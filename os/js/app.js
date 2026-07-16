/*
==========================================
FLAVA OS
Application Engine
Version 0.3.0
==========================================
*/

const FlavaOS = {

    version: "0.3.0",

    currentModule: "home",

    init() {

        console.log(`Flava OS v${this.version}`);

        this.bindNavigation();

    },

    bindNavigation() {

        document.querySelectorAll(".module-button").forEach(button => {

            button.addEventListener("click", () => {

                this.loadModule(button.dataset.module);

            });

        });

    },

    loadModule(module) {

        this.currentModule = module;

        const container = document.getElementById("module-container");

        switch (module) {

            case "event":
                EventModule.render();
                break;

            case "kitchen":
                container.innerHTML = `
                    <h2>👨‍🍳 Kitchen</h2>
                    <p>Kitchen module coming soon.</p>
                `;
                break;

            case "dashboard":
                container.innerHTML = `
                    <h2>📊 Dashboard</h2>
                    <p>Dashboard module coming soon.</p>
                `;
                break;

            case "settings":
                container.innerHTML = `
                    <h2>⚙️ Settings</h2>
                    <p>Settings module coming soon.</p>
                `;
                break;

            default:
                container.innerHTML = `
                    <p>Module not found.</p>
                `;

        }

    }

};

document.addEventListener("DOMContentLoaded", () => {

    FlavaOS.init();

});
