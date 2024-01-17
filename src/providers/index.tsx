import RouterProvider from './RouterProvider'

type ProvidersProps = {
  children: React.ReactNode
}
const Providers = ({ children }: ProvidersProps) => {
  return <RouterProvider>{children}</RouterProvider>
}

export default Providers
