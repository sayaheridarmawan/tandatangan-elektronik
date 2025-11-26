import React, { useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function Unggah() {
  const [singlePdf, setSinglePdf] = useState(null);
  const [folderPdfs, setFolderPdfs] = useState([]);

  // ========== Upload Single PDF ==========
  const handleSinglePdf = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("File harus berformat PDF");
      return;
    }

    setSinglePdf(file);
  };

  // ========== Upload Folder of PDFs ==========
  const handleFolderUpload = (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    // filter hanya PDF
    const pdfFiles = files.filter((file) =>
      file.name.toLowerCase().endsWith(".pdf")
    );

    if (pdfFiles.length !== files.length) {
      alert("Folder hanya boleh berisi file PDF saja!");
      return;
    }

    setFolderPdfs(pdfFiles);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Upload Dokumen PDF</h2>

      {/* Upload Single PDF */}
      <div style={{ marginTop: "20px" }}>
        <label>Upload 1 File PDF:</label>
        <br />
        <input
          type="file"
          accept="application/pdf"
          onChange={handleSinglePdf}
        />
        {singlePdf && <p>File: {singlePdf.name}</p>}
      </div>

      <hr style={{ margin: "30px 0" }} />

      {/* Upload Folder */}
      <div>
        <label>Upload 1 Folder (PDF only):</label>
        <br />
        <input
          type="file"
          webkitdirectory="true"
          directory="true"
          multiple
          onChange={handleFolderUpload}
        />
        {folderPdfs.length > 0 && (
          <div style={{ marginTop: "10px" }}>
            <strong>Total File PDF:</strong> {folderPdfs.length}
            <ul>
              {folderPdfs.map((file, idx) => (
                <li key={idx}>{file.webkitRelativePath}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}


export default Unggah;
