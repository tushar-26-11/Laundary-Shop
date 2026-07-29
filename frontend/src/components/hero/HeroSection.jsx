import { useNavigate } from "react-router-dom";
import { Search, ArrowRight, CheckCircle, Clock, Star } from "lucide-react";

import washingMachineImg from "../../data/washing-machine.png";
import "./HeroSection.css";
function WashingMachineIllustration() {
  return (
    <div className="hero-machine-wrap">
      <img
        src={washingMachineImg}
        alt="Washing Machine"
        className="hero-machine-image"
      />
    </div>
  );
}

export default function HeroSection() {
  const navigate = useNavigate();

  const trustItems = [
    { icon: <CheckCircle size={15} />, label: "Digital Tracking" },
    { icon: <Clock size={15} />, label: "24hr Notifications" },
    { icon: <Star size={15} />, label: "99% Satisfaction" },
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <span className="hero-eyebrow">
                <span className="hero-eyebrow-dot" />
                Now accepting digital tracking
              </span>

              <h1 className="hero-title">
                Professional
                <br />
                <span>Dry Cleaning</span>
                <br />
                &amp; Laundry Services
              </h1>

              <p className="hero-desc">
                Track your garments digitally, receive notifications, and
                collect your clothes with complete confidence. Every garment
                photographed and documented.
              </p>

              <div className="hero-actions">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate("/track")}
                >
                  <Search size={18} />
                  Track My Order
                </button>
                <button
                  className="btn btn-ghost btn-lg"
                  onClick={() =>
                    document
                      .querySelector("#services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Services
                  <ArrowRight size={18} />
                </button>
              </div>

              <div className="hero-stats">
                {[
                  { value: "5000+", label: "Garments Cleaned" },
                  { value: "1200+", label: "Happy Customers" },
                  { value: "99%", label: "Satisfaction Rate" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="hero-stat-num">{stat.value}</div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-visual">
              <WashingMachineIllustration />
            </div>
          </div>
        </div>
      </section>
      <div className="hero-trust">
        <div className="container">
          <div className="hero-trust-inner">
            {trustItems.map((item) => (
              <div key={item.label} className="hero-trust-item">
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
