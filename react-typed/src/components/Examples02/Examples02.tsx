import { useState } from "react"
import { ReactTyped, Typed } from "react-typed"
import Button from "../Button/Button";
import styles from "./Examples02.module.css"

export default function Examples02() {
    const [typed, setTyped] = useState<Typed | undefined>();
    // useState<型>()
    // 意味: この状態変数は「Typed型」または「undefined」のどちらかの値を持つ
    // Typed - react-typedライブラリが提供する型（Typedインスタンスの型）
    // | - 「または」を意味するユニオン型
    // undefined - 値がまだセットされていない状態
    // useState()で初期値を指定していないため、最初はundefined。後でReactTypedコンポーネントがtypedRef={setTyped}を通じてTypedインスタンスをセットします

    return (
        <div className={styles.height}>
            {/* onClick={typed.start()}は即座に実行されてしまうので、onClick={() => typed?.start()}のようにアロー関数でラップする必要がある */}
            {/* typedがundefinedの可能性があるので、オプショナルチェーン(?.)を使うべきです */}
            <Button onClick={() => typed?.start()}>Start</Button>
            <Button onClick={() => typed?.stop()}>Stop</Button>
            <Button onClick={() => typed?.toggle()}>Toggle</Button>
            <Button onClick={() => typed?.destroy()}>Destroy</Button>
            <Button onClick={() => typed?.reset()}>Reset</Button>
            <ReactTyped
                typedRef={setTyped}
                strings={["Here you can find anything"]}
                typeSpeed={40}
            />
        </div>
    )
}
