import { CommandInput, CommandItem, CommandList, CommandResponsiveDialog } from "@/components/ui/command";
import { Dispatch, SetStateAction } from "react";

interface Props{
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
}

export const DashboardCommand = ({ open, setOpen }: Props) => {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a Meeting or Agent" />
      <CommandList>
        <CommandItem>
          <span>Meeting 1</span>
        </CommandItem>
        <CommandItem>
          <span>Meeting 2</span>
        </CommandItem>
      </CommandList>
    </CommandResponsiveDialog>
  );
};
