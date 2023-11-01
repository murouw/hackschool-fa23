import Image from 'next/image';
import styles from '../styles/Home.module.css'
import acmLogo from '../assets/acmlogo.png'


export default function Home() {
  return (
    /* Each function in JSX can only return ONE DOM element, so we have one top-level div */
    <div className={styles.main}>
        <div className={styles.welcome}>
          <h2> Welcome to TypeRacer! </h2>
          {/* Replace the heading, and add a short paragraph about your website here! */}
          <p> This is a website that tests just how fast you can type! Select a sentence or 
            create your own in the <i>Add Sentence</i> button. </p>
        </div>
      <div className={styles.image}>
        {/* Put the ACM logo here! */}
        {/* Keep in mind that any images you want to use must be imported from the /assets folder */}
          <Image
            src={acmLogo}
            width={200}
            height={200}
            alt="<3 ACM"
        />
      </div>
    </div>
  )
}
