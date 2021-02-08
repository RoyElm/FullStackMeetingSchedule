import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Routing from "../Routing/Routing";
import "./App.css";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Header />
                </header>
                <main>
                    <Routing />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
