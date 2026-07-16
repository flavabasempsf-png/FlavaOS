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

        console.log("Flava OS v" + this.version);

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

        switch(module) {

            case "event":
                EventModule.render();
                break;

            case "dashboard":
                document.getElementById("module-container").innerHTML =
                    "<h2>📊 Dashboard</h2><p>Coming soon...</p>";
                break;

            case "kitchen":
                document.getElementById("module-container").innerHTML =
                    "<h2>👨‍🍳 Kitchen</h2><p>Coming soon...</p>";
                break;

            case "settings":
                document.getElementById("module-container").innerHTML =
                    "<h2>⚙️ Settings</h2><p>Coming soon...</p>";
                break;

            default:
                document.getElementById("module-container").innerHTML =
                    "<p>Module not found.</p>";

        }

    }

};

document.addEventListener("DOMContentLoaded", () => {

    FlavaOS.init();

});
