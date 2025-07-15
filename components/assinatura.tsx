import React from "react";

export default function Assinatura() {
  return (
    <footer
      style={{
        width: "100%",
        height: 30,
        background: "#18120f", // marrom bem escuro quase preto
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <span
        style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.66)",
          letterSpacing: 0.2,
        }}
      >
        AI Design by prompt-master.org
      </span>
    </footer>
  );
} 