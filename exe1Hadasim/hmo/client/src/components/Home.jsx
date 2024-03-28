import { React, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import Members from "./Members.jsx"
export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/hmo/members");
    }, []);
    return (
        <></>
    )




}