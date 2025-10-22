import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (f) => {
    const e = {};

    if (!f.name.trim()) e.name = "Name is required.";
    if (!f.email.trim()) e.email = "Email is required.";
    else {
     
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;       
      if (!re.test(f.email)) e.email = "Enter a valid email.";
    }

    if (!f.password) e.password = "Password is required.";
    else if (f.password.length < 6) e.password = "Password must be at least 6 characters.";

    if (!f.confirm) e.confirm = "Please confirm password.";
    else if (f.confirm !== f.password) e.confirm = "Passwords do not match.";

    return e;
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
    
      setSubmitted(true);
      setForm({ name: "", email: "", password: "", confirm: "" });
    } else {
      setSubmitted(false);
    }
  }

  return (
    <div className="wrap">
      <form className="card" onSubmit={handleSubmit} noValidate>
        <h2>Create Account</h2>

        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
          />
          {errors.name && <div className="err">{errors.name}</div>}
        </label>

        <label>
          Email
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {errors.email && <div className="err">{errors.email}</div>}
        </label>

        <label>
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="At least 6 characters"
            autoComplete="new-password"
          />
          {errors.password && <div className="err">{errors.password}</div>}
        </label>

        <label>
          Confirm Password
          <input
            name="confirm"
            type="password"
            value={form.confirm}
            onChange={handleChange}
            placeholder="Repeat password"
            autoComplete="new-password"
          />
          {errors.confirm && <div className="err">{errors.confirm}</div>}
        </label>

        <button type="submit" className="submit-btn">Register</button>

        {submitted && <div className="success">Registration successful!</div>}
      </form>
    </div>
  );
}
