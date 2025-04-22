import { Badge } from "@/components/ui/badge"

export default function DashboardHeader() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight text-[#3adc9d]">SIEM Optimization with Splunk and Sentinel</h1>
      <Badge className="bg-[#ff0066] hover:bg-[#ff0066]/80">Portfolio Project</Badge>

      <div className="mt-6 space-y-4">
        <p className="text-lg text-[#3adc9d]">
          <span className="font-semibold">Satender Kumar</span> optimized threat detection within the security
          operations center (SOC) by leveraging SIEM tools like <span className="text-[#ff0066]">Splunk</span> and
          <span className="text-[#ff0066]"> Microsoft Sentinel</span>, improving
          <span className="text-[#ff0066]"> APT detection by 15%</span> using the MITRE ATT&CK framework.
        </p>

        <p className="text-[#3adc9d]">
          Incorporated custom KQL/SPL queries for more accurate and efficient detection of advanced persistent threats
          (APTs).
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-[#3adc9d]">Key Features</h3>
          <ul className="list-disc list-inside space-y-1 pl-4 text-[#3adc9d]">
            <li>Real-time threat detection</li>
            <li>Visualized APT attacks through dashboards</li>
            <li>Enhanced detection of malicious IPs using the MITRE ATT&CK framework</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
