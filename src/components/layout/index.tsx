import * as S from "./styles"

interface LayoutProps {
  children: JSX.Element | JSX.Element[] | string | string[]
}

function Layout({ children }: LayoutProps) {
  return <S.Main>{children}</S.Main>
}

export default Layout
