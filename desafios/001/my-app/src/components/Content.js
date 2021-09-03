import Button from './Button'
import * as Title from './Title'

const Content = () => (
  <main className="content">
    <article>
      <section>
        <Title.H1>Stealing Game Animation Techniques to Engage Users</Title.H1>
        <Title.H2>
          This is an article for web developers who want to get fancy-shmancy
          with the finest animations around, but don’t want to do it at the cost
          of annoying users.
        </Title.H2>

        <time>Sep 2, 2021</time>

        <p>
          Today’s websites are overflowing with animations—often{' '}
          <em>too many</em>. They get in the way of the content and slow down
          our busy users. But at the same time: they’re wonderful. They bring
          websites to life, are fun to implement and can be incredibly
          impressive to show off. I think they’re great. Sorry impatient users.
        </p>
        <p>
          The way I see it, the problem isn’t necessarily that websites have too
          many animations, but that the animations don’t vibe with the content
          they’re promoting. They’re out of place with their subject matter.
          They feel contrived and provide no additional value.
        </p>
        <p>
          This is an article for web developers who want to get fancy-shmancy
          with the finest animations around, but don’t want to do it at the cost
          of annoying users. I’ll show you some of the ways I’ve personally used
          website animations while trying to annoy very few users. You might be
          thinking that “not annoying users” is a very low bar that I’ve set and
          well, uh.. hmm.. yes. Good point.
        </p>
        <p>
          This is a topic I’ve somewhat stumbled my way into. I work as a web
          developer for an indie video game publisher called{' '}
          <a href="https://www.devolverdigital.com/">Devolver Digital</a>. I,
          along with <a href="https://twitter.com/vieko">Vieko</a>, make
          websites for these video games. While I’m primarily a dev, a good
          chunk of my job is to conceptualize and create designs. I once thought
          that design didn’t seem that hard, the truth is, as most of you
          probably know, it’s not that straightforward. It’s really, really
          hard.
        </p>
        <p>
          When I first started making video game websites, I would sketch it out
          in a notebook. This would be fine, but then when I tried to implement
          the design in Photoshop, it just wouldn’t come together. I would
          restart from scratch and try again. It still wouldn’t work. Then I
          would try to skip the whole design step and jump into the code, hoping
          that the <code>animations</code> would bring it all together. The
          animations were cool, but it still wasn’t good enough. My design
          skills were lacking.
        </p>
        <p>But then I figured out a way to fake it.</p>
        <p>
          Now, when I show website concepts to my colleagues and clients for
          feedback, they tell me that{' '}
          <strong>I’m the best designer in the whole world</strong> and they
          send me cookies. They don’t know that I’m hiding a terrible secret.
        </p>
        <p>
          I don’t know if I should reveal this secret. Web designers around the
          world are going to hate me. My colleagues will ask for their cookies
          back. OK—I ate the cookies. I’ll let you in on the secret. The secret
          is that…
        </p>
        <Title.H2>I copy everything from video games.</Title.H2>
        <p>
          I copy the colors, the buttons, the modal boxes, and even the core
          concepts and gameplay mechanics. I play the games (they’re fun), take
          screenshots, capture footage, and then I steal it all. Most important
          of all, I steal the animations.
        </p>
        <p>
          While video games make for a perfect medium from which to burgle, I
          believe that people like you can also steal from your corresponding
          industry. While stealing from games helped me cheat as a designer, it
          was stealing the animations that really unlocked the full potential of
          each website.
        </p>
      </section>
      <hr />
      <section>
        <Title.H4>Do you want to read more?</Title.H4>
        <div className="btn-container">
          <Button kind="primary" cta="Yes" />
          <Button kind="secondary" cta="No" />
        </div>
      </section>
    </article>
  </main>
)

export default Content
