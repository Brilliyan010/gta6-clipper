// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry itself is the YouTube video: an agent-cut vertical GTA 6 clip
// that hooks with the launch trailer's best moments and then pitches
// make.fun on screen. This program does the one thing the gate needs —
// it copies VIDEO.json from the repository root into /output, where the
// house reads it and matches it against its own YouTube Data API reading
// of the video (views, public status, publish window).
//
// VIDEO.json is validated before it is copied: it must be a JSON object
// with a `url` string shaped like a YouTube video address. A placeholder
// URL fails that shape, and the program says so loudly on stderr — but it
// still copies the file and exits 0, exactly like the starter does, so the
// local check and the grader's two runs behave the same with or without a
// real video in place. The gate itself refuses a placeholder, so a build
// that forgot to fill in the real video is caught there, not silently.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A YouTube video address as the Share button gives it: the id is exactly
// 11 characters of letters, digits, _ and -.
const VIDEO_URL_PATTERN =
  /^https:\/\/(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}([?#&].*)?$/;

const videoPath = join(BOT_DIR, 'VIDEO.json');
const videoRaw = readFileSync(videoPath, 'utf8');
const video = JSON.parse(videoRaw) as unknown;

if (typeof video !== 'object' || video === null || Array.isArray(video)) {
  console.error('WARNING: VIDEO.json is not a JSON object with a url field.');
} else {
  const url = (video as { url?: unknown }).url;
  if (typeof url !== 'string' || !VIDEO_URL_PATTERN.test(url)) {
    console.error(
      'WARNING: VIDEO.json url is not a YouTube video address yet — replace the placeholder with the uploaded Short before submitting.',
    );
  }
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
