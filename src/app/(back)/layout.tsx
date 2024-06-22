'use client'

import { Box, Container, styled, useMediaQuery } from "@mui/material"
import Sidebar from "@/app/components/back/sidebar/Sidebar"
import Header from "@/app/components/back/header/Header"

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}))

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}))

interface Props {
  children: React.ReactNode;
}

export default function BackLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) { 

  // กำหนดตัวแปรเช็คขนาดหน้าจอ
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'))
  const hideMenu: any = lgUp ? true : false

  return (
    <MainWrapper>

        {/* Sidebar */}
        {
          hideMenu ? <Sidebar /> : null
        }
        
        <PageWrapper>
            {/* Header */}
            <Header />

            <Container
                sx={{
                    maxWidth: "100%!important",
                }}
            >
                  {/* Page Content */}
                  <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
                    {children}
                  </Box>
            </Container>
            
        </PageWrapper>

    </MainWrapper>
  )
}