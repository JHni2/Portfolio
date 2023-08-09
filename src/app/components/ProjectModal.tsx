type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function ProjectModal({ onClose, children }: Props) {
  return (
    <section
      className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full z-50 bg-grey"
      onClick={(event) => {
        console.log(event.target, event.currentTarget);
        if (event?.target === event?.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white w-4/5 h-3/5 max-w-7xl">{children}</div>
    </section>
  );
}
