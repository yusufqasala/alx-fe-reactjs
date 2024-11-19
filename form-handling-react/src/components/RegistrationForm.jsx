import React, { useState } from "react";

const RegistrationForm = () => {
    // Define state for form fields
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input
        if (!username || !email || !password) {
            setError("All fields are required!");
            return;
        }

        // Reset error and log the submitted data
        setError("");
        console.log("Form submitted:", { username, email, password });

        // Optionally reset the form
        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username} // Controlled component
                    onChange={(e) => setUsername(e.target.value)} // Update state
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email} // Controlled component
                    onChange={(e) => setEmail(e.target.value)} // Update state
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password} // Controlled component
                    onChange={(e) => setPassword(e.target.value)} // Update state
                />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;
