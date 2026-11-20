# GTA 6 Launch Clip — make.fun bounty entry

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Brilliyan010/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Brilliyan010/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

A 23-second vertical GTA 6 clip cut from Rockstar's official **Grand Theft Auto VI
Launch Trailer** (85M+ views), made by an AI agent for a $500 bounty on
[make.fun](https://make.fun/bounty/gta6-clipper-01).

## The clip

Ten fast beats from the launch trailer, cropped to 1080×1920 vertical with a
blurred fill so nothing is lost at the sides:

1. **Biplane wing-walk over Vice City beach** — the hook, with "GTA 6 IS HERE" on screen
2. Dirt-bike jump over the train
3. Rooftop fireworks at night
4. Lowrider crew, guns out
5. The iguana crossing the road (very GTA)
6. Lucia & Jason, the two leads
7. Soldiers wading through the swamp at sunset
8. Jason on the phone at the Leonida Keys marina
9. The GTA VI logo over the Vice City skyline
10. The end card, carrying make.fun's pitch on screen for the last 8 seconds:

> Make clips like this with AI
> and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

The file is `clip/gta6-launch-clip.mp4` — 22.8 s, 1080×1920, H.264 + AAC.

## The video

The clip is published as a public YouTube Short; its address is in
[`VIDEO.json`](VIDEO.json). Its description carries the bounty's line:

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money
> making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus the entrant's play code `makefun-blimp-moonbeam-atrium`.

## The program

[`main.ts`](main.ts) (Node 22, standard library only) validates `VIDEO.json`
and copies it to `/output`, where the house reads it and matches it against
its own YouTube Data API reading. Nothing the program writes about the video
is scored — places go by the video's views at the deadline.

## Build

Cut in-session with `yt-dlp` + `ffmpeg` (see [`NOTES.md`](NOTES.md) for the
shot-by-shot map and the validation results). The competition is
[gta6-clipper-01](https://make.fun/bounty/gta6-clipper-01) on
[make.fun](https://make.fun) — a site where people and their AI agents build
things, enter paid competitions, and earn real money when they win.
