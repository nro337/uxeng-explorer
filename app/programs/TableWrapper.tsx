'use server'

import { getPrograms } from "@/utils/supabase/helper";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { createClient } from '@/utils/supabase/server'


export async function TableWrapper({level}:{level: string}) {

  const data = await getPrograms(level);

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className="mt-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

