import { Navbar, Footer } from "../../components"

const Page = ({ children }:{ children: JSX.Element } ) => {
  return (
    <>
      <Navbar />
      { children }
      <Footer />
    </>
  )
}

export default Page
