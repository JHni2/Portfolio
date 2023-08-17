export default function SkillSetPage() {
  const FEList = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'NextJS', 'Recoil', 'TailwindCSS'];
  const ToolList = ['VS Code', 'Git', 'Firebase', 'Figma', 'Slack', 'Notion'];

  return (
    <section className="flex flex-col items-center gap-6">
      <h2 className="text-2xl md:text-4xl font-bold my-4">Skill Set</h2>
      <div className="flex justify-between w-full gap-4 md:gap-16">
        <div className="shadow-lg rounded-3xl w-full text-center py-6 dark:bg-navy">
          <p className="font-bold text-xl md:text-2xl mb-5">FE</p>
          <ul>
            {FEList.map((item) => (
              <li key={item} className="text-base md:text-lg text-pointGrey leading-8">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="shadow-lg rounded-3xl w-full text-center py-6 dark:bg-navy">
          <p className="font-bold text-xl md:text-2xl mb-5">Tools</p>
          <ul className="h-[82%] flex flex-col justify-center">
            {ToolList.map((item) => (
              <li key={item} className="text-base md:text-lg text-pointGrey leading-8">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
