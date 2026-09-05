const fs = require('fs');
const path = require('path');

async function run() {
  const sharp = require('sharp');
  const projectRoot = process.cwd();
  const inputLogo = path.join(projectRoot, 'public', 'Logo.png');

  console.log("Processing logo:", inputLogo);
  const size = 256;

  // Create circle mask
  const circleSvg = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`
  );

  const resizedLogo = await sharp(inputLogo)
    .resize(size - 24, size - 24, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toBuffer();

  const roundedPngBuffer = await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite([
    { input: resizedLogo, gravity: 'center' },
    { input: circleSvg, blend: 'dest-in' }
  ])
  .png()
  .toBuffer();

  // Write app/icon.png
  fs.writeFileSync(path.join(projectRoot, 'app', 'icon.png'), roundedPngBuffer);
  // Write public/icon.png
  fs.writeFileSync(path.join(projectRoot, 'public', 'icon.png'), roundedPngBuffer);
  // Write public/favicon.ico
  fs.writeFileSync(path.join(projectRoot, 'public', 'favicon.ico'), roundedPngBuffer);
  // Write app/favicon.ico
  fs.writeFileSync(path.join(projectRoot, 'app', 'favicon.ico'), roundedPngBuffer);

  // Also create an SVG version
  const base64Png = roundedPngBuffer.toString('base64');
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256">
  <defs>
    <clipPath id="circleClip">
      <circle cx="128" cy="128" r="128" fill="#ffffff" />
    </clipPath>
  </defs>
  <circle cx="128" cy="128" r="128" fill="#ffffff" />
  <image href="data:image/png;base64,${base64Png}" width="256" height="256" clip-path="url(#circleClip)" />
</svg>`;

  fs.writeFileSync(path.join(projectRoot, 'app', 'icon.svg'), svgContent);
  fs.writeFileSync(path.join(projectRoot, 'public', 'icon.svg'), svgContent);

  console.log("Successfully created all rounded icon files in app/ and public/!");
}

run().catch(console.error);
