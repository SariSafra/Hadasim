import { React, useState } from "react";
import {config} from "./config.jsx"
export const GetRequest = (id, state, comment, table) => {
    fetch(`http://${config.SERVERPORT}/${table}/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (Object.keys(data).length === 0) {
                comment(`there is no ${table} with such id.`)
            }
            else {
                state(data);
            }
        })
        .catch(error => {
            comment(`Server error:${error}`)
        });
}
export const GetAllRequest = (state, comment, table) => {
    fetch(`http://${config.SERVERPORT}/${table}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (Object.keys(data).length === 0) {
                comment(`there is no ${table}s.`)
            }
            else {
                state(data);
            }
        })
        .catch(error => {
            console.error(error);
            comment(`Server error: ${error}.`)
        });
}

export const UpdateRequest = (state, comment, updatedMember, table) => {
    fetch(`http://${config.SERVERPORT}/${table}/${updatedMember.MemberId}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(updatedMember)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (Object.keys(data).length === 0) {
                comment(`there is no ${table} with such id.`)
            }
        })
        .catch(error => {
            console.error(error);
            comment(`Server error:${error}.`)
        });
}
export const DeleteRequest = (state, comment, MemberId) => {
    fetch(`http://${config.SERVERPORT}/member/${MemberId}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (Object.keys(data).length === 0) {
                comment("there is no members.")
            }
            else {
                state(members => members.filter(member => member.MemberId !== MemberId));            }
        })
        .catch(error => {
            comment(`Server error:${error}.`)
        });
}
export const CreateRequest = (comment, table, newMember) => {
    fetch(`http://${config.SERVERPORT}/${table}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(newMember)
    })
        .then(response => {
            if(response.status==404)
                comment("We were unable to fulfill your request, please try again");
            else
            comment("");
            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error(error);
        });
}



