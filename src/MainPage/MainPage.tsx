// import React from 'react'
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="day-button" onClick={() => navigate("/day01")}>
        DAY01
      </div>
      <div className="day-button ms-6" onClick={() => navigate("/day03")}>
        DAY03
      </div>
    </>
  );
}
