import styles from './SampleSimpleIcons.module.css';

export default function SampleSimpleIcons() {
    return (
        <div className={styles.imgsWrap}>
            <div><img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" /></div>
            <div><img src="https://cdn.simpleicons.org/react" alt="React" /></div>
            <div><img src="https://cdn.simpleicons.org/nextdotjs" alt="Next.js" /></div>
            <div><img src="https://cdn.simpleicons.org/storybook" alt="Storybook" /></div>
            <div><img src="https://cdn.simpleicons.org/mui" alt="Mui" /></div>
            <div><img src="https://cdn.simpleicons.org/docker" alt="docker" /></div>
        </div>
    )
}
