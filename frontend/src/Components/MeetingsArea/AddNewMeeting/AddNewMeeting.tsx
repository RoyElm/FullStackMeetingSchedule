import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import MeetingModel from '../Models/MeetingModel';
import "./AddNewMeeting.css";
import TeamModel from "../Models/TeamModel";

function AddNewMeeting(): JSX.Element {

    const { register, handleSubmit } = useForm<MeetingModel>();
    const [teams, setTeams] = useState<TeamModel[]>([]);
    const history = useHistory();

    useEffect(() => {
        (async function () {
            try {
                const response = await axios.get<TeamModel[]>("http://localhost:3001/api/meeting");
                const teams = response.data;
                setTeams(teams);
            } catch (error) {
                console.log(error.message);
            }
        })();
    }, [])

    async function sumbit(meeting: MeetingModel) {
        try {
            const response = await axios.post<MeetingModel>("http://localhost:3001/api/meeting", meeting);
            alert("Meeting successfully add, id:" + response.data.id);
            history.push("/meetings");

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="AddNewMeeting" key="AddNewMeeting">
            <div className="wrapper">
                <div className="title">
                    Create New Meeting
                </div>
                <form action="POST" onSubmit={handleSubmit(sumbit)}>
                    <div className="field">
                        <select name="teamId" defaultValue="0" ref={register({ required: true,validate: {
                            
                        } })}>
                            <option value="0" disabled>Select Product Category</option>
                            {teams.map(t =>
                                <option key={t.teamId} value={t.teamId} >
                                    {t.teamName}
                                </option>)}
                        </select>
                    </div>
                    <div className="field">
                        <input type="datetime-local" name="startMeeting" ref={register({ required: true })} />
                        <label>Start Meeting</label>
                    </div>
                    <div className="field">
                        <input type="datetime-local" name="endMeeting" ref={register({ required: true })} />
                        <label>End Meeting</label>
                    </div>
                    <div className="field">
                        <input type="text" name="description" ref={register({ required: true })} />
                        <label>Description</label>
                    </div>
                    <div className="field">
                        <input type="text" name="meetingRoom" ref={register({ required: true })} />
                        <label>Meeting Room</label>
                    </div>
                    <div className="field">
                        <input type="submit" value="Add" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddNewMeeting;
