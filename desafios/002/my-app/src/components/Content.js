// Components
import Button from './Button'
import * as Title from './Title'

const Content = ({ content, title }) => {
  return (
    <main className='content'>
      <article>
        <section>
          <Title.H1>{title}</Title.H1>
          {content}
        </section>
        <hr />
        <section>
          <Title.H4>Do you want to read more?</Title.H4>
          <div className='btn-container'>
            <Button kind='primary' cta='Yes' />
            <Button kind='secondary' cta='No' />
          </div>
        </section>
      </article>
    </main>
  )
}

export default Content
