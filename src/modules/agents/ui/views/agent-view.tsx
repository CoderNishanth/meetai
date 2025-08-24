"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { ResponsiveDialog } from "@/components/responsive-dialog";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());
  
  return (
    <div>
      <ResponsiveDialog
        title="Agents"
        description="List of all agents"
        open={true}
        onOpenChange={() => {}}
      >
        <button className="mb-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Create New Agent
        </button>
        {JSON.stringify(data, null, 2)}
      </ResponsiveDialog>
    </div>
  );
};


export const AgentsViewLoading = () => {
  return <LoadingState title="Loading Agents" description="This may take a moment..." />;
};

export const AgentsViewError = () => {
  return <ErrorState title="Error Loading Agents" description="Please try again later." />;
};