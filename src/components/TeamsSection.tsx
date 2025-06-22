import { AuroraText } from "./animated/aurora-text";
import { GlowingEffect } from "./animated/glowing-card";
import { TeamMemberCard } from "./TeamsCard";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const TeamsSection = () => {
  const teamMembers = [
    {
      name: "Kunaal Shindagi",
      role: "Chief Executive Officer",
      image: "/k.jpg",
      description:
        "Visionary leader driving innovation in cybersecurity solutions. Expert in strategic planning and digital transformation with industry experience.",
    },
    {
      name: "Nagaraj Bhandare",
      role: "Chief Technology Officer",
      image: "/nags.jpg",
      description:
        "Technology innovator specializing in advanced security architectures. Leads our engineering teams in developing cutting-edge cybersecurity platforms.",
    },
    {
      name: "Pooja Ekbote",
      role: "Chief Marketing Officer",
      image: "/pooja.png",
      description:
        "Strategic marketing expert with deep understanding of cybersecurity markets. Drives brand awareness and customer engagement across global markets.",
    },
  ];

  return (
    <section className="min-h-screen rounded-2xl py-20 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-[#6d18ff]/20 to-[#7143fe]/20 rounded-full mb-6">
            <div className="px-4 py-2 bg-gradient-to-r from-[#6d18ff] to-[#7143fe] rounded-full text-sm font-semibold text-white">
              Leadership Team
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <AuroraText>Meet Our Team</AuroraText>
          </h1>

          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            The visionary leaders behind{" "}
            <span className="text-primary font-semibold">Cipherion</span>,
            driving innovation in cybersecurity and shaping the future of
            digital protection.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="transform transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <TeamMemberCard {...member} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          movementDuration={1.5}
          borderWidth={1}
        />
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-[#18062a] rounded-2xl border border-purple-800/30">
            <div className="flex -space-x-2">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="rounded-full  flex items-center justify-center text-white text-sm font-bold"
                >
                  {/* {member.name.split(' ').map(n => n[0]).join('')} */}
                  <Avatar>
                    <AvatarImage src={member.image}  />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-muted-foreground font-semibold">
                Ready to join our mission?
              </p>
              <p className="text-primary text-sm">
                Building the future of cybersecurity together
              </p>
            </div>
             
          </div>
              <div className="w-full flex justify-center ">
                <img
                  src="/bitmap.png" // path from /public
                  alt="Description of the image"
                  width={200}
                  height={200}
                  className="rounded-lg drop-shadow-[0_5px_15px_rgba(149,105,254,0.5)]"
                />
              </div>
        </div>
      </div>
    </section>
  );
};
