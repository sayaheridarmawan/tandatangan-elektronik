import React, { useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { UploadCard } from "@/widgets/cards";

export function Upload() {
  const [singlePdf, setSinglePdf] = useState(null);
  const [folderPdfs, setFolderPdfs] = useState([]);

  // ========== Upload Single PDF ==========
  const handleSinglePdf = (files) => {
    const file = files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("File harus berformat PDF");
      return;
    }

    setSinglePdf(file);
  };

  // ========== Upload Folder of PDFs ==========
  const handleFolderUpload = (files) => {
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
    <div className="p-8">
      <Typography variant="h2" color="blue-gray" className="mb-8">
        Upload Dokumen PDF
      </Typography>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Single PDF */}
        <UploadCard
          title="Upload File PDF Tunggal"
          description="Pilih satu file PDF untuk diupload. Klik atau seret file ke sini."
          accept="application/pdf"
          onFilesSelected={handleSinglePdf}
          uploadedFiles={singlePdf ? [singlePdf] : []}
          color="blue"
        />

        {/* Upload Folder */}
        <UploadCard
          title="Upload Folder PDF"
          description="Pilih folder yang berisi file PDF. Klik atau seret folder ke sini."
          // accept="application/pdf"
          webkitdirectory={true}
          multiple={true}
          onFilesSelected={handleFolderUpload}
          uploadedFiles={folderPdfs}
          color="green"
        />
      </div>
    </div>
  );
}


export default Upload;
