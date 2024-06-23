import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Grip } from "lucide-react";
import { menuApps } from "@/lib/utils/MenuApps";

const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Grip className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="max-w-[300px] h-[380px] px-0"
      >
        <ScrollArea className="w-full h-full p-2">
          <div className="grid grid-cols-3 justify-items-stretch gap-2 w-full h-full pr-3">
            {menuApps.map((app, idx) => (
              <div key={idx}>
                <Button
                  variant="ghost"
                  className="overflow-hidden rounded-xl w-24 h-24"
                >
                  <a
                    href={`${app.url}`}
                    className="flex flex-col justify-center items-center w-24 h-24 px-2 md:px-4"
                  >
                    <div className="bg-white border-[1px] p-[2px] rounded-xl">
                      <div className="w-10 h-10 text-2xl flex justify-center items-center">
                        <img
                          src={app.img}
                          alt="favicon"
                          className="w-9 rounded-lg selector"
                        />
                      </div>
                    </div>
                    <p className="pt-2 text-xs text-foreground select-none over px-2 whitespace-nowrap">
                      {app.name.length <= 10
                        ? app.name.slice(0, 10)
                        : app.name.slice(0, 10) + "..."}
                    </p>
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
