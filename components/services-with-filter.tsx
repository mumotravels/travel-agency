"use client"

import { useState } from "react"
import { ServiceCategories } from "./service-categories"
import { ServicePackagesGrid } from "./service-packages-grid"
import { ServicesIProps } from "@/lib/data-fetch"

export function ServicesWithFilter({ services }: { services: ServicesIProps[] }) {

  const [activeService, setActiveService] = useState(services[0].url)

  return (
    <>
      <ServiceCategories services={services} activeService={activeService} onServiceChange={setActiveService} />
      <ServicePackagesGrid services={services} activeService={activeService} />
    </>
  )
}
