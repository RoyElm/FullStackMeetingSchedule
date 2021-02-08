import React, { Component } from "react";
import "./MeetingsList.css";
import MeetingModel from '../Models/MeetingModel';
import TeamModel from '../Models/TeamModel';
import axios from "axios";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import MeetingCard from '../MeetingCard/MeetingCard';

interface MeetingsListState {
    meetings: MeetingModel[];
    teams: TeamModel[];
}

class MeetingsList extends Component<{}, MeetingsListState> {

    public constructor(props: {}) {
        super(props);

        this.state = {
            meetings: [],
            teams: []
        }
    }

    public async componentDidMount() {
        try {
            const response = await axios.get<TeamModel[]>("http://localhost:3001/api/meeting");
            const teams = response.data;
            this.setState({ teams });
        } catch (error) {
            console.log(error.message);

        }
    }

    public async ChoosedTeam(teamId) {
        try {
            const response = await axios.get<MeetingModel[]>("http://localhost:3001/api/meeting/" + teamId);
            const meetings = response.data;
            this.setState({ meetings });
        } catch (error) {
            console.log(error.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="MeetingsList" key="MeetingsList">
                <Select
                    color="secondary"
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Team Name"
                    name="teamId"
                    defaultValue="0"
                    onChange={async e => await this.ChoosedTeam(e.target.value)}
                >
                    <MenuItem value="0" disabled>
                        <em>Choose Team</em>
                    </MenuItem>
                    {this.state.teams.map(t => <MenuItem key={t.teamId} value={t.teamId}>{t.teamName}</MenuItem>)}
                </Select>
                <div className="MeetingsListContainer">
                    {this.state.meetings.map(m => <MeetingCard key={m.id} meeting={m} />)}
                </div>
            </div>
        );
    }
}

export default MeetingsList;
