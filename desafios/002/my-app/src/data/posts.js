import * as Title from '../components/Title'

const posts = [
  {
    id: 1,
    title: 'Stealing Game Animation Techniques to Engage Users',
    content: (
      <>
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
      </>
    )
  },
  {
    id: 2,
    title: 'Tabs in HTML?',
    content: (
      <>
        <blockquote>
          <p>You know what tabs are, Brian.</p>
          <p>
            I mean… You use them every day, on every OS. Everybody knows they
            exist in every toolbox. All that’s left is to “just pave the
            cowpaths!” But when you get right down to it, it’s a lot more
            complicated than that.
          </p>
        </blockquote>
        <p>
          Brian Kardell{' '}
          <a href="https://bkardell.com/blog/SpicySections.html">
            shares a bit about the progress
          </a>{' '}
          of bringing “Tabs” to HTML. We kinda think we know what they are, but
          you have to be <em>really specific</em> when dealing with specs and
          defining them. It’s tricky. Then, even if you settle on a solid
          definition, an HTML expression of that isn’t exactly clear.{' '}
          <a href="https://open-ui.org/components/tabs.research.markup">
            There are all kinds of expressions of tabs
          </a>{' '}
          that all make sense in their own way. Imagine marking up tabs where
          you put all the tabs as a row of links or buttons up top, and then a
          bunch of panels below that. They call that a “Table of Contents” style
          of markup, and it makes some kind of logical sense (“the markup looks
          like tabs already”). But it also has some problems, and it looks like
          sections-with-headers is more practical (“If you have the heading, you
          can build the TOC, but not vice-versa”).{' '}
          <a href="https://codepen.io/bkardell/pen/VwpJGGL?editors=1100">
            Spicy sections
          </a>{' '}
          are a totally different pattern. And that’s just one problem they are
          facing.{' '}
        </p>
        <p>
          I don’t envy the work, but I look forward to the progress in no small
          part because authoring tabs is tricky business. Not hard to{' '}
          <em>do</em>, but very hard to <em>do right</em>. I’ve talked in the
          past about how I’ve built tabs many times in jQuery where just a click
          handler on a row of links hides or shows some matching divs below.
          That “works” if you ignore accessibility entirely (e.g. how you
          navigate between tabs, focus management, ARIA expectations, etc).
        </p>
        <span id="more-346418"></span>
        <p>
          Here’s{' '}
          <a href="https://shoptalkshow.com/466/#t=04:12">
            the ShopTalk discussion
          </a>{' '}
          and here’s a different perspective in{' '}
          <a
            href="https://blog.codepen.io/2021/07/28/326-design-pattern-deepdives-tabs-and-infobox/"
            target="_blank"
            rel="noreferrer noopener"
          >
            a chat I had with Stephen on CodePen Radio
          </a>{' '}
          where we get into our <code>&lt;Tabs /&gt;</code> React component on
          CodePen.{' '}
        </p>
        <p>
          <a href="https://bkardell.com/blog/SpicySections.html">
            Direct Link →
          </a>
        </p>
      </>
    )
  },
  {
    id: 3,
    title: '“Disambiguating Tailwind”',
    content: (
      <>
        <p>
          I appreciated this bit of nuance from{' '}
          <a href="https://www.viget.com/articles/how-does-viget-css/">
            a post on Viget’s blog
          </a>
          :
        </p>
        <blockquote>
          <p>
            There could be a whole article written about the many flavours of
            Tailwind, but broadly speaking those flavours are:
          </p>
          <p>
            1. Stock tailwind, ie. no changes to the configuration,
            <br />
            2. Tailwind that heavily relies on&nbsp;<code>@apply</code>&nbsp;in
            CSS files but still follows BEM or some other component
            organization,
            <br />
            3. Tailwind UI, and
            <br />
            4. heavily customizing Tailwind’s configuration and writing custom
            plugins.
          </p>
          <cite>
            <em>Leo Bauza</em>,{' '}
            <a href="https://www.viget.com/articles/how-does-viget-css/">
              “How does Viget CSS?”
            </a>
          </cite>
        </blockquote>
        <p>
          The <em>way</em> you use some particular technologies can be super
          different from how someone else does, to the point they share little
          resemblance, even if they share the same core.{' '}
        </p>
        <p>
          Bootstrap is similar. You can{' '}
          <a href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
            link up Bootstrap off a CDN
          </a>
          , the entire untouched built version of everything it offers. You can
          download the Sass/JavaScript source files, include them in your own
          project, and bring-your-own build process. This gives you the ability
          to customize them, but then that complicates the upgrade path. Or you
          could use Bootstrap from a package manager, meaning you’re referencing
          the source files from your own build process, but never touching them
          directly. Either way, if you’re using the source, you can then do
          things like customize it (change colors, fonts, etc.), and even trim
          down what parts of it you want to use.{' '}
        </p>
        <p>
          React is similar. Vue is similar. You can link them up right off a CDN
          and use them right in the browser with no build process. Or they can
          be at the heart of your build process, and pulled from npm. Or they
          can be the foundation of a framework like Next or Nuxt.{' '}
        </p>
        <p>
          When you multiply the fact that any given single technology can be
          used so many different ways with how many different technologies are
          in use on any given project, it’s no wonder why developer’s experience
          on projects is so wildly different and you hear a lot of people
          talking past each other in debate.
        </p>
      </>
    )
  }
]

export default posts
