export const IFX_THEME: {
  colors: {
    primary: string;
    accent: string;
    background: string;
    error: string;
    success: string;
  };
  font: {
    family: string;
    size: {
      base: string;
      heading: string;
      small: string;
    };
  };
  spacing: {
    padding: string;
    gap: string;
  };
} = {
  colors: {
    primary: "#0F172A",    // Azul institucional oscuro
    accent: "#22D3EE",     // Cian viral
    background: "#F8FAFC", // Fondo claro
    error: "#EF4444",      // Rojo para errores
    success: "#10B981",    // Verde para éxito
  },
  font: {
    family: "'Inter', sans-serif",
    size: {
      base: "16px",
      heading: "24px",
      small: "14px",
    },
  },
  spacing: {
    padding: "1rem",
    gap: "1rem",
  },
};
