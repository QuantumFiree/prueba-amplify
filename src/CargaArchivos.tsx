import { useState } from "react";
import { uploadData } from "aws-amplify/storage";
import { Link } from "react-router-dom";
import "./CargaArchivos.css";

function CargaArchivos() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [status, setStatus] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0] ?? null;
    setFile(selected);
    setStatus("idle");
    setProgress(0);
    setErrorMsg("");
  }

  async function handleUpload() {
    if (!file) return;

    setStatus("uploading");
    setProgress(0);
    setErrorMsg("");

    try {
      await uploadData({
        path: `public/${file.name}`,
        data: file,
        options: {
          onProgress: ({ transferredBytes, totalBytes }) => {
            if (totalBytes) {
              setProgress(Math.round((transferredBytes / totalBytes) * 100));
            }
          },
        },
      }).result;

      setStatus("success");
      setProgress(100);
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message ?? "Error al subir el archivo");
    }
  }

  return (
    <div className="upload-wrapper">
      <div className="upload-container">
        <Link to="/" className="upload-btn-back">← Volver al inicio</Link>

        <h1 className="upload-title">📁 Carga de Archivos</h1>
        <p className="upload-subtitle">Sube tus archivos a AWS S3 de forma segura</p>

        <div className="upload-card">
          <label className="upload-dropzone">
            <input
              type="file"
              className="upload-input-hidden"
              onChange={handleFileChange}
            />
            <span className="upload-dropzone-icon">☁️</span>
            <span className="upload-dropzone-text">
              {file ? file.name : "Haz clic para seleccionar un archivo"}
            </span>
            {file && (
              <span className="upload-dropzone-size">
                {(file.size / 1024).toFixed(1)} KB
              </span>
            )}
          </label>

          {file && status !== "success" && (
            <button
              className="upload-btn-submit"
              onClick={handleUpload}
              disabled={status === "uploading"}
            >
              {status === "uploading" ? "Subiendo..." : "Subir archivo"}
            </button>
          )}

          {status === "uploading" && (
            <div className="upload-progress-wrapper">
              <div className="upload-progress-bar">
                <div
                  className="upload-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="upload-progress-label">{progress}%</span>
            </div>
          )}

          {status === "success" && (
            <div className="upload-alert upload-alert-success">
              ✅ Archivo subido exitosamente
            </div>
          )}

          {status === "error" && (
            <div className="upload-alert upload-alert-error">
              ❌ {errorMsg}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CargaArchivos;
