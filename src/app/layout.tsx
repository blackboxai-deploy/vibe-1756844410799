import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Hello World App",
  description: "A simple Hello World application built with Next.js and shadcn/ui",
  keywords: ["Next.js", "React", "Hello World", "shadcn/ui", "Tailwind CSS"],
  authors: [{ name: "Hello World App" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}