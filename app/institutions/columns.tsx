"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Institution = {
  id: number
  created_at: string
  type: 'UNIVERSITY' | 'COLLEGE' | 'TRADE' | 'COMMUNITY' | 'TECHNICAL',
  name: string,
  city: string,
  state?: string,
  country: string,
}

export const columns: ColumnDef<Institution>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "state",
    header: "State",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
]
