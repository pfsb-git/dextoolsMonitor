import path from 'path';
import fs from 'fs';
import { Page } from '@playwright/test';
import * as paths from '../../config/paths';

// Crea una estructura de carpetas y devuelve la ruta completa para el archivo.
export function getFolder() {
  const now = new Date();
  const year = now.getFullYear().toString(); // 2024
  const month = (now.getMonth() + 1).toString().padStart(2,'0'); // formato 0X
  const day =  now.getDate().toString().padStart(2,'0'); // formato 0X
  const hour = now.getHours().toString().padStart(2,'0'); // formato 0X
  const min = now.getMinutes().toString().padStart(2,'0'); // formato 0X

  // process.cwd() ruta del proyecto + la carpeta 'screenshots' de la raíz
  const folder = path.join(process.cwd(), paths.MONITORING_CONFIG.screenShotsFolder, year, month, day, );
  
  return { 
    folder: folder, 
    fileName: `${year}${month}${day}-${hour}${min}.png`
  };
}

export function setFolder(folder: string): void {
  
  // Si no existe la crea
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

}


export async function inyectarSelloVisual(page: Page): Promise<void> {
  const textoHora = new Date().toLocaleString('en-US');

  await page.evaluate(({ texto, estilos }) => {
    const div = document.createElement('div');
     div.innerHTML = `🕒 Registered: ${texto}`;
    
    // Aplicamos los estilos de la configuración
    Object.assign(div.style, estilos);
    
    document.body.appendChild(div);
  }, { texto: textoHora, estilos: paths.WATERMARK_STYLE });
}
