import { createClient } from '@/utils/supabase/server'
import { DataTable } from './data-table'
import { columns } from './columns'

export default async function Page() {
  const supabase = createClient()
  const { data } = await supabase.from('institution').select('*')

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )

}