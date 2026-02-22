"use client";

interface TeamMemberProps {
  name: string;
  role: string;
  photoUrl: string;
}

function TeamMember({ name, role, photoUrl }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center gap-[20px] flex-1">
      <div
        className="w-full h-[360px] rounded bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url('${photoUrl}')` }}
      />
      <div className="flex flex-col items-center gap-[6px]">
        <span className="font-display text-[24px] font-semibold text-white">
          {name}
        </span>
        <span className="font-body text-[13px] text-[var(--primary)]">
          {role}
        </span>
      </div>
    </div>
  );
}

export function OurTeam() {
  const members: TeamMemberProps[] = [
    {
      name: "Sophie Laurent",
      role: "Founder & Creative Director",
      photoUrl:
        "https://images.unsplash.com/photo-1763757321139-e7e4de128cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
    },
    {
      name: "Marcus Chen",
      role: "Head of Curation",
      photoUrl:
        "https://images.unsplash.com/photo-1758518729314-b02874db8c37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
    },
    {
      name: "Isabella Rossi",
      role: "Design Lead",
      photoUrl:
        "https://images.unsplash.com/photo-1706087467451-5b8650301c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
    },
    {
      name: "James Okafor",
      role: "Operations Director",
      photoUrl:
        "https://images.unsplash.com/photo-1758691737644-ef8be18256c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-[60px] px-[80px] py-[100px] w-full">
      {/* Team Header */}
      <div className="flex flex-col items-center gap-[16px]">
        <span className="font-body text-[12px] font-semibold text-[var(--primary)] tracking-[3px]">
          THE TEAM
        </span>
        <h2 className="font-display text-[44px] font-semibold text-white">
          The People Behind the Magic
        </h2>
        <p className="font-body text-[16px] text-[var(--muted-foreground)]">
          Passionate experts united by a shared love for the art of gifting.
        </p>
      </div>

      {/* Team Grid */}
      <div className="flex gap-[32px] w-full">
        {members.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
