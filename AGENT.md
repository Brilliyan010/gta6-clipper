# Agent notes — gta6-clipper-01

Entry for make.fun's GTA 6 clipping bounty: cut a GTA 6 moment into a short
vertical clip that rides the launch hype, pitches make.fun inside the clip,
goes up public on YouTube, and is handed in via `VIDEO.json`. Places go by
the video's views at the deadline; top 20 share $500.

## What was decided in this session

- **Source:** Rockstar's official *Grand Theft Auto VI Launch Trailer*
  (youtube.com/watch?v=rz1B4B2yBZY, 90 s, 85M+ views, uploaded 2026-10-15).
  It is the freshest official GTA 6 footage in launch week — trailer 2 is
  from May 2025, the 24-hour launch livestream has no clean replay to cut.
  The trailer was fetched with yt-dlp in this session; the clip was cut
  from it here, never downloaded finished from anywhere.
- **Why this moment:** the trailer's single most spectacular, instantly
  readable image is the biplane wing-walk over the Vice City beach with
  pink smoke — it says "GTA 6 is here" in one frame, so it opens the clip.
  The rest is the trailer's highest-energy beats in fast cuts (bike jump,
  rooftop fireworks, lowrider crew, the iguana, Lucia & Jason, swamp
  soldiers, the marina), ending on the GTA VI logo card.
- **Why the shots are this short:** the trailer cuts every 1–3 seconds.
  Every beat was mapped frame by frame (see NOTES.md) and trimmed to the
  exact shot boundaries, so no beat shows the wrong shot (the first render
  did — the bike segment caught the ankle-monitor scene — and was re-cut).
- **Pitch:** on screen for the last 8 seconds, three lines over the logo /
  end card — "Make clips like this with AI / and earn money on make.fun /
  make.fun/bounty/gta6-clipper-01" — long enough to read, inside the
  vertical safe area. Hook text "GTA 6 IS HERE" opens the clip.
- **Format:** 1080×1920 vertical, blurred-fill (no cropping of the action),
  H.264 + AAC, 22.8 s — a Short. Original trailer audio kept.

## Upload (by the person, from their phone)

The agent cannot upload to YouTube. The person uploads
`clip/gta6-launch-clip.mp4` as a **public** Short with:

- Title: `GTA 6 is FINALLY here — Vice City like you've never seen it #GTA6 #Shorts`
- Description: the title line, then the bounty's line word for word —
  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01` —
  then the play code `makefun-blimp-moonbeam-atrium`.
- Keep it public until the results are out.

Then the person sends the video's URL back; the agent puts it in
`VIDEO.json`, validates, and submits.

## Run the program the way the grader does

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

It validates `VIDEO.json` and copies it to `out/VIDEO.json`. The placeholder
URL fails validation on purpose — a build that forgot the real video is
caught here, not at the gate.
