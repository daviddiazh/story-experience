import HTMLFlipBook from "react-pageflip";
import { forwardRef } from "react";
import { GothicLayout } from "../../components/GothicLayout";
import { Typography } from "../../components/Typography";
import { GoBackHeader } from "../../components/GoBackHeader";
import styles from "./styles.module.css";

import D1 from "../../assets/diary/D1.png"
import D2 from "../../assets/diary/D2.png"
import D3 from "../../assets/diary/D3.png"
import D4 from "../../assets/diary/D4.png"
import D5 from "../../assets/diary/D5.png"
import D6 from "../../assets/diary/D6.png"

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
    <div
      ref={ref}
      className={styles.cover}
    >
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                width: '100%',
            }}
        >
            <h2 className={styles.coverTitle}>PALAIS DES OMBRES</h2>
            <p className={styles.coverSubtitle}>CRÓNICAS PROHIBIDAS</p>
            <span className={styles.coverCrosses}>✕ ✕ ✕</span>
        </div>
    </div>
  )
);

const BackCover = forwardRef<HTMLDivElement, Record<string, never>>(
  (_props, ref) => (
    <div
      ref={ref}
      className={styles.backCover}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <span className={styles.coverCrosses}>✕ ✕ ✕ ✕</span>
    </div>
  )
);

export const StoryBook = () => {
  return (
    <GothicLayout>
      <GoBackHeader />
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

            <img
                src={D1}
                width={500}
                height={600}
                className={styles.diaryImage}
                alt="Diario"
            />
            <span className={styles.pageNumber}>— 1 —</span>
          </Page>

          <Page>
            <h3 className={styles.pageTitle}>CAPÍTULO II</h3>
            <div className={styles.pageDivider}>
              <span className={styles.pageDividerSymbol}>✦</span>
            </div>

            <img
                src={D2}
                width={500}
                height={600}
                className={styles.diaryImage}
                alt="Diario"
            />
            <span className={styles.pageNumber}>— 2 —</span>
          </Page>

          <Page>
            <h3 className={styles.pageTitle}>CAPÍTULO III</h3>
            <div className={styles.pageDivider}>
              <span className={styles.pageDividerSymbol}>✦</span>
            </div>

            <img
                src={D3}
                width={500}
                height={600}
                className={styles.diaryImage}
                alt="Diario"
            />
            <span className={styles.pageNumber}>— 3 —</span>
          </Page>

          <Page>
            <h3 className={styles.pageTitle}>CAPÍTULO IV</h3>
            <div className={styles.pageDivider}>
              <span className={styles.pageDividerSymbol}>✦</span>
            </div>

            <img
                src={D4}
                width={500}
                height={600}
                className={styles.diaryImage}
                alt="Diario"
            />
            <span className={styles.pageNumber}>— 4 —</span>
          </Page>

          <Page>
            <h3 className={styles.pageTitle}>CAPÍTULO V</h3>
            <div className={styles.pageDivider}>
              <span className={styles.pageDividerSymbol}>✦</span>
            </div>

            <img
                src={D5}
                width={500}
                height={600}
                className={styles.diaryImage}
                alt="Diario"
            />
            <span className={styles.pageNumber}>— 5 —</span>
          </Page>

          <Page>
            <h3 className={styles.pageTitle}>CAPÍTULO VI</h3>
            <div className={styles.pageDivider}>
              <span className={styles.pageDividerSymbol}>✦</span>
            </div>

            <img
                src={D6}
                width={500}
                height={600}
                className={styles.diaryImage}
                alt="Diario"
            />
            <span className={styles.pageNumber}>— 6 —</span>
          </Page>

          <BackCover />
        </HTMLFlipBook>
        </div>
      </div>
    </GothicLayout>
  );
};
