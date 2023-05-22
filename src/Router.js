import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/Test";
import MessageBoard from "./MessageBoard";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/aboutMe" element={<Example />} />
                <Route path="/messageBoard" element={<MessageBoard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;