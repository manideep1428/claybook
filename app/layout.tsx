import type React from "react"
import "@/app/globals.css"
import { Nunito } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "ClayPals - Clay-Styled Social Platform",
  description: "A unique cartoon clay-styled social media platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'