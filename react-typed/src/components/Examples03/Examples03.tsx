import { ReactTyped } from "react-typed"

export default function Example03() {
  return (
    <div>
      <ReactTyped
        startWhenVisible // 要素がビューポート（画面に見える範囲）に入ったときにタイピングを開始：startWhenVisible={true}の省略形
        strings={[
          "If <strong>startWhenVisible</strong> is <strong>true</strong>, will start when is visible in the dom",
        ]}
        typeSpeed={40}
      />
    </div>
  )
}
