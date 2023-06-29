export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
  
       <>
         <nav>
          <ul>
            <li>Perfil</li>
            <li>Conta</li>
          </ul>
        </nav>
        {children}
       </>

  )
}
