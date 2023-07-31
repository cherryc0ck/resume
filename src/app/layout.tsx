import localFont from "next/font/local";
import { PropsWithChildren } from "react";

import { AppProvider, StyledRegistry } from "@/lib/providers";
import { ProgressBar } from "@/components/common";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/pretendard/Pretendard-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/pretendard/Pretendard-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
});

// 작성 필요
export const metadata = {
  title: "이력서 / 홍언택",
  description: "프론트엔드 개발자 홍언택 이력서",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className={pretendard.className}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <meta
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        name="viewport"
      ></meta>
      <body>
        <StyledRegistry>
          <AppProvider>
            {children}
            <div id="modal-root" />
          </AppProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
