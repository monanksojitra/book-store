import axios from "axios";
import React, { useReducer ,useEffect } from "react";

const initialState = {user: {}};

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return {
                user: action.payload
            };
        case "ERROR":
            return {
                user: {}
            };
        default:
            return state;
    }
};

function Posst_useReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users/1")
            .then(response => {
                dispatch({ type: "SUCCESS", payload: response.data });
            })
            .catch(error => {
                dispatch({ type: "ERROR" });
            });
    }, []);
    const { user } = state;
    return (<div>

        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>

    </div>
    );
}

export default Posst_useReducer;
