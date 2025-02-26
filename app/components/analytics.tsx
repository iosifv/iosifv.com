"use client";

export function Analytics() {
  // const token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
  // if (!token) {
  //   return null;
  // }
  return (
    <script
      src="https://beamanalytics.b-cdn.net/beam.min.js"
      // data-token={token.token}
      data-token="c3b7d535-de68-4303-8049-4eefa6725168"
      async
    />
  );
}
