import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>


      {/*

      About me section

      */}
      <section>
        <h2 className={utilStyles.headingLg}>About Me</h2>
        <p>
          My name is Drew Beamer, and I am a computer science student with a
          passion for birding. I am currently pursing a degree in computer science with an interdisciplinary minor in genomics
          at Davidson College, and have worked on several web application projects related
          to birds and sports analytics. This site serves as a place where I share
          my work and various musings related to birds, genomics, and computer science.
          <br /><br />

          This section was outlined with the help of ChatGPT.
        </p>
      </section>


      <section id="contact">
        <h2 className={utilStyles.headingLg}>Contact</h2>
        <p style={{margin: 0}}>I can be reached via either of the following:</p>
        <ul>
          <li>Email: <a className={utilStyles.link} href="mailto:andrewmbeamer@gmail.com">andrewmbeamer@gmail.com</a></li>
          <li>Instagram: <a className={utilStyles.link} href="https://www.instagram.com/crazed4birds/">@crazed4birds</a></li>
        </ul>

        
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, readTime }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link className={utilStyles.link} href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText} style={{ display: "flex", fontSize: "0.75rem" }}>
                <p style={{ margin: 0 }}><Date dateString={date} />{" | "}{Math.ceil(readTime)} Minute Read</p>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}