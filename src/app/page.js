import Navbar from '@/components/navbar/navbar'
import Footer from '@/components/footer/footer'
import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {

  return (
    <>
      <main className={`text-center w-100 balance ${styles.main}`}>

        <section id='section1' className={`${styles.section1} d-flex`}>
          <div className='container-fluid container-lg d-flex flex-md-row flex-column'>
            <div className='d-flex flex-column col-12 col-md-8 p-5 pt-sm-3 px-sm-2 pb-sm-2 p-md-0 justify-content-center align-items-center align-items-md-stretch '>
              <Image
                src={'/img/main1.webp'}
                alt='Hotel pool view'
                className={`${styles.img} rounded `}
                width={700}
                height={467}
                quality={75}
              />
            </div>
            <div className='d-flex flex-column col-12 col-md-4 p-4 justify-content-center'>
              <h1 className={`fs-3 mb-2 px-5 ${styles.description}`}>Enjoy the magic of Puerto Paraíso</h1>
              <a href='#section2' className={`${styles.arrowDown}`}>
                <i className='bi bi-arrow-down-circle fs-1' />
              </a>
            </div>
          </div>
        </section>

        <section id='section2' className={styles.section2}>
          <div className={styles.pinWrapSticky}>
            <div className={styles.pinWrap}>
              <h2 className='m-5 d-flex align-self-center balance'>Puerto Paraíso island is the ideal destination for you and your couple.</h2>
              <Image
                src={'/img/main1.webp'}
                alt=''
                height={500}
                width={750} />
              <Image
                src={'/img/main1.webp'}
                alt=''
                height={500}
                width={750} />
              <Image
                src={'/img/main1.webp'}
                alt=''
                height={500}
                width={750} />
            </div>
          </div>
        </section>

      </main >
    </>
  )
}
