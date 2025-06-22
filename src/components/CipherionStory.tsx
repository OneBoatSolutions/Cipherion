import { Timeline } from "./animated/timeline"
import { Shield, Award, Rocket, Building2, Trophy, Users } from "lucide-react"
import Image from "next/image";
import { TeamsSection } from "./TeamsSection";
export default function CipherionTimeline() {
  const data = [
    {
      title: "2024: The Spark",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-[#6d18ff]" />
            <h4 className="text-lg font-semibold text-[#ffffff]">The Beginning</h4>
          </div>
          <p className="mb-6 text-sm font-normal text-[#e0dbfb]/80 md:text-base leading-relaxed">
            An idea was born during casual discussions around rising cyber threats and the future of encryption. The
            vision was simple—make data protection smarter, lighter, and future-ready.
          </p>
          <div className="bg-gradient-to-r from-[#18062a]/60 to-[#43256e]/40 p-6 rounded-lg border border-[#43256e]/50 backdrop-blur-sm">
            <h5 className="font-semibold text-[#ffffff] mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#6d18ff] rounded-full"></div>
              The Vision
            </h5>
            <p className="text-sm text-[#e0dbfb]/80 leading-relaxed">
              Cipherion was born from curiosity, late-night discussions, and a passion for cybersecurity. What started
              in a classroom soon uncovered a powerful insight: key-based encryption, long trusted, was now a silent
              vulnerability in a data-driven world.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024: Mini Project to Mission",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Rocket className="h-5 w-5 text-[#7143fe]" />
            <h4 className="text-lg font-semibold text-[#ffffff]">From Concept to Prototype</h4>
          </div>
          <p className="mb-6 text-sm font-normal text-[#e0dbfb]/80 md:text-base leading-relaxed">
            Cipherion started as a college mini-project to explore keyless encryption. The prototype proved that
            sensitive data could be secured without ever storing encryption keys.
          </p>
          <div className="bg-[#43256e]/20 p-4 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#7143fe] rounded-full"></div>
              <h6 className="font-medium text-[#ffffff]">The Breakthrough</h6>
            </div>
            <p className="text-sm text-[#e0dbfb]/80">
              We envisioned a bold alternative—encryption without key storage. By removing the need to store or manage
              encryption keys, we eliminated one of the most exploited attack vectors in modern data systems.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2024: National Recognition",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="h-5 w-5 text-[#d9b6ff]" />
            <h4 className="text-lg font-semibold text-[#ffffff]">Smart India Hackathon Victory</h4>
          </div>
          <p className="mb-6 text-sm font-normal text-[#e0dbfb]/80 md:text-base leading-relaxed">
            The concept was awarded at the Smart India Hackathon and presented as a potential solution to DMRC (Delhi
            Metro Rail Corporation), highlighting how Cipherion's approach could secure infrastructure-level data and
            revealing the real-world impact of next-gen encryption.
          </p>

          {/* Winning Team Photo */}
          <div className="mb-6 rounded-lg overflow-hidden border border-[#43256e]/50">
            <Image
              src="/img.jpg"
              alt="Cipherion team celebrating Smart India Hackathon victory with ₹1,00,000 prize"
              width={1280}
              height={720}
              className="w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
            <div className="p-3 bg-[#18062a]/60 backdrop-blur-sm">
              <p className="text-xs text-[#e0dbfb]/60 text-center">
                🏆 Cipherion team celebrating our Smart India Hackathon victory with ₹1,00,000 prize
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#43256e]/20 p-4 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-4 w-4 text-[#d9b6ff]" />
                <h6 className="font-medium text-[#ffffff]">National Recognition</h6>
              </div>
              <p className="text-sm text-[#e0dbfb]/80">
                Won Smart India Hackathon with innovative keyless encryption solution
              </p>
            </div>
            <div className="bg-[#18062a]/40 p-4 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-[#9569fe]" />
                <h6 className="font-medium text-[#ffffff]">Real-World Impact</h6>
              </div>
              <p className="text-sm text-[#e0dbfb]/80">
                Proposed infrastructure-level security solution to Delhi Metro Rail Corporation
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025: The Build-Up",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="h-5 w-5 text-[#9569fe]" />
            <h4 className="text-lg font-semibold text-[#ffffff]">Growing Momentum</h4>
          </div>
          <p className="mb-6 text-sm font-normal text-[#e0dbfb]/80 md:text-base leading-relaxed">
            Early collaborations, validations, and growing industry interest turned Cipherion from a promising concept
            into a focused venture.
          </p>
          <div className="space-y-4">
            <div className="bg-[#43256e]/20 p-4 rounded-lg border border-[#43256e]/40 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#9569fe] rounded-full"></div>
                <h6 className="font-medium text-[#ffffff]">Industry Validation</h6>
              </div>
              <p className="text-sm text-[#e0dbfb]/80">
                Early collaborations and growing interest from key industries validated our approach
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-[#18062a]/40 p-3 rounded-lg border border-[#43256e]/30 backdrop-blur-sm text-center group hover:border-[#6d18ff]/50 transition-all duration-300">
                <Building2 className="h-6 w-6 text-[#6d18ff] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs font-medium text-[#e0dbfb]">Fintech Interest</p>
              </div>
              <div className="bg-[#18062a]/40 p-3 rounded-lg border border-[#43256e]/30 backdrop-blur-sm text-center group hover:border-[#9569fe]/50 transition-all duration-300">
                <Shield className="h-6 w-6 text-[#9569fe] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs font-medium text-[#e0dbfb]">Healthcare Validation</p>
              </div>
              <div className="bg-[#18062a]/40 p-3 rounded-lg border border-[#43256e]/30 backdrop-blur-sm text-center group hover:border-[#d9b6ff]/50 transition-all duration-300">
                <Building2 className="h-6 w-6 text-[#d9b6ff] mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs font-medium text-[#e0dbfb]">Manufacturing Partnerships</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Mid-2025: Cipherion is Born",
      content: (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-[#d9b6ff]" />
            <h4 className="text-lg font-semibold text-[#ffffff]">Official Launch</h4>
          </div>
          <p className="mb-6 text-sm font-normal text-[#e0dbfb]/80 md:text-base leading-relaxed">
            Fueled by real-world validation and early support, Cipherion officially launched with a zero-key, zero-trust
            architecture—built to tackle quantum risks and modern compliance needs.
          </p>
          <div className="bg-gradient-to-r from-[#18062a]/60 to-[#43256e]/40 p-6 rounded-lg border border-[#43256e]/50 backdrop-blur-sm">
            <h5 className="font-semibold text-[#ffffff] mb-3 text-center">Our Promise Today</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center mb-4">
              <div className="bg-[#02010f]/80 p-3 rounded-lg shadow-sm border border-[#43256e]/30 group hover:border-[#6d18ff]/50 transition-all duration-300">
                <p className="text-lg font-bold text-[#6d18ff] group-hover:scale-110 transition-transform duration-300">
                  Zero
                </p>
                <p className="text-xs text-[#e0dbfb]/80">Key</p>
              </div>
              <div className="bg-[#02010f]/80 p-3 rounded-lg shadow-sm border border-[#43256e]/30 group hover:border-[#7143fe]/50 transition-all duration-300">
                <p className="text-lg font-bold text-[#7143fe] group-hover:scale-110 transition-transform duration-300">
                  Zero
                </p>
                <p className="text-xs text-[#e0dbfb]/80">Trust</p>
              </div>
              <div className="bg-[#02010f]/80 p-3 rounded-lg shadow-sm border border-[#43256e]/30 group hover:border-[#9569fe]/50 transition-all duration-300">
                <p className="text-lg font-bold text-[#9569fe] group-hover:scale-110 transition-transform duration-300">
                  Zero
                </p>
                <p className="text-xs text-[#e0dbfb]/80">Compromise</p>
              </div>
              <div className="bg-[#02010f]/80 p-3 rounded-lg shadow-sm border border-[#43256e]/30 group hover:border-[#d9b6ff]/50 transition-all duration-300">
                <p className="text-lg font-bold text-[#d9b6ff] group-hover:scale-110 transition-transform duration-300">
                  Zero
                </p>
                <p className="text-xs text-[#e0dbfb]/80">Change</p>
              </div>
            </div>
            <p className="text-sm text-[#e0dbfb]/60 text-center italic">
              "Today, we deliver quantum-resilient, zero-trust, keyless encryption to industries like fintech,
              healthcare, and manufacturing, protecting PII, PHI, and PCI data at scale."
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
      <TeamsSection/>
    </div>
  )
}
