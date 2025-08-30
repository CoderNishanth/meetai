"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon, XCircleIcon } from "lucide-react";
import { NewAgentDialog } from "./new-agent-dialog";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { AgentsSearchFilter } from "./agents-search-filter";
import { DEFAULT_PAGE } from "@/constants";

export const AgentsListHeader = () => {
    const [filters, setFilters] = useAgentsFilters();
    const [dialogOpen, setDialogOpen] = useState(false);
    const isAnyFilterModified = !!filters.search;

    const onClearFilters = () => {
        setFilters({ search: "", page: DEFAULT_PAGE });
    };


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
            <div className="flex items-center gap-x-2 p-1">
                <AgentsSearchFilter />
                {isAnyFilterModified && (
                    <Button variant="outline"  className="sm" onClick={onClearFilters}>
                        <XCircleIcon />
                        Clear
                    </Button>
                )}
            </div>
        </div>
        </>
    );
};