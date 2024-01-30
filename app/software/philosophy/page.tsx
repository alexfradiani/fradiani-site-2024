import { Card } from "@/app/software/template-ui//Card";
import { Section } from "@/app/software/template-ui//Section";
import { SimpleLayout } from "@/app/software/template-ui//SimpleLayout";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: "Philosophy",
  description: "Thoughts on the things that matter",
};

export default function Uses() {
  return (
    <SimpleLayout
      title="What Matters?"
      intro="This section is about something that people in technology and engineering tend to oversight, they usually call it &quot;soft skills&quot;, and although it covers some of that, I'm talking about something much more significant. It's about a way of thinking, and a way of being, that enables you to work effectively, individually, and in cooperation with others."
    >
      <div className="space-y-20">
        <ToolsSection title="THE MEASURE OF BALANCE">
          <Tool title="">
            This is the most powerful concept I&apos;ve learned to apply,
            professionally and in life. For anything you might encounter,
            it&apos;s likely that there will be contrasting ways of approaching
            it, and within those ways you&apos;re likely to find extremes. When
            you go too much into generalization and abstraction, something
            developers love to do, you over-engineer. And when you don&apos;t do
            enough of it, the work falls short for having little impact or too
            narrow of a scope. So having an internal radar to detect the right
            balance can make all the difference.
            <br />
            <br />
            You need to be disciplined, but you also need to be flexible. You
            need to dream and be creative, but you also need to be realistic and
            pragmatic as needed. Opposites are everywhere, and people who create
            stuff need to be able to identify how they influence what
            they&apos;re doing, and consciously act with awareness of them.
          </Tool>
        </ToolsSection>
        <ToolsSection title="THE WILL TO LEARN, AND THE WILL TO TEACH">
          <Tool title="">
            I believe that to be great at this one, you first need to have an
            internal desire for acquiring knowledge and experience, which is
            initially very personal and individualistic. But then you also need
            the desire to share and to help others in their own journeys. To
            have the humility to learn in all situations and from everyone no
            matter their stance or status. To have the courage to assume
            leadership and guide others when required.
          </Tool>
        </ToolsSection>
        <ToolsSection title="ASSERTIVE COMMUNICATION">
          <Tool title="">
            Everything in the world is communication. Some of us who learned to
            communicate with the machine through programming languages have made
            the mistake of thinking that we don&apos;t need to be that good at
            communicating with fellow humans because it&apos;s not the main job
            after all. In general, people in specialized fields tend to believe
            that there&apos;s some sort of compensation that covers one thing
            with the other. That&apos;s just not bad for the person that&apos;s
            not able to articulate their vision and knowledge effectively, it
            also leaves the space for others who might not be fit for the job to
            take more relevance than they should by exploiting their charisma
            and skillful rhetoric. <br />
            <br />
            Learning to speak your mind, with precision, with awareness, with
            determination, is invaluable in any field.
          </Tool>
        </ToolsSection>
        <ToolsSection title="CLEAR PURPOSE ABOVE TOOLING, CLEAR MINDSET ABOVE TECHNIQUE AND METHODOLOGY">
          <Tool title="">
            This is a big one in software. There are thousands and thousands of
            tech stack combinations. Developers can fall easily in a rat race
            for the newest, most effective, most used and shiniest tool.
            Although it&apos;s important to stay open, accept and sometimes
            embrace change, this industry in particular is guilty of whimsical
            behavior, chasing what&apos;s new for the sake of it, with minimal
            returns, and in most cases causing waste and the so-called and
            dreaded technical debt. <br />
            <br />I believe that you first need to focus, deeply, on knowing
            what you&apos;re looking for, what is it that you really need to do,
            what&apos;s your purpose. Then you think about what tools to use,
            accepting that there&apos;s probably no perfect one. So you adapt,
            but you adapt the tools to what your mind needs, not your mind to
            how the tool works, and that distinction makes a world of difference
            when developing products, and specially when creating something of
            any innovative value.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
