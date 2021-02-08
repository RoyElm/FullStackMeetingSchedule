const express = require("express");
const meetingLogic = require("../business-logic-layer/meeting-logic");

const router = express.Router();

router.get("/", async (request, response) => {
    try {
        const teams = await meetingLogic.getAllTeamsAsync();
        response.json(teams);
    } catch (error) {
        response.status(500).send(error.message);
    }
})

router.get("/:id", async (request, response) => {
    try {
        const teamId = +request.params.id;
        const meetings = await meetingLogic.getAllMeetingsByTeamAsync(teamId);
        response.json(meetings);
    } catch (error) {
        response.status(500).send(error.message);
    }
})

router.post("/", async (request, response) => {
    try {
        const meeting = request.body;
        const addedMeeting = await meetingLogic.addNewMeetingAsync(meeting);
        response.status(201).json(addedMeeting);
    } catch (error) {
        response.status(500).send(error.message);
    }
})

module.exports = router;