import TsLettermark from '../../../assets/ts-lettermark-blue.png';
import TsLogoRound from '../../../assets/ts-logo-round-128.svg';

type IconObject = {
    iconName: string;
    image: string;
}

const officialIcons: IconObject[] = [
    {
        iconName: 'ts-lettermark',
        image: TsLettermark,
    },
        {
        iconName: 'ts-logo-round',
        image: TsLogoRound,
    },
];

export default officialIcons;
// export default: モジュールが単一の主要なエクスポートを持つ場合
// export default officialIcons; ← エクスポート時
// import officialIcons from './officialIcons'; ← インポート時

// export: 複数のエクスポートがある場合や、明示的なインポート構文が必要な場合
// export const officialIcons: IconObject[] = [...]; ← エクスポート時
// import { officialIcons } from './officialIcons'; ← インポート時

// 現在の用途では、どちらでも構わない。

