import React, { useState } from "react";

export default function Form() {
    const [state, setState] = useState({
        summary: ""
    });

    const onSummaryChange = (params) => {
        setState({...state, summary: params.target.value});
    }

    const showSuggestions = () => {
        // API Call For Suggestions
    }

    return(
        <>
            <div>
                <h4>Name</h4>
                <input></input>
            </div>

            <div>
                <h4>Email</h4>
                <input></input>
            </div>

            <div>
                <h4>Phone Number</h4>
                <input></input>
            </div>

            <div>
                <h4>LinkedIn URL</h4>
                <input></input>
            </div>

            <div>
                <h4>Location</h4>
                <input></input>
            </div>

            <div>
                <h4>Professional Summary</h4>
                <textarea
                    onChange={onSummaryChange}
                ></textarea>
            </div>

            <div>
                <button 
                    onClick={showSuggestions}
                >Show suggestions</button>
            </div>
        </>
    )
}