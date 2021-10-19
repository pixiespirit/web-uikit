import fs from 'fs';
import url from 'url';
import path from 'path';

const ICON_TYPES = ['outline', 'solid'];

const here = path.dirname(url.fileURLToPath(import.meta.url));
const src = path.resolve(here, '..', 'src');

const resources = path.resolve(src, 'svg');
const target = path.resolve(src, 'svg-transformed');

const transform = (type) => {
  const source = path.resolve(resources, type);
  const icons = fs.readdirSync(source).filter((name) => name.endsWith('.svg'));
  icons.forEach((icon) => {
    const from = path.resolve(source, icon);
    const to = path.resolve(target, `${icon.replace(/.svg$/, '')}-${type}.svg`);
    fs.copyFileSync(from, to);
  });
};

if (fs.existsSync(target)) fs.rmdirSync(target, { recursive: true });
fs.mkdirSync(target);

ICON_TYPES.forEach(transform);
