import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";


export const AuthButton = () => {
    //todo: add different auth states
    return (
        <Button variant="outline" className="py-2 px-4 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 shadow-none rounded-full">
            <UserCircleIcon />
            Sign In
        </Button>
    )
};