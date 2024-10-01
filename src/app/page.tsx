import { CloseButton } from "@/components/close-button";
import { FirmFacts } from "@/components/firm-facts";
import style from './page.module.scss'

export default function Home() {
  return (
    <>
      <header className={style.header}>
          <CloseButton></CloseButton>
      </header>
      <main className={style.main}>
        <h1 className={style['header-text']}>Firm Facts</h1>
        <FirmFacts />
      </main>
    </>
  );
}
