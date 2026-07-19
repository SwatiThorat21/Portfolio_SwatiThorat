import { readFile, access } from 'node:fs/promises';
const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const js = await readFile(new URL('../index.js', import.meta.url), 'utf8');
const failures = [];
for (const required of ['<main', '<nav', 'id="about"', 'id="experience"', 'id="projects"', 'id="skills"', 'id="contact"', 'application/ld+json', 'rel="canonical"']) if (!html.includes(required)) failures.push(`Missing ${required}`);
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const ref = match[1]; if (/^(https?:|mailto:)/.test(ref)) continue;
  try { await access(new URL(`../${ref}`, import.meta.url)); } catch { failures.push(`Missing local asset: ${ref}`); }
}
for (const match of js.matchAll(/(?:image|src):?\s*['"]([^'"]+\.(?:png|jpe?g|webp))['"]/gi)) {
  try { await access(new URL(`../${match[1]}`, import.meta.url)); } catch { failures.push(`Missing project image: ${match[1]}`); }
}
const externalTargets = [...html.matchAll(/<a[^>]+target="_blank"[^>]*>/g)].map(match => match[0]);
for (const tag of externalTargets) if (/href="https?:/.test(tag) && !tag.includes('noopener')) failures.push(`Unsafe external link: ${tag}`);
if (failures.length) { console.error(failures.join('\n')); process.exit(1); }
console.log('Static validation passed: structure, local assets, and external-link safety.');
