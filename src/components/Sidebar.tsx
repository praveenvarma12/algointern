import { X } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white transform transition-transform lg:transform-none lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 lg:hidden">
          <div className="text-xl font-bold text-indigo-600">AlgoRoot</div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 lg:hidden"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-4">
          <div className="px-2">
            <div className="px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md">
              Details
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}