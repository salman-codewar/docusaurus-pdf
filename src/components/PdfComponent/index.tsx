import React from "react";
import { Box } from "@mui/material";
import PDFToolbar from "../PDFToolbar";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useColorMode } from "@docusaurus/theme-common";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const PdfComponent = () => {
  const { colorMode } = useColorMode();
  const [isDocumentLoaded, setIsDocumentLoaded] = React.useState(false);

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar: (e: any) => (
      <PDFToolbar Toolbar={e} actions={{ zoom: true }} />
    ),
  });
  const { activateTab } = defaultLayoutPluginInstance;
  React.useLayoutEffect(() => {
    if (isDocumentLoaded) activateTab(0);
  }, [isDocumentLoaded, activateTab]);

  const handleDocumentLoad = () => setIsDocumentLoaded(true);

  return (
    <Box>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
        <Viewer
          theme={{
            theme: colorMode,
          }}
          defaultScale={0.8}
          onDocumentLoad={handleDocumentLoad}
          plugins={[defaultLayoutPluginInstance]}
          fileUrl={require("@site/static/pdf/example.pdf").default}
        />
      </Worker>
    </Box>
  );
};

export default PdfComponent;
