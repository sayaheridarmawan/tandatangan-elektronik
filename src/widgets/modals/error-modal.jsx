import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export function ErrorModal({ open, onClose, title, message, buttonText = "Coba Lagi" }) {
  return (
    <Dialog open={open} handler={onClose} size="sm">
      <DialogHeader className="justify-center">
        <XCircleIcon className="h-16 w-16 text-red-500" />
      </DialogHeader>
      <DialogBody className="text-center">
        <Typography variant="h5" color="red" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray">
          {message}
        </Typography>
      </DialogBody>
      <DialogFooter className="justify-center">
        <Button variant="gradient" color="red" onClick={onClose}>
          {buttonText}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

ErrorModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

ErrorModal.displayName = "/src/widgets/modals/error-modal.jsx";

export default ErrorModal;
