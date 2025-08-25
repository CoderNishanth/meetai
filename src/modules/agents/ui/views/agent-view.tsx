"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());
  
  return (
    <div className="px-4 flex-1 md:px-8 flex flex-col gap-y-4">
      <DataTable columns={columns} data={data} onRowClick={(row) => console.log(row)} />
        {data?.length === 0 && (
          <EmptyState title="Create your first agent" description="Create an agent to join your meeting. Each agent will follow your instructions and can interact with partcipants during the call." />
        )}
    </div>
  );
};


export const AgentsViewLoading = () => {
  return <LoadingState title="Loading Agents" description="This may take a moment..." />;
};

export const AgentsViewError = () => {
  return <ErrorState title="Error Loading Agents" description="Please try again later." />;
};