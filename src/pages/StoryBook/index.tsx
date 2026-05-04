import HTMLFlipBook from "react-pageflip";
import { forwardRef } from "react";
import { GothicLayout } from "../../components/GothicLayout";
import { Typography } from "../../components/Typography";
import styles from "./styles.module.css";

const Page = forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className }, ref) => (
    <div ref={ref} className={`${styles.page} ${className ?? ''}`}>
      <div className={styles.pageCornerTL} />
      <div className={styles.pageCornerBR} />
      {children}
    </div>
  )
);

const CoverPage = forwardRef<HTMLDivElement, Record<string, never>>(
  (_props, ref) => (
    <div ref={ref} className={styles.cover}>
      <h2 className={styles.coverTitle}>PALAIS DES OMBRES</h2>
      <p className={styles.coverSubtitle}>CRÓNICAS PROHIBIDAS</p>
      <span className={styles.coverCrosses}>✕ ✕ ✕</span>
    </div>
  )
);

const BackCover = forwardRef<HTMLDivElement, Record<string, never>>(
  (_props, ref) => (
    <div ref={ref} className={styles.backCover}>
      <span className={styles.coverCrosses}>✕ ✕ ✕ ✕</span>
    </div>
  )
);

export const StoryBook = () => {
  return (
    <GothicLayout>
      <div className={styles.bookPage}>
        <Typography variant="title">Crónicas</Typography>

        <div className={styles.bookWrapper}>
        {/* @ts-expect-error react-pageflip types don't support React 18+ children */}
        <HTMLFlipBook
          width={550}
          height={700}
          size="stretch"
          minWidth={350}
          maxWidth={1200}
          minHeight={500}
          maxHeight={900}
          maxShadowOpacity={0.5}
          showCover={false}
          mobileScrollSupport={true}
          startPage={0}
          drawShadow={true}
          flippingTime={1000}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          <CoverPage />

          <Page>
            <h3 className={styles.pageTitle}>CAPÍTULO I</h3>
            <div className={styles.pageDivider}>
              <span className={styles.pageDividerSymbol}>✦</span>
            </div>
            <p className={styles.pageText}>
              La invitación llegó sin remitente. Un sobre negro, lacrado con cera
              carmesí, esperaba sobre la mesita como si siempre hubiera estado ahí.
            </p>
            <span className={styles.pageNumber}>— 1 —</span>
          </Page>

          <Page>
            <p className={styles.pageText}>
              "Eres invitada al Palais des Ombres", decía con letras que parecían
              escritas con sangre seca. Debajo, una sola instrucción:
              "La belleza es sumisión disfrazada de elección."
            </p>
            <span className={styles.pageNumber}>— 2 —</span>
          </Page>

          <Page>
            <h3 className={styles.pageTitle}>CAPÍTULO II</h3>
            <div className={styles.pageDivider}>
              <span className={styles.pageDividerSymbol}>✦</span>
            </div>
            <p className={styles.pageText}>
              Las puertas del palacio se abrieron sin que nadie las tocara. El aire
              olía a rosas marchitas y a promesas rotas. Adentro, las muñecas
              esperaban en silencio.
            </p>
            <span className={styles.pageNumber}>— 3 —</span>
          </Page>

          <Page>
            <p className={styles.pageText}>
              Cada una perfecta. Cada una vacía. Sus ojos de porcelana seguían
              cada movimiento, como si juzgaran en silencio a quien se atreviera
              a cruzar el umbral.
            </p>
            <span className={styles.pageNumber}>— 4 —</span>
          </Page>

          <BackCover />
        </HTMLFlipBook>
        </div>
      </div>
    </GothicLayout>
  );
};
