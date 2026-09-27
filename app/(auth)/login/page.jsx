"use client";

import { useState } from "react";
import Link from "next/link";
import "../../css/login.css"
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      // Connect your backend here later
      //
      // const response = await fetch("/api/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      console.log(formData);

      // Temporary
      await new Promise((resolve) => setTimeout(resolve, 800));
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="login-page">
      <div className="login-container">

        <div className="login-header">
          <Link href="/" className="login-logo">
            Polymaths
          </Link>

          <p className="login-subtitle">
            Welcome back.
          </p>

          <h1>
            Sign in to your account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="login-form">

          <div className="form-group">
            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=""
              autoComplete="current-password"
              required
            />
          </div>

          <div className="login-options">
            <Link href="/forgot-password">
              Forgot password?
            </Link>
          </div>

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <button type="button" className="google-button">
          Continue with Google
        </button>

        <p className="signup-text">
          Don&apos;t have an account?{" "}
          <Link href="/join">
            Join Polymaths
          </Link>
        </p>

      </div>
    </main>
  );
}