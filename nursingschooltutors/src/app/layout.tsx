import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import QuickChat from '@/components/ui/QuickChat'

export const metadata: Metadata = {
  title: {
    default: 'Nursing School Tutors | #1 Nursing Exam & Class Help | A\'s & B\'s Guaranteed',
    template: '%s | NursingSchoolTutors.com',
  },
  description: 'Pay us to improve your grades — Guaranteed A\'s and Min B. AI-free Nursing Assignments Help, Proctored Exam Help, Take My Online Class. Expert tutors 24/7.',
  keywords: ['nursing school tutors', 'proctored exam help', 'take my online nursing class', 'ATI TEAS help', 'HESI exam help', 'nursing assignment help'],
  metadataBase: new URL('https://nursingschooltutors.com'),
  openGraph: {
    siteName: 'NursingSchoolTutors.com',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <QuickChat />
      </body>
    </html>
  )
}
