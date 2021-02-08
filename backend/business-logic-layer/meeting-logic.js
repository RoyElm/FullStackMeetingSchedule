const dal = require("../data-access-layer/dal");


async function getAllTeamsAsync() {
    const sql = `SELECT * FROM teams`;
    const teams = await dal.executeAsync(sql);
    return teams;
}

async function getAllMeetingsByTeamAsync(teamId) {
    const sql = `SELECT id,t.teamName,startMeeting,endMeeting,description,meetingRoom
                 FROM meetingSchedules as m LEFT JOIN teams as t 
                 ON m.teamId = t.teamId WHERE m.teamId = ?`;
    const meetings = await dal.executeAsync(sql, [teamId]);
    return meetings;
}

async function addNewMeetingAsync(meeting) {
    const sql = `INSERT INTO meetingSchedules VALUES(DEFAULT,?,?,?,?,?)`;
    const info = await dal.executeAsync(sql,
        [meeting.teamId, meeting.startMeeting, meeting.endMeeting, meeting.description, meeting.meetingRoom]);
    meeting.id = info.insertId;
    return meeting;
}

module.exports = {
    getAllTeamsAsync,
    getAllMeetingsByTeamAsync,
    addNewMeetingAsync,
}