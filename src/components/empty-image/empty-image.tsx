import { CameraOff } from "lucide-react";

export const EmptyImage = () => {
  return (
    <div className="bg-slate-300/50 h-full w-full absolute flex items-center justify-center">
      <CameraOff className="w-8 h-8 text-slate-500" />
    </div>
  );
};
