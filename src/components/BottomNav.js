import Link from 'next/link';
import { HomeIcon, UserIcon, BellIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-4 h-full">
        <Link href="/" className="flex flex-col items-center justify-center">
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/notifications" className="flex flex-col items-center justify-center">
          <BellIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Notifications</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center justify-center">
          <UserIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link href="/settings" className="flex flex-col items-center justify-center">
          <Cog6ToothIcon className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  );
} 