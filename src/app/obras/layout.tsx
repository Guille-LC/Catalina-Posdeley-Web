import type { ReactNode } from 'react'
import BotoneraGeneros from './components/BotoneraGeneros'

export default function ObrasLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BotoneraGeneros />
      {children}
    </>
  )
}
