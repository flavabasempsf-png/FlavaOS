/*
==========================================
FLAVA OS
Check In Module
Version 0.2.0
==========================================
*/

const CheckInModule = {

    checkIn(id) {

        const guest = GuestDatabase.guests.find(g => g.id === id);

        if (!guest) return;

        guest.checkedIn = true;

        GuestListModule.render();

        this.updateCounts();

    },

    updateCounts() {

        const total = GuestDatabase.guests.length;

        const checked = GuestDatabase.guests.filter(g => g.checkedIn).length;

        const remaining = total - checked;

        console.log("Guests:", total);
        console.log("Checked In:", checked);
        console.log("Remaining:", remaining);

    }

};
