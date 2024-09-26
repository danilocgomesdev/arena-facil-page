import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Carousel } from "./carousel";
import { Button, buttonVariants } from "./ui/button";

export const Hero = () => {
  return (
    <section className="w-full min-h-screen lg:pl-40  lg:pr-40 flex flex-col lg:flex-row items-center justify-center py-20 md:py-32 gap-10">
      {/* Texto à esquerda */}
      <div className="w-full lg:w-1/2 text-center lg:text-start space-y-6 px-4 lg:px-8">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Shadcn
            </span>{" "}
            landing page
          </h1>{" "}
          for{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              React
            </span>{" "}
            developers
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Build your React landing page effortlessly with the required sections to your project.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Get Started</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Carousel à direita */}
      <div className="w-full lg:w-1/2">
        <div className="relative h-56 md:h-96 w-full">
          <Carousel />
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
