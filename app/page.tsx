import NavigationHeader from "@/components/navigation-header"
import DashboardHeader from "@/components/dashboard-header"
import MetricsSection from "@/components/metrics-section"
import AlertsSection from "@/components/alerts-section"
import TechnologiesSection from "@/components/technologies-section"
import AutomationSection from "@/components/automation-section"
import IncidentTimeline from "@/components/incident-timeline"
import ProjectTags from "@/components/project-tags"
import CallToAction from "@/components/call-to-action"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a12] text-white">
      <NavigationHeader />
      <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <MetricsSection />
          <AlertsSection />
        </div>
        <div className="mt-8">
          <TechnologiesSection />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <AutomationSection />
          <IncidentTimeline />
        </div>
        <div className="mt-8">
          <ProjectTags />
        </div>
        <div className="mt-12">
          <CallToAction />
        </div>
        <div className="mt-16">
          <ContactSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}
