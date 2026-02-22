interface SkillBadgeProps {
  name: string;
}

export const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-500 text-white/80 hover:bg-white/10 hover:text-accent transition-smooth hover:border-accent/50">
      {name}
    </div>
  );
};
