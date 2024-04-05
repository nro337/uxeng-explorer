import { Enums } from '@/types/supabase'
import { WrapperComponent } from './querywrapper'
import { TableWrapper } from './TableWrapper'

export default async function Page({
  searchParams
}:{
  searchParams?: URLSearchParams
}) {

  const searchPms = new URLSearchParams(searchParams)

  return (
    <div className='m-8'>
      <h1 className='mb-4'>Programs</h1>
      <WrapperComponent>
        <TableWrapper level={(searchPms.get('level') || 'BACHELORS') as Enums<'degree_level'>} />
      </WrapperComponent>
    </div>
  )

}