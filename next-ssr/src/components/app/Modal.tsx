'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import useAppTranslation from '@/hooks/useAppTranslation';

interface ModalProps {
  title: string;
  description: string;
  confirmButtonText: string;
  handleOnConfirm: () => void;
  isOpen: boolean;
  handleOnClose: () => void;
}

const Modal = ({
  title,
  description,
  confirmButtonText,
  handleOnConfirm,
  isOpen,
  handleOnClose,
}: ModalProps) => {
  const { t } = useAppTranslation();

  return (
    <Dialog open={isOpen} onOpenChange={handleOnClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
          <DialogFooter>
            <Button onClick={handleOnConfirm}>{confirmButtonText}</Button>
            <Button onClick={handleOnClose}>{t('Modal.close')}</Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
