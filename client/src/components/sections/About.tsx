import { disciplines } from "@/content";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-rule">
      <div className="wrap grid gap-12 md:grid-cols-12">
        <h2 className="h2 md:col-span-4">About</h2>

        <div className="md:col-span-8">
          <div className="prose-serif max-w-[40rem]" style={{ fontSize: "var(--text-lede)", lineHeight: 1.5 }}>
            <p>
              I&rsquo;m a chemist. My training is in analytical chemistry, and
              the habits stuck: state the hypothesis, control the variables,
              measure, and write down what actually happened.
            </p>
            <p>
              That has taken me from mass spectrometry research to materials
              engineering at CoreTek, where we design composite pickleball
              paddles. Programming is a hobby. I&rsquo;m self-taught, I lean on
              AI coding assistants, and I use small projects to learn what
              these tools can do and where they fall short.
            </p>
          </div>

          <dl className="mt-14 grid gap-x-8 gap-y-10 border-t border-ink pt-8 sm:grid-cols-3">
            {disciplines.map(d => (
              <div key={d.area}>
                <dt className="text-[1.0625rem] font-semibold tracking-[-0.015em]">{d.area}</dt>
                <dd className="mt-3">
                  <ul className="space-y-1.5 font-serif text-[1.0625rem] text-graphite">
                    {d.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
