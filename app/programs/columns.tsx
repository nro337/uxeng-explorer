"use client"

import { Tables } from "@/types/supabase"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Tables<'programs'>>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: (props) => {
      if (!props.row.original.image) return 
      return <Image src={props.row.original?.image} alt={props.row.original.name} width={300} height={300} />
    },
  },
  {
    accessorKey: "institution.name",
    header: "Institution",
  },
  {
    accessorKey: 'level',
    cell: info => info.getValue(),
    header: 'Level',
  },
  {
    accessorKey: 'degree_type',
    header: 'Degree Type',
  },
  {
    accessorKey: 'degree_subject_area',
    header: 'Degree Subject Area',
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "abbreviation",
    header: "Abbreviation",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "link",
    header: "Link",
    cell: (props) => {
      if (!props.row.original.link) return 
      return <a href={props.row.original.link} target="_blank" rel="noreferrer" style={{maxWidth: 100, overflowX: "clip"}}>{props.row.original.link}</a>
    },
  },
]