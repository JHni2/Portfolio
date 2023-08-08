import Image from 'next/image';
import educationImg from 'public/education.png';

export default function Education() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-4xl font-bold my-4 text-center">Education</h2>
      <Image src={educationImg} alt="educationImage" className="rounded-3xl overflow-hidden" />
    </section>
  );
}
