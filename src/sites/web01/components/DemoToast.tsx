import { useEffect } from 'react';

interface DemoToastProps {
  visible: boolean;
  onClose: () => void;
}

const DemoToast = ({ visible, onClose }: DemoToastProps) => {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div className="web01-demo-toast" role="alert">
      目前為 Demo 功能，尚未實作
    </div>
  );
};

export default DemoToast;
