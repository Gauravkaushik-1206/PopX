import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function AccountSettingsPage({ onSignOut }) {
  return (
    <div className="flex justify-center">
    <div className="bg-gray-100 border border-gray-200 rounded-md w-sm h-screen overflow-hidden">
      <div className="p-6 bg-white">
        <h1 className="text-2xl font-bold">Account Settings</h1>
      </div>

      <div className="p-6 bg-gray-100">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200">
              <img src="/placeholder.svg?height=80&width=80" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white p-1.5 rounded-full">
              <Camera size={16} />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-medium">Marry Doe</h2>
            <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-gray-100 border-dashed border-b-2">
        <p className="text-gray-800 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
{/* 
      <div className="p-6 border-t border-gray-200 mt-auto">
        <Button onClick={onSignOut} variant="outline" className="w-full">
          Sign Out
        </Button>
      </div> */}
    </div>
    </div>
  );
}
