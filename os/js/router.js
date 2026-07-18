/*
==========================================
FLAVA OS
Router
Version 1.1
==========================================
*/

const Router = {

    init() {

        document.querySelectorAll(".module-card").forEach(card => {

            card.addEventListener("click", () => {

                const module = card.dataset.module;

                switch(module){

                    case "event":
                        EventModule.render();
                        break;

                    case "dashboard":
                        DashboardModule.render();
                        break;

                    case "kitchen":
                        KitchenModule.render();
                        break;

                    case "checkin":
                        CheckInModule.render();
                        break;

                    case "guest-list":
                        GuestListModule.render();
                        break;

                    default:
                        document.getElementById("module-container").innerHTML =
                        "<div class='card'><h2>Coming Soon</h2><p>This module is not available yet.</p></div>";

                }

            });

        });

        console.log("Router loaded.");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    Router.init();

});
