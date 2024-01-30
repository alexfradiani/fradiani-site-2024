import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/app/software/template-ui/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/app/software/template-ui/SocialIcons";
import portraitImage from "@/app/software/images/portrait.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "I&apos;m Alex. Here&apos;s my story.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Alex, eclectic mix of technologist and multidisciplinary
            artist.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My first passion was music, I became obsessed with the guitar when
              I was a teenager. As a kid I loved watching movies and playing
              videogames, but wasn&apos;t overly interested in technology. Then
              at some point I saw The Matrix trilogy, and to me it wasn&apos;t
              just an entertainnment flick, no, it was a premonition. I remember
              thinking, &quot;I want to know how the architect created this
              whole thing&quot;, funny, I don&apos;t recall phantasizing with
              being Neo.
            </p>
            <p>
              More than 20 years later I&apos;m seeing it slowly coming into
              reality, just look at the most recent AI/VR/AR stuff. It&apos;s
              both exciting and painful because the world is not ready and
              we&apos;re more likely to create dystopia than utopia. But here we
              are.
            </p>
            <p>
              I&apos;m working in carving a path between my artistic strands and
              the experience and skills I&apos;ve built in the world of software
              over the years, I&apos;ve had periods of polarization towards one
              or the other in different stages in my life, and I just seem to be
              always in a process of discovery where the ground is never fully
              settled.
            </p>
            <p>
              Always exploring, always learning, I&apos;m pretty good at a few
              things but I hope you never catch me saying that I&apos;m an
              expert in anything. Eternal apprentice, because that&apos;s where
              the fun is at.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/alexfradiani"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/alex-fradiani"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:alexander@fradiani.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              alexander@fradiani.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
