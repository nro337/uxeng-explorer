'use client'
import * as React from "react";

import { useState } from "react";
import { CustSelect } from "./select-custom";
import { useRouter } from "next/navigation";

export function WrapperComponent({children}:{children: React.ReactNode}) {
  const [level, setLevel] = useState<string>('BACHELORS')

  const router = useRouter()
  React.useEffect(() => {
    router.push(`?level=${level}`)
    router.refresh()
  }, [level])

  return (
    <>
      <div className="flex flex-row justify-start items-center">
        <h1 className="mr-4">Program:</h1>
        <CustSelect setLevel={setLevel} />
      </div>
      {children}
    </>
  );
}