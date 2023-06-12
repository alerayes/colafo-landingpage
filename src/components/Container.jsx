import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-0 w-full', className)}
      {...props}
    />
  )
}
