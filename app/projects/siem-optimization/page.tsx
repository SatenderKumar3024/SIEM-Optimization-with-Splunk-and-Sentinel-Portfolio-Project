import ProjectHeader from "@/components/projects/project-header"
import ProjectOverview from "@/components/projects/project-overview"
import RealTimeDashboard from "@/components/projects/real-time-dashboard"
import KeyMetrics from "@/components/projects/key-metrics"
import IncidentTimeline from "@/components/projects/incident-timeline"
import AdvancedMetrics from "@/components/projects/advanced-metrics"
import TechStack from "@/components/projects/tech-stack"
import CodeSnippets from "@/components/projects/code-snippets"
import ComplianceReports from "@/components/projects/compliance-reports"
import CertificationsSkills from "@/components/projects/certifications-skills"
import ProjectTags from "@/components/projects/project-tags"
import ProjectOutcome from "@/components/projects/project-outcome"
import ContactSection from "@/components/projects/contact-section"
import Footer from "@/components/projects/footer"
import InsightsSection from "@/components/projects/insights-section"

export default function SIEMOptimizationPage() {
  return (
    <div className="min-h-screen bg-[#121218] text-white">
      <ProjectHeader
        title="SIEM Optimization for Threat Detection"
        description="Implemented SIEM Optimization using Splunk and Microsoft Sentinel to improve Advanced Persistent Threat (APT) detection by 15%. Using the MITRE ATT&CK framework, tailored KQL/SPL queries were created to enhance threat detection."
      />

      <div className="container mx-auto px-4 py-12 space-y-16">
        <ProjectOverview />
        <RealTimeDashboard />
        <InsightsSection />
        <KeyMetrics />
        <IncidentTimeline />
        <AdvancedMetrics />
        <TechStack />
        <CodeSnippets />
        <ComplianceReports />
        <CertificationsSkills />
        <ProjectTags />
        <ProjectOutcome />
        <ContactSection />
      </div>

      <Footer />
    </div>
  )
}
