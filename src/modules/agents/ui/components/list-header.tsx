"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialog";

export const AgentsListHeader = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <>
        <NewAgentDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        <div className="p-4 md:px-8 flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
                <h5 className="text-xl font-medium">My Agents</h5>
                <Button onClick={() => setDialogOpen(true)} className="flex items-center gap-2">
                    <PlusIcon />
                    New Agent
                </Button>
            </div>
        </div>
        </>
    );
};