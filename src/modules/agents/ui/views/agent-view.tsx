"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { DataTable } from "../components/data-table";
import { columns } from "../components/columns";
import { EmptyState } from "@/components/empty-state";
import { useAgentsFilters } from "../../hooks/use-agents-filters";
import { DataPagination } from "../components/data-pagination";
import { useRouter } from "next/navigation";

export const AgentsView = () => {
  const [filters, setFilters] = useAgentsFilters();
  const router = useRouter();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions({
    ...filters
  }));
  
  return (
    <div className="px-4 flex-1 md:px-8 flex flex-col gap-y-4">
      <DataTable columns={columns} data={data.items} onRowClick={(row) => router.push(`/agents/${row.id}`)} />
        <DataPagination page={filters.page} totalPages={data.totalPages || 1} onPageChange={(page) => setFilters({...filters, page})} />
        {data?.items.length === 0 && (
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