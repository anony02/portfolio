import { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div
        className="relative z-50 w-[90vw] lg:w-3/4 min-w-[360px] h-[90vh] overflow-y-auto py-10 px-10 sm:px-20 lg:px-40 bg-[#ffffff] dark:bg-[#222222] shadow-lg"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <button className="absolute w-[4rem] h-[4rem] top-2 right-2 text-4xl font-bold" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
