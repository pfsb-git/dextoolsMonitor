import { test, expect } from '@playwright/test';
import * as funcDext from './utils/funcDexT';
import { MONITORING_CONFIG } from '../config/paths'; // Importamos la config
import { WATERMARK_STYLE } from '../config/paths';   // Configuracion estilos
import path from 'path';


  test('Captura DextBoard', async ({ page }) => {
    
    await page.goto(MONITORING_CONFIG.dextboardWeb);
    
    // Botón para aceptar las cookies
    await page.click('[data-cky-tag="accept-button"]');
    // Boton publi pequeña
    await page.click('.puppet-image-promo__close');
    // Abrir el buscador
    await page.locator('.search-pairs').click();
    
    // Devuelve la carpeta donde se guardará la captura
    let {folder, fileName} = funcDext.getFolder();
    
    // Fija la carpeta, si no existe la crea
    funcDext.setFolder(folder += '/'+MONITORING_CONFIG.searchPrefix);
    const rutaFinal = path.join(folder , fileName);
        
    // Antes de tomar la captura esperar a que todo esté cargado
    await page.waitForTimeout(5000);

    // Inyectar fecha y hora en la captura
     await funcDext.inyectarSelloVisual(page);
    
    // Tomar captura de toda la página (Full Page)
    await page.screenshot({ path: rutaFinal, fullPage: false });
    
});