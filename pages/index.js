import Head from "next/head";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          magni numquam molestiae veniam itaque quisquam expedita commodi sit,
          quidem harum necessitatibus porro et sapiente eligendi velit ad nam
          impedit! Ipsa!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          magni numquam molestiae veniam itaque quisquam expedita commodi sit,
          quidem harum necessitatibus porro et sapiente eligendi velit ad nam
          impedit! Ipsa!
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
