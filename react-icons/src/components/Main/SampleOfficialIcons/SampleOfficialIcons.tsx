import officialIcons from './officialIcons';
import styles from './SampleOfficialIcons.module.css';

type IconObject = {
    iconName: string;
    image: string;
}

// officialIconsを直接importしているのでPropsを渡さなくていい
export default function SampleOfficialIcons() {
    return (
        <div>
            <ul className={styles.iconsItems}>
                {officialIcons.map((icon: IconObject, index: number) => (
                    <li key={index} className={styles.item}>
                        <img src={icon.image} alt={icon.iconName} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
