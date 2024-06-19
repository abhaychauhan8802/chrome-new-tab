import React from "react";
import ModeToggle from "./ModeToggle";
import { Grip, Pencil, Settings, Check } from "lucide-react";
import { Button } from "../ui/button";

const Header = ({ isEdit, setIsEdit }) => {
  return (
    <>
      <div className="flex p-4 justify-between items-center">
        <div>
          <Button variant="ghost" size="icon">
            <Grip className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEdit(!isEdit)}
          >
            {isEdit ? (
              <Check className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Pencil className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Header;
