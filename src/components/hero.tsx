interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <div className="flex flex-col items-start justify-center w-full mt-8">
      <div className="flex items-center gap-2">
        <img
          className="rounded-full w-16"
          src="/prof-close.jpeg"
          alt="profile pic"
        />
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hi, I'm Łukasz.
        </h1>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Welcome to my chunk of the internet. I'm a software dev with 10 years of
        experience, specialized in the JVM, AI & MLOps. Currently building{" "}
        <a className="underline" href="https://cvtoblind.com">
          CvToBlind
        </a>
        .
      </p>
    </div>
  );
}
