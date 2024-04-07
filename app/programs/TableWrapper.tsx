'use server'

import { getPrograms } from "@/utils/supabase/helper";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Enums, Tables } from "@/types/supabase";


export async function TableWrapper({level}:{level: Enums<'degree_level'>}) {

  const data = await getPrograms(level);

  if (!data) {
    return <div>Loading...</div>
  }

  let res: any[] = []
  data.forEach((d) => {
    res.push({
      id: d.id,
      level: d.level,
      degree_subject_area: d.degree_subject_area,
      created_at: d.created_at,
      name: d.name,
      abbreviation: d.abbreviation,
      link: d.link,
      country: d.country,
      image: d.image,
      institution: d.institution,
      degree_type: d.degree_type,
      notes: d.notes,
    })
  })

  return (
    <div className="mt-4">
      <DataTable columns={columns} data={res} />
    </div>
  );
}

