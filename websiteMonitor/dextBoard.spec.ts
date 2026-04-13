import { test, expect } from '@playwright/test';
import * as funcDext from './utils/funcDexT';
import { MONITORING_CONFIG } from '../config/paths'; // Importamos la config
import path from 'path';

  test('Captura DextBoard', async ({ page }) => {
    
    await page.goto(MONITORING_CONFIG.dextboardWeb);

    // Botón para aceptar las cookies
    const cookiesBtn = page.locator('[data-cky-tag="accept-button"]');
    //if (await cookiesBtn.count() > 0) {cookiesBtn.click();}
    try {
    if (await cookiesBtn.isVisible({ timeout: 5000 })) {
     await cookiesBtn.click();
    }
    } catch {
      console.log('Cookies no visible, continuo...');
    }

    /*
    
    // Boton publi pequeña
    const puppetBtn = page.locator('.puppet-image-promo__close');
    if (await puppetBtn.count() > 0) {puppetBtn.click();}
    // Boton modal perptools
    const perpBtn = page.locator('.puppet-slide-modal__close');
    if (await perpBtn.count() > 0) {perpBtn.click();}
    // Botón para abrir favoritos
    await page.click('svg[data-icon="star"]');
    
    */


    // Devuelve la carpeta donde se guardará la captura
    let {folder, fileName} = funcDext.getFolder();
        
    // Fija la carpeta, si no existe la crea
    funcDext.setFolder(folder += '/'+MONITORING_CONFIG.dextBoardPrefix);
    const rutaFinal = path.join(folder , fileName);
    

    // Antes de tomar la captura esperar a que todo esté cargado
    await page.waitForTimeout(5000);

    // Inyectar fecha y hora en la captura
    await funcDext.inyectarSelloVisual(page);

    // Tomar captura de toda la página (Full Page)
    await page.screenshot({ path: rutaFinal, fullPage: false });

    console.log(rutaFinal);

});