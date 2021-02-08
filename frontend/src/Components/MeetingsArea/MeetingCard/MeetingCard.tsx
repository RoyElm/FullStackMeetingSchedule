import React from "react";
import "./MeetingCard.css";
import MeetingModel from '../Models/MeetingModel';

interface MeetingProps {
    meeting: MeetingModel;
}

function MeetingCard(props: MeetingProps): JSX.Element {
    return (
        <div className="MeetingCard">
            <h3>{props.meeting.teamName}</h3>
            Start Meeting: {props.meeting.startMeeting.replace("T", " ").replace(".000Z", "")}
            <br />
            End Meeting: {props.meeting.endMeeting.replace("T", " ").replace(".000Z", "")}
            <br />
            Description: {props.meeting.description}
            <br />
            Meeting Room: {props.meeting.meetingRoom}
        </div>
    );
}

export default MeetingCard;
