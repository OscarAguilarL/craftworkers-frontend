import { FC } from 'react'

interface Props {
  className?: string
}

export const CardGrid: FC<Props> = ({ children, className = '' }) => {
  return <div className={`grid grid-cols-2 gap-6 ${className}`}>{children}</div>
}
