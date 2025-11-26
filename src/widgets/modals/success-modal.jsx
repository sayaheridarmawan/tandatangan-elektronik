import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";

export function SuccessModal({ open, onClose, title, message, buttonText = "OK" }) {
  return (
    <Dialog open={open} handler={onClose} size="sm">
      <DialogHeader className="justify-center">
        <CheckCircleIcon className="h-16 w-16 text-green-500" />
      </DialogHeader>
      <DialogBody className="text-center">
        <Typography variant="h5" color="green" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray">
          {message}
        </Typography>
      </DialogBody>
      <DialogFooter className="justify-center">
        <Button variant="gradient" color="green" onClick={onClose}>
          {buttonText}
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

SuccessModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

SuccessModal.displayName = "/src/widgets/modals/success-modal.jsx";

export default SuccessModal;
