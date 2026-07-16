/*
==========================================
FLAVA OS
Check In Module
Version 0.4.0
==========================================
*/

const CheckInModule = {

    checkIn(id) {

        const guest = GuestDatabase.guests.find(g => g.id === id);

        if (!guest || guest.checkedIn) return;

        guest.checkedIn = true;

        guest.arrivalTime = new Date().toLocaleTimeString([], {

            hour: "2-digit",
            minute: "2-digit"

        });

        KitchenModule.addGuest(guest);

        GuestListModule.render();

        this.updateCounts();

    },

    updateCounts() {

        const total = GuestDatabase.guests.length;

        const checked = GuestDatabase.guests.filter(g => g.checkedIn).length;

        const remaining = total - checked;

        console.log("Guests:", total);
        console.log("Checked:", checked);
        console.log("Remaining:", remaining);

    }

};
