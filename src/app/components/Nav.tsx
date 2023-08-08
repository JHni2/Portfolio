export default function Nav() {
  const categories = ['Home', 'About', 'Project', 'Contact'];

  return (
    <div className="max-w-[768px] w-full sticky inset-0 my-0 mx-auto">
      <ul className="text-center flex justify-evenly">
        {categories.map((cateogory) => (
          <li className="cursor-pointer text-lg font-semibold" key={cateogory}>
            {cateogory}
          </li>
        ))}
      </ul>
    </div>
  );
}
