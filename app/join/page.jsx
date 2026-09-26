"use client";

import { useState } from "react";
import "../util.css"

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    field: "",
    reason: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    setFormData({
      name: "",
      email: "",
      field: "",
      reason: "",
    });
    alert("Application submitted!");
  }

  return (
    <main className="join-page">
      <section className=" mt-6  cud">
        <p className="eyebrow ">JOIN THE SOCIETY</p>

        <h2 className="fs-6 ml-5 line-height-3 letter-space-3">
          Bring Your
          <br />
          Curiosity.
        </h2>

        <p className="join-intro  ">
          You don&apos;t need to belong to one field. You just need to be
          curious, willing to learn, and willing to contribute.
        </p>
      </section>

      <section className="join-form-section">
        <form onSubmit={handleSubmit} className="join-form">
          <div className="form-group">

            <input
              id="name"
              name="name"
              type="text"
              placeholder=""
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="name">01 — NAME :</label>
          </div>

          <div className="form-group">

            <input
              id="email"
              name="email"
              type="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">02 — EMAIL :</label>
          </div>

          <div className="form-group">

            <input
              id="field"
              name="field"
              type="text"
              placeholder=""
              value={formData.field}
              onChange={handleChange}
              />
              <label htmlFor="field">03 — FIELD / INTEREST :</label>
          </div>

          <div className="form-group">

            <textarea
              id="reason"
              name="reason"
              placeholder=""
              value={formData.reason}
              onChange={handleChange}
              rows="5"
            />
            <label htmlFor="reason">04 — WHY JOIN?</label>
          </div>

          <button type="submit" className="join-submit">
            Submit application →
          </button>
        </form>
      </section>
    </main>
  );
}
