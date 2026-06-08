const techStack = [
    { name: "Next.js", color: "text-foreground" },
    { name: "Tailwind CSS", color: "text-secondary" },
    { name: "Supabase", color: "text-green-500" },
    { name: "n8n", color: "text-red-400" },
    { name: "OpenAI", color: "text-primary" },
    { name: "TypeScript", color: "text-blue-400" },
];

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-20 px-5 bg-background">
            <p className="text-lg font-medium text-center text-foreground-accent">
                Built with <span className="text-primary">industry-leading</span> technologies
            </p>
            <div className="mt-8 w-full flex flex-wrap flex-row items-center justify-center gap-8 sm:gap-12">
                {techStack.map((tech) => (
                    <span
                        key={tech.name}
                        className={`text-xl sm:text-2xl font-bold manrope opacity-60 hover:opacity-100 transition-opacity ${tech.color}`}
                    >
                        {tech.name}
                    </span>
                ))}
            </div>
        </section>
    )
}

export default Logos
