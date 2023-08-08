/* eslint-disable react/prop-types */

const MainLayout = ({children}) => {
  return (
    <main className='container bg-primary mx-auto flex'>{children}</main>
  )
}

export default MainLayout