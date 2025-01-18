import Link from "next/link";

type SkillProps = {
    skill: {
      title: string;
      description: string;
      logo: string;
      tech: string; 
    };
  };
  
  export const Skills: React.FC<SkillProps> = ({ skill }) => {
    return (
      <Link href={`${skill.tech}`}>
        <article className="p-4 md:p-8 group flex items-center gap-4 border border-zinc-800 rounded-lg hover:border-zinc-600 transition">
          <img
            src={skill.logo}
            alt={`${skill.title} logo`}
            className="w-12 h-12 rounded-full"
            style={{ objectFit: "cover" }}
          />
          <div>
            <h2 className="text-xl font-medium duration-1000 lg:text-2xl text-zinc-200 group-hover:text-white font-display flex items-center gap-2">
              {skill.title}
            </h2>
            <p className="mt-2 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
              {skill.description}
            </p>
          </div>
        </article>
      </Link>
    );
  };