"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());
  
  return (
    <div>
      <h1>Agents</h1>
      {JSON.stringify(data, null, 2)}
    </div>
  );
};


export const AgentsViewLoading = () => {
  return <LoadingState title="Loading Agents" description="This may take a moment..." />;
};

export const AgentsViewError = () => {
  return <ErrorState title="Error Loading Agents" description="Please try again later." />;
};