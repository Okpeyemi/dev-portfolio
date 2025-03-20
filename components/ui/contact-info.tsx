import { Mail, MapPin, Phone } from "lucide-react"
import { contactInfo } from "@/data/contact-info"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-4">
        <div className="bg-[#252529] p-3 rounded-lg">
          <Mail className="w-6 h-6 text-yellow-300" />
        </div>
        <div>
          <h4 className="font-medium mb-1">Email</h4>
          <p className="text-gray-400">{contactInfo.email}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-[#252529] p-3 rounded-lg">
          <MapPin className="w-6 h-6 text-yellow-300" />
        </div>
        <div>
          <h4 className="font-medium mb-1">Location</h4>
          <p className="text-gray-400">{contactInfo.location}</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="bg-[#252529] p-3 rounded-lg">
          <Phone className="w-6 h-6 text-yellow-300" />
        </div>
        <div>
          <h4 className="font-medium mb-1">Phone</h4>
          <p className="text-gray-400">{contactInfo.phone}</p>
        </div>
      </div>
    </div>
  )
}

