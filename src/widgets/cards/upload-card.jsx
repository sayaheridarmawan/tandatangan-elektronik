import React, { useRef, useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
  DocumentIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export function UploadCard({
  title,
  description,
  accept,
  multiple = false,
  webkitdirectory = false,
  onFilesSelected,
  onUpload,
  uploadedFiles = [],
  color = "blue",
  isUploading = false,
}) {
  const fileInputRef = useRef(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onFilesSelected(files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    onFilesSelected(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  return (
    <Card className={`border-2 border-dashed transition-colors ${isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} hover:border-blue-400 cursor-pointer`}>
      <CardBody className="text-center p-6" onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
        <div className="mb-4">
          <CloudArrowUpIcon className={`h-12 w-12 mx-auto ${isDragOver ? 'text-blue-500' : 'text-gray-400'}`} />
        </div>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="mb-4">
          {description}
        </Typography>
        <Button variant="outlined" color={color} className="mb-4">
          {webkitdirectory ? (
            <>
              <FolderIcon className="h-5 w-5 mr-2" />
              Pilih Folder
            </>
          ) : (
            <>
              <DocumentIcon className="h-5 w-5 mr-2" />
              Pilih File
            </>
          )}
        </Button>
        {uploadedFiles.length > 0 && (
          <div className="text-left">
            <Typography variant="small" color="blue-gray" className="font-medium">
              File yang dipilih ({uploadedFiles.length}):
            </Typography>
            <ul className="mt-2 max-h-32 overflow-y-auto">
              {uploadedFiles.map((file, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-center">
                  <DocumentIcon className="h-4 w-4 mr-1" />
                  {file.name || file.webkitRelativePath}
                </li>
              ))}
            </ul>
            {onUpload && (
              <Button
                color={color}
                className="mt-4 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpload(uploadedFiles);
                }}
                disabled={isUploading}
              >
                {isUploading ? "Mengupload..." : "UPLOAD"}
              </Button>
            )}
          </div>
        )}
      </CardBody>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        webkitdirectory={webkitdirectory}
        directory={webkitdirectory}
        onChange={handleFileChange}
        className="hidden"
      />
    </Card>
  );
}

UploadCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  webkitdirectory: PropTypes.bool,
  onFilesSelected: PropTypes.func.isRequired,
  onUpload: PropTypes.func,
  uploadedFiles: PropTypes.array,
  color: PropTypes.string,
  isUploading: PropTypes.bool,
};

UploadCard.displayName = "/src/widgets/cards/upload-card.jsx";

export default UploadCard;
