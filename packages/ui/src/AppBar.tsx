import { Button } from "./button";

interface AppBarProps {
  user?: {
    name?: string | null;
  };
  //Todo give types
  onSignIn: () => void;
  onSignOut: () => void;
}
export const AppBar = ({ user, onSignIn, onSignOut }: AppBarProps) => {
  return (
    <div className="flex justify-between border-b px-4">
      <div className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
        PayTM
      </div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignOut : onSignIn}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};
