"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";


const HomeView = () => {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.hello.queryOptions({text: 'Nishanth'}));
  return (
    <div>
      <h1>{data?.greeting}</h1>
    </div>
  );
};
export default HomeView;
