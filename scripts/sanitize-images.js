import fs from 'fs';
import path from 'path';

const proyectosDir = path.resolve('public/proyectos');

const files = fs.readdirSync(proyectosDir)
  .filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.webp') || f.toLowerCase().endsWith('.png'))
  .map(f => {
    const filePath = path.join(proyectosDir, f);
    const stats = fs.statSync(filePath);
    return { name: f, filePath, mtime: stats.mtimeMs };
  })
  .sort((a, b) => b.mtime - a.mtime); // Sort by LastWriteTime descending

console.log(`Found ${files.length} project images:`);

files.forEach((file, index) => {
  const ext = path.extname(file.name);
  const cleanName = `obra-${String(index + 1).padStart(2, '0')}${ext}`;
  const destPath = path.join(proyectosDir, cleanName);
  
  if (file.name !== cleanName) {
    fs.copyFileSync(file.filePath, destPath);
    console.log(`Copied "${file.name}" -> "${cleanName}" (Date: ${new Date(file.mtime).toISOString()})`);
  }
});
