
import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setError("");
        if (!name || !email || !password) {
            setError("Please fill all required fields.");
            return;
        }
        if (password !== confirm) {
            setError("Passwords do not match.");
            return;
        }

        // Placeholder: replace with real registration API
        console.log("Registering user", { name, email, password });
        alert("Registered (demo) — check console for submitted values");
    }

    return (
        <div className="page-layout">
            <Sidebar />

            <main className="main-content">
                <div style={{ maxWidth: 520, margin: "40px auto", padding: 20 }}>
                    <h1 style={{ textAlign: "center" }}>Create an account</h1>

                    {error && (
                        <div style={{ color: "#b33", marginBottom: 12 }}>{error}</div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: 12 }}>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{ width: "100%", padding: 8, marginTop: 6, borderRadius: 6, border: "1px solid #ccc" }}
                            />
                        </div>

                        <div style={{ marginBottom: 12 }}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: "100%", padding: 8, marginTop: 6, borderRadius: 6, border: "1px solid #ccc" }}
                            />
                        </div>

                        <div style={{ marginBottom: 12 }}>
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: "100%", padding: 8, marginTop: 6, borderRadius: 6, border: "1px solid #ccc" }}
                            />
                        </div>

                        <div style={{ marginBottom: 12 }}>
                            <label htmlFor="confirm">Confirm Password</label>
                            <input
                                id="confirm"
                                type="password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                style={{ width: "100%", padding: 8, marginTop: 6, borderRadius: 6, border: "1px solid #ccc" }}
                            />
                        </div>

                        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16 }}>
                            <button type="submit" className="btn register">Create account</button>
                            <Link href="/signin" className="btn signup">Sign in</Link>
                        </div>
                    </form>

                    <p style={{ marginTop: 18, textAlign: "center" }}>
                        <Link href="/">Return home</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}

Register.background = "page-home";