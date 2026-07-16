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

        console.log("Flava OS v1.0.0");

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

        if (module === "event") {

            EventModule.init();
            return;

        }

        const container = document.getElementById("module-container");

        container.innerHTML = `

            <h2>${module}</h2>

            <p>This module is under development.</p>

        `;

    }

};

document.addEventListener("DOMContentLoaded", () => {

    FlavaOS.init();

});
