'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Dispatch, SetStateAction } from 'react'

export const CustSelect = ({setLevel}:{setLevel: Dispatch<SetStateAction<string>>}) => {

  return (
    <Select onValueChange={(i) => setLevel(i)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Bachelors" defaultValue='BACHELORS' />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="BACHELORS">Bachelors</SelectItem>
        <SelectItem value="MASTERS">Masters</SelectItem>
        <SelectItem value="PHD">Doctorate</SelectItem>
        <SelectItem value="POSTDOC">Post-doc</SelectItem>
        <SelectItem value="ASSOCIATES">Associates</SelectItem>
        <SelectItem value="PHD">Doctorate</SelectItem>
        <SelectItem value="CERTIFICATE">Certificate</SelectItem>
        <SelectItem value="MINOR">Minor</SelectItem>
        <SelectItem value="FOCUS">Focus</SelectItem>
        <SelectItem value="OTHER">Other</SelectItem>
      </SelectContent>
    </Select>
  );
};
