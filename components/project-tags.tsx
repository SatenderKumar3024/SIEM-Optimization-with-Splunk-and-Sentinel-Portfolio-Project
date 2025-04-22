import { Badge } from "@/components/ui/badge"

export default function ProjectTags() {
  const tags = [
    "Splunk",
    "Sentinel",
    "MITRE ATT&CK",
    "SIEM",
    "Python",
    "KQL",
    "SPL",
    "Threat Detection",
    "Incident Response",
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag} className="bg-[#ff0066]/20 hover:bg-[#ff0066]/30 text-[#3adc9d] cursor-pointer">
          {tag}
        </Badge>
      ))}
    </div>
  )
}
