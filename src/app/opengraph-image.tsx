import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "이석민 교수 — 한신대학교 공공인재빅데이터융합학, 정책 × AI 연구";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#111827",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{ fontSize: 64, fontWeight: 700, color: "#ffffff" }}
          >
            이석민 교수
          </span>
          <span style={{ fontSize: 28, color: "#9ca3af" }}>
            Seog-Min Lee
          </span>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#d1d5db",
            marginBottom: "40px",
          }}
        >
          한신대학교 공공인재빅데이터융합학과
        </div>
        <div
          style={{
            width: 80,
            height: 4,
            backgroundColor: "#3b82f6",
            marginBottom: "40px",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#e5e7eb",
            lineHeight: 1.5,
          }}
        >
          정책 × AI — 실시간 데이터 기반
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            color: "#e5e7eb",
            lineHeight: 1.5,
          }}
        >
          정책 의사결정 시스템 설계
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "48px",
          }}
        >
          {["정책분석", "인과추론", "데이터사이언스", "생성형 AI"].map(
            (tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 20,
                  color: "#93c5fd",
                  backgroundColor: "#1e3a5f",
                  padding: "8px 20px",
                  borderRadius: 8,
                }}
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
