import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3 } from "lucide-react"

export default function ProjectOutcome() {
  return (
    <section className="space-y-8">
      <Card className="bg-gradient-to-r from-[#1a1a24] to-[#2c0a35] border-[#FF0066]/20 overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-[#FF0066]/20 blur-3xl"></div>
          <div className="absolute left-1/4 top-1/2 w-96 h-96 rounded-full bg-[#FF0066]/10 blur-3xl"></div>
        </div>

        <CardContent className="p-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                See how this project improved SOC efficiency by 25%
              </h3>
              <p className="text-[#3adc9d] max-w-2xl">
                This SIEM optimization project not only improved threat detection capabilities but also significantly
                enhanced overall SOC efficiency through automation and streamlined workflows. Explore the detailed case
                study to learn more about the implementation and results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FF0066] hover:bg-[#FF0066]/80 text-white gap-2 shadow-[0_0_15px_rgba(255,0,102,0.3)] hover:shadow-[0_0_20px_rgba(255,0,102,0.5)] transition-all">
                <BarChart3 className="h-4 w-4" />
                View Detailed Report
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 gap-2 text-white">
                Contact for Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
