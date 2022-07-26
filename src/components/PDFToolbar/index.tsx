import {
  ToolbarSlot,
  ToolbarProps,
  MoreActionsPopover,
} from "@react-pdf-viewer/toolbar";
import React from "react";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface IPDFToolbar {
  actions: {
    zoom?: boolean;
    mode?: boolean;
    more?: boolean;
    print?: boolean;
    download?: boolean;
    navigation?: boolean;
    fullscreen?: boolean;
  };
  Toolbar: (props: ToolbarProps) => React.ReactElement;
}

const PDFToolbar = ({ Toolbar, actions }: IPDFToolbar) => {
  return (
    <Toolbar>
      {(toolbarSlot: ToolbarSlot) => {
        const {
          CurrentPageInput,
          Download,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Print,
          SwitchTheme,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = toolbarSlot;

        return (
          <div
            role="toolbar"
            className="rpv-toolbar"
            aria-orientation="horizontal"
          >
            {actions.navigation && (
              <div className="rpv-toolbar__left">
                <div className="rpv-core__display--hidden rpv-core__display--block-small">
                  <div className="rpv-toolbar__item">
                    <GoToPreviousPage />
                  </div>
                </div>
                <div className="rpv-toolbar__item">
                  <CurrentPageInput />{" "}
                  <span className="rpv-toolbar__label">
                    / <NumberOfPages />
                  </span>
                </div>
                <div className="rpv-core__display--hidden rpv-core__display--block-small">
                  <div className="rpv-toolbar__item">
                    <GoToNextPage />
                  </div>
                </div>
              </div>
            )}
            {actions.zoom && (
              <div className="rpv-toolbar__center">
                <div className="rpv-toolbar__item">
                  <ZoomOut />
                </div>
                <div className="rpv-core__display--hidden rpv-core__display--block-small">
                  <div className="rpv-toolbar__item">
                    <Zoom />
                  </div>
                </div>
                <div className="rpv-toolbar__item">
                  <ZoomIn />
                </div>
              </div>
            )}
            <div className="rpv-toolbar__right">
              {actions.mode && (
                <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                  <div className="rpv-toolbar__item">
                    <SwitchTheme />
                  </div>
                </div>
              )}
              {actions.fullscreen && (
                <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                  <div className="rpv-toolbar__item">
                    <EnterFullScreen />
                  </div>
                </div>
              )}
              {actions.download && (
                <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                  <div className="rpv-toolbar__item">
                    <Download />
                  </div>
                </div>
              )}
              {actions.print && (
                <div className="rpv-core__display--hidden rpv-core__display--block-medium">
                  <div className="rpv-toolbar__item">
                    <Print />
                  </div>
                </div>
              )}
              {actions.more && (
                <div className="rpv-toolbar__item">
                  <MoreActionsPopover toolbarSlot={toolbarSlot} />
                </div>
              )}
            </div>
          </div>
        );
      }}
    </Toolbar>
  );
};

export default PDFToolbar;
