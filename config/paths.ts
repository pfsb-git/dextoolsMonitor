// config/paths.ts
export const MONITORING_CONFIG = {
  screenShotsFolder: 'screenshots',        // Carpeta principal en la raíz
  // Urls
  dextboardWeb: 'https://www.dextools.io',
  pairExplorerWeb: 'https://www.dextools.io',

  
  // Prefijos
  dextBoardPrefix: 'dextboard',
  pairExplorerPrefix: 'pairexplorer',
  searchPrefix: 'search',
  extension: '.png'                 // Extensión del archivo

}

// Estilos para el relog
export const WATERMARK_STYLE = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: '#00ff00', // Verde neón
  padding: '12px 20px',
  fontFamily: '"Courier New", Courier, monospace',
  fontSize: '18px',
  fontWeight: 'bold',
  zIndex: '1000000',
  border: '2px solid #00ff00',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
  pointerEvents: 'none' // Para que no estorbe si hay algo debajo
};