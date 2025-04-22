import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3 } from "lucide-react"

export default function CallToAction() {
  return (
    <Card className="bg-[#1a0d20] border-[#ff0066]/20">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-[#3adc9d]">
              See how this project helped improve the SOC efficiency by 25%
            </h3>
            <p className="text-[#3adc9d] mt-2">Explore the detailed case study and technical implementation details</p>
          </div>

          <Button className="bg-[#ff0066] hover:bg-[#ff0066]/80 text-white gap-2">
            <BarChart3 className="h-4 w-4" />
            View Detailed Report
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
