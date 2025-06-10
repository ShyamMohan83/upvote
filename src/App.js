import Header from "./components/Header/Header";
import Home from './pages/Home';
import './App.css';
function App() {
  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;

/*
async renderPage(pageNumber: number) {
  const page = await this.pdfDoc.getPage(pageNumber);
  const viewport = page.getViewport({ scale: 1.5, rotation: this.rotation });

  const canvas: HTMLCanvasElement = this.pdfCanvas.nativeElement;
  const context = canvas.getContext('2d')!;

  // Resize canvas
  canvas.width = viewport.width;
  canvas.height = viewport.height;

  // Clear the previous content
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Render the page on the canvas
  const renderContext = {
    canvasContext: context,
    viewport: viewport
  };

  await page.render(renderContext).promise;

  // Remove existing text layer if any
  const existingTextLayer = document.querySelector('.textLayer');
  if (existingTextLayer) {
    existingTextLayer.remove();
  }

  // Create and render the text layer
  const textLayerDiv = document.createElement('div');
  textLayerDiv.className = 'textLayer';
  textLayerDiv.style.width = `${viewport.width}px`;
  textLayerDiv.style.height = `${viewport.height}px`;
  textLayerDiv.style.position = 'absolute';
  textLayerDiv.style.top = '0';
  textLayerDiv.style.left = '0';

  canvas.parentElement?.appendChild(textLayerDiv);

  const textContent = await page.getTextContent();
  pdfjsLib.renderTextLayer({
    textContent: textContent,
    container: textLayerDiv,
    viewport: viewport,
    textDivs: []
  });
}
<div class="pdf-viewer">
  <div class="pdf-page" style="position: relative;">
    <canvas #pdfCanvas class="pdf-canvas"></canvas>
  </div>
  <div class="navigation">
    <button (click)="prevPage()" [disabled]="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button (click)="nextPage()" [disabled]="currentPage === totalPages">Next</button>
    <button (click)="rotateCounterClockwise()">⟲ Rotate Left</button>
    <button (click)="rotateClockwise()">⟳ Rotate Right</button>
  </div>
</div>


.pdf-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.pdf-page {
  position: relative;
}

.pdf-canvas {
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

.textLayer {
  pointer-events: none;
  color: transparent;
}

.textLayer span {
  pointer-events: all;
  color: black;
  background: transparent;
}


**/
