import SecondHeading from "../SecondHeading/SecondHeading";
import styles from './Section.module.css';

type SectionProps = {
    children: React.ReactNode;
    text: string
}

export default function Section({children, text}: SectionProps) {
  return (
    <section className={styles.section}>
        <SecondHeading text={text}/>
        {children}
    </section>
  )
}
