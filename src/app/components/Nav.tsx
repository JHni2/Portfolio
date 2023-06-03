export default function Nav() {
  const categories = ['Home', 'About', 'Project', 'Contact'];

  return (
    <div className="max-w-[768px] sticky inset-0 my-0 mx-auto">
      <ul className="py-3 text-center flex justify-evenly">
        {categories.map((cateogory) => (
          <li className="cursor-pointer" key={cateogory}>
            {cateogory}
          </li>
        ))}
      </ul>
    </div>
  );
}
