import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full px-8 mt-8">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="./profile.jpeg" alt="profile pic" />
          <AvatarFallback>LM</AvatarFallback>
        </Avatar>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hi, I'm Łukasz.
        </h1>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Welcome to my chunk of the internet. I write about web development,
        programming, and other tech-related stuff. I'm a software dev with 10
        years of experience, specialized in the JVM, AI & MLOps. Currently
        building{" "}
        <a className="underline" href="https://cvtoblind.com">
          CvToBlind
        </a>
      </p>
    </div>
  );
}
