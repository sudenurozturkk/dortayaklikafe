import tables from '@/data/tables.json'
import TablePageClient from './TablePageClient'
import { notFound } from 'next/navigation'

const tableIds = tables as string[]

export const dynamic = 'error'

export function generateStaticParams() {
  return tableIds.map((id) => ({ id }))
}

export default function TablePage({ params }: { params: { id: string } }) {
  let decoded = decodeURIComponent(params.id)
  if (!tableIds.includes(decoded) && decoded.includes('%')) {
    decoded = decodeURIComponent(decoded)
  }

  if (!tableIds.includes(decoded)) {
    notFound()
  }

  return <TablePageClient tableId={decoded} />
}

