import { getClient } from '@/lib/drupal-client'
import { GET_HOMEPAGE_DATA } from '@/lib/queries'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamic = 'force-dynamic'



export async function generateMetadata(): Promise<Metadata> {
  const title = 'TrustShield Insurance - Protecting What Matters Most Since 1985'
  const description = 'Comprehensive insurance solutions designed to protect your family, home, and business with personalized coverage and dedicated support.'

  return {
    title,
    description,
    keywords: ['Insurance', 'Home Insurance', 'Auto Insurance', 'Life Insurance', 'Business Insurance', 'Coverage'],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home() {
  // Check if the app is properly configured
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()

  try {
    const data = await client.raw(GET_HOMEPAGE_DATA)
    const homepageContent = data?.nodeHomepages?.nodes?.[0] || null

    // Check if connected but no content exists - show content import guide
    if (!homepageContent) {
      const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
      return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
    }

    return <HomepageRenderer homepageContent={homepageContent} />
  } catch (error) {
    console.error('Error fetching homepage:', error)
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }
}
