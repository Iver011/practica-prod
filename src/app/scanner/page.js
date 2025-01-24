'use client';

import { Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

const ScannerPage = () => {
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = (result) => {
    if (result) {
      console.log("Contenido del QR escaneado:", result);
      setScanResult(result); // Mostrar resultado en la interfaz

      // Verificar si el resultado es una URL válida
      try {
        const url = new URL(result); // Intentamos crear un objeto URL con el resultado
        window.location.href = url.toString(); // Usamos href para redirigir
      } catch (e) {
        // Si no es una URL válida, mostrar un mensaje de error
        setError("El contenido del código QR no es una URL válida.");
      }
    }
  };

  const handleError = (error) => {
    console.error("Error al acceder a la cámara:", error);

    if (error.name === "NotAllowedError") {
      setError("No se concedieron permisos para usar la cámara.");
    } else if (error.name === "NotFoundError") {
      setError("No se encontró ninguna cámara en el dispositivo.");
    } else if (error.name === "OverconstrainedError") {
      setError("Las restricciones de la cámara no pueden cumplirse.");
    } else {
      setError("Ocurrió un error inesperado al intentar acceder a la cámara.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Escáner de Código QR</h1>

      {/* Scanner Component */}
      <Scanner
        onDecode={handleScan}
        onError={handleError}
        constraints={{
          video: {
            facingMode: "environment", // Intenta usar la cámara trasera
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        }}
        style={{ width: "100%", maxWidth: "400px", margin: "auto" }}
      />

      {/* Mostrar Resultado del QR */}
      {scanResult && (
        <div style={{ marginTop: "20px", color: "green" }}>
          <h3>Resultado del QR:</h3>
          <p>{scanResult}</p>
        </div>
      )}

      {/* Mostrar Error si Ocurre */}
      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ScannerPage;
