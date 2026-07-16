/*
==========================================
FLAVA OS
Version 1.0.0

Application Engine
==========================================
*/

const FlavaOS = {

    version: "1.0.0",

    appName: "Flava OS",

    currentModule: "home",

    init() {

        console.log(
            `${this.appName} v${this.version} started`
        );

        this.bindNavigation();

        this.showWelcome();

    },

    bindNavigation() {

        const buttons =
            document.querySelectorAll(".module-button");

        buttons.forEach(button => {

            button.addEventListener("click", () => {

                const module =
                    button.dataset.module;

                this.loadModule(module);

            });

        });

    },

    loadModule(module) {

        this.currentModule = module;

        const container =
            document.getElementById("module-container");

        container.innerHTML = `
            <h3>${module}</h3>
            <p>
                Module coming in the next commit...
            </p>
        `;

        console.log(
            "Loaded module:",
            module
        );

    },

    showWelcome() {

        console.log(
            "Welcome to Flava OS"
        );

    }

};

document.addEventListener(
    "DOMContentLoaded",
    () => {

        FlavaOS.init();

    }
);
