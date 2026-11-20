# gta6-clipper-01 — NOTES

## Kompetisi

- Slug: `gta6-clipper-01` — "Clip GTA 6 for the most YouTube views", $500, 20 tempat.
- Buka: 2026-11-20 08:00 WIB (01:00 UTC). Tutup: 2026-11-23 08:00 WIB (01:00 UTC).
- Play code: `makefun-blimp-moonbeam-atrium`.
- Dev leaderboard saat build (20 Nov ~08:07 WIB): **0 entry** — belum ada patokan views.
- Kuota akun: 0 entry dibuat, 3 tersisa hari ini, bisa submit.
- Anchor: `makefun anchor 6c8698288a26f45951af854f3c5546d2e441747e round 34111160`
  (init 08:07 WIB, drand round pasca-buka).

## Rencana

Peringkat ditentukan MUTLAK oleh views YouTube video saat deadline — bukan
oleh skor kode. Jadi yang dimenangkan adalah klipnya: hook tercepat dari
footage GTA 6 resmi paling segar di minggu peluncuran, lalu pitch make.fun
di dalam klip, lalu upload publik secepat mungkin supaya video punya waktu
3 hari mengumpulkan views. Tidak ada pemenang #1 final sebelumnya untuk
bounty YouTube (bounty pertama jenis ini); metode yang dipakai: hook
spektakuler di 2 detik pertama + fast-cut beats + pitch terbaca 8 detik.

## Pilihan momen (diputuskan di sesi ini)

- Sumber: **Rockstar "Grand Theft Auto VI Launch Trailer"**
  (youtube.com/watch?v=rz1B4B2yBZY) — 90 detik, 85.183.655 views,
  diunggah 2026-10-15, uploader Rockstar Games (terverifikasi via yt-dlp).
  Dipilih atas Trailer 2 (Mei 2025, sudah lama) dan livestream 24 jam
  YouTube (tidak ada replay bersih untuk dipotong).
- Trailer dipetakan frame-per-frame (1 frame/detik, 42 frame diperiksa):
  trailer memotong tiap 1–3 detik, jadi tiap beat dipangkas tepat di
  batas shot. Render v1 gagal di sini (segmen motor 49–55 detik menangkap
  adegan ankle-monitor yang gelap) — v2 dipotong ulang dengan batas tepat.

## Klip final — `clip/gta6-launch-clip.mp4`

- 22,8 detik, 1080×1920 vertikal (blurred-fill, tanpa crop aksi), H.264 +
  AAC, 9.166.415 byte. Audio asli trailer dipertahankan.
- 10 beat (waktu trailer → waktu klip):
  1. 54.8–57.0 biplane wing-walk + teks "GTA 6 IS HERE" (0.0–2.2)
  2. 48.8–51.0 lompatan motor di atas kereta (2.2–4.4)
  3. 52.8–54.2 kembang api di rooftop malam (4.4–5.8)
  4. 18.8–21.0 kru lowrider (5.8–8.0)
  5. 20.8–22.0 iguana menyeberang jalan (8.0–9.2)
  6. 25.8–28.0 Lucia & Jason (9.2–11.4)
  7. 27.8–29.0 tentara di rawa saat senja (11.4–12.6)
  8. 13.0–15.0 Jason di marina Leonida Keys (12.6–14.6)
  9. 78.8–81.0 kartu logo GTA VI (14.6–16.8)
  10. 81.0–87.0 kartu akhir (16.8–22.8)
- Pitch make.fun di layar 14.6–22.8 (8,0 detik, 3 baris):
  "Make clips like this with AI / and earn money on make.fun /
  make.fun/bounty/gta6-clipper-01" — terverifikasi terbaca di frame 15.5
  dan 20.0 detik. Hook "GTA 6 IS HERE" terverifikasi di frame 1.0 detik.
- Semua 10 segmen dicek visual dari frame klip hasil render (v2_*.jpg).

## Upload (tugas Brilliyan — Lina tidak bisa upload)

- File: `clip/gta6-launch-clip.mp4` (di repo, tidak ikut commit — lihat
  .gitignore; file tetap ada di disk untuk diunduh/dikirim).
- Judul: `GTA 6 is FINALLY here — Vice City like you've never seen it #GTA6 #Shorts`
- Deskripsi (wajib kata-per-kata + play code):
  `Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01`
  lalu `makefun-blimp-moonbeam-atrium`.
- Publikasikan **Public** (bukan unlisted/private), sebelum 23 Nov 08:00 WIB,
  dan biarkan publik sampai hasil keluar. Kirim URL videonya ke Lina.

## Status submit

- **BELUM SUBMIT.** `VIDEO.json` masih placeholder — diisi URL asli setelah
  Brilliyan mengirim URL video. Setelah itu: isi VIDEO.json, jalankan
  `main.ts`, bundle + check ulang, lalu submit prosedur standar
  (--muse-usage, system prompt asli, README 3 badge, verifikasi status,
  payout 253WXckfWThV9CQ24kzjQHTWF1TggXwv9cJCMhDJRF9q).
- Jangan submit commit yang sama dua kali; 429 = berhenti, jangan retry.

## Validasi lokal

- `main.ts` (ditulis fresh di sesi ini, bukan salinan starter — ada
  validasi bentuk URL + warning placeholder): revisi 2x.
- Render ffmpeg v2: 22.800 detik, 1080×1920, H.264 + AAC — sesuai RULES
  (Short vertikal < 60 detik).
- Kit check 20 Nov 08:20 WIB (bundle 1 sesi, 50 turns, system prompt
  terunggah, run record cocok): **12 passed, 4 failed, 6 skipped** —
  4 gagal semuanya karena file belum di-commit saat check pertama
  (entrypoint, thinking_reproduces, thinking_revised: snapshot HEAD
  hanya berisi LICENSE) + thinking_priced (0 usage rows: baris usage
  Muse baru ditulis setelah pesan terkirim — diambil ulang saat submit).
  Lolos: competition_open, license MIT, repo_created_after_open (beacon
  root drand round 34111160 ≥ buka), transcripts_present/recorded,
  thinking_wellformed, thinking_in_window (157 timestamp di jendela),
  thinking_turns (45), thinking_fresh, transcripts_run_record,
  thinking_own_work.
- Check ulang setelah commit 28e1b38 (20 Nov 08:21 WIB): **15 passed,
  1 failed, 6 skipped** — hanya thinking_priced yang gagal (0 usage
  rows; baris usage Muse baru ditulis setelah pesan terkirim, diambil
  ulang di job submit nanti). thinking_reproduces 91,0% authored
  (183/201 baris; main.ts 32 authored lines), thinking_revised lolos
  (main.ts dari 3 pesan tulis/edit), thinking_fresh lolos (183 baris
  mengutip anchor sebelum tulis pertama), thinking_in_window lolos.
- Play code terverifikasi via check: `makefun-blimp-moonbeam-atrium`
  (code 0 dari 4).
