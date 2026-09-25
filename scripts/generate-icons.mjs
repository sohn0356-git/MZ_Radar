import { deflateSync } from "node:zlib";
import { mkdirSync, writeFileSync } from "node:fs";

const outDir = new URL("../public/icons/", import.meta.url);
mkdirSync(outDir, { recursive: true });

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function drawIcon(size) {
  const raw = Buffer.alloc((size * 4 + 1) * size);
  const cx = size / 2;
  const cy = size / 2;
  const radius = size * 0.35;
  const faceRadius = size * 0.245;

  for (let y = 0; y < size; y += 1) {
    raw[y * (size * 4 + 1)] = 0;
    for (let x = 0; x < size; x += 1) {
      const offset = y * (size * 4 + 1) + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const distance = Math.sqrt(dx * dx + dy * dy);
      let color = [252, 250, 245, 255];
      if (distance < radius) color = [10, 127, 114, 255];
      if (distance < faceRadius) color = [255, 253, 248, 255];

      const leftEye = Math.hypot(x - size * 0.43, y - size * 0.46);
      const rightEye = Math.hypot(x - size * 0.61, y - size * 0.46);
      if (leftEye < size * 0.043 || rightEye < size * 0.043) color = [18, 18, 16, 255];

      const mouthY = size * 0.62;
      const mouthX = Math.abs(x - cx);
      if (Math.abs(y - mouthY - mouthX * 0.12) < size * 0.018 && mouthX < size * 0.13) {
        color = [18, 18, 16, 255];
      }

      if (x > size * 0.62 && y < size * 0.36 && x + y < size * 0.92) color = [242, 85, 61, 255];

      raw[offset] = color[0];
      raw[offset + 1] = color[1];
      raw[offset + 2] = color[2];
      raw[offset + 3] = color[3];
    }
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);
}

for (const size of [192, 512]) {
  writeFileSync(new URL(`icon-${size}.png`, outDir), drawIcon(size));
}
