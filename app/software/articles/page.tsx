import { type Metadata } from "next";

import { Card } from "@/app/software/template-ui/Card";
import { SimpleLayout } from "@/app/software/template-ui/SimpleLayout";
import {
  type ArticleWithSlug,
  getAllArticles,
} from "@/app/software/lib/articles";
import Link from "next/link";

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/software/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {article.customDates}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read more</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {article.customDates}
      </Card.Eyebrow>
    </article>
  );
}

export const metadata: Metadata = {
  title: "Career",
  description: "Companies I've worked with, roles I've played",
};

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <SimpleLayout
      title="Companies I've worked with, roles I've played"
      intro=""
    >
      <p className="mb-10 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
        Here&apos;s a summary of the major events in my engineering career. If
        you&apos;d like to read everything in order, start with the last entry
        at the bottom of the page. On the other hand, if you&apos;re interested
        in a more concise version you can{" "}
        <Link
          className="font-medium text-teal-500"
          href={"/software/Alexander-Fradiani-CV.pdf"}
        >
          download the CV{" "}
        </Link>
        file.
      </p>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
