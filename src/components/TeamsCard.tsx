import Image from "next/image";
import { FollowerPointerCard } from "./animated/floating-pointer";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  description: string;
}

export const TeamMemberCard = ({
  name,
  role,
  image,
  description,
}: TeamMemberProps) => {
  const TitleComponent = ({ title, role }: { title: string; role: string }) => (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center text-white text-sm font-bold">
        {title
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="text-xs text-purple-300">{role}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-sm mx-auto">
      <FollowerPointerCard title={<TitleComponent title={name} role={role} />}>
        <div className="group relative h-full overflow-hidden rounded-2xl border border-purple-800/30 bg-gradient-to-br from-[#18062a] to-[#43256e] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-600/50">
          <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-purple-900/20 to-purple-800/20">
            <div className="absolute inset-0 bg-gradient-to-t from-[#18062a] via-transparent to-transparent z-10" />
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover transition-all duration-500 opacity-40 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18062a]/80 via-transparent to-transparent z-20" />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
            <div className="flex items-center mb-3">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#6d18ff] to-[#7143fe] flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 p-2 border-background  ">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={image}  className="object-cover" />
                    <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                <p className="text-sm font-semibold text-[#d9b6ff]">{role}</p>
              </div>
            </div>

            <p className="text-sm text-[#e0dbfb] leading-relaxed opacity-90">
              {description}
            </p>

            <div className="mt-4 flex justify-between items-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-[#6d18ff]"></div>
                <div className="w-2 h-2 rounded-full bg-[#7143fe]"></div>
                <div className="w-2 h-2 rounded-full bg-[#9569fe]"></div>
              </div>
              
            </div>
          </div>
        </div>
      </FollowerPointerCard>
    </div>
  );
};
