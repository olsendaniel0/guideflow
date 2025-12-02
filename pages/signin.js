import { useState } from "react";
import Link from "next/link";
import Sidebar from "../components/Sidebar";

export default function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        setError("");
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }
        // Placeholder: replace with real auth call
        console.log("Signing in", { email, password });
        alert("Signed in (demo) — check console for values");
    }

    return (
        <div className="page-layout">
            <Sidebar />

            <main className="main-content">
                <div style={{ maxWidth: 480, margin: "40px auto", padding: 20 }}>
                    <h1 style={{ textAlign: "center" }}>Sign In</h1>

                    {error && (
                        <div style={{ color: "#b33", marginBottom: 12 }}>{error}</div>
                    )}

                    <form onSubmit={handleSubmit}>
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

                        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16 }}>
                            <button type="submit" className="btn register">Sign in</button>
                            <Link href="/register" className="btn signup">Register</Link>
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

Signin.background = "page-home";