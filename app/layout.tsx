import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Cihan Basoglu | Data Engineer and Software Developer", description:"Data engineering, analytics, and software development by Cihan Basoglu in Edmonton, Canada.", icons:{icon:"/favicon.svg"} };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
