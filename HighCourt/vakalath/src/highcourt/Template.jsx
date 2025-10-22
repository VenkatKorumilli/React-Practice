import React, { useEffect, useRef, useState } from "react";
import { renderAsync } from "docx-preview";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun, SectionProperties} from "docx";

function DocxModalViewer({ docxBlob, isOpen, onClose }) {
  const containerRef = useRef();

  useEffect(() => {
    if (isOpen && docxBlob && containerRef.current) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        await renderAsync(e.target.result, containerRef.current);
      };
      reader.readAsArrayBuffer(docxBlob);
    }
    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [docxBlob, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        zIndex: 1050,
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between">
            <h5 className="modal-title">Preview Word Document</h5>
            <button
              type="button"
              className="close btn btn-danger fs-5 py-0"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div
            className="modal-body"
            style={{
              maxHeight: "70vh",
              overflowY: "auto",
              background: "#fff",
            }}
          >
            <div ref={containerRef} />
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            {docxBlob && (
              <button
                className="btn btn-success"
                onClick={() =>
                  saveAs(docxBlob, "Bail.docx")
                }
              >
                Download
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const Template = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [docxBlob, setDocxBlob] = useState(null);

  const generateAndShowDocument = async () => {
    const doc = new Document({
      sections: [
        {
         properties: {
        page: {
          size: {
            orientation: "portrait",
            width: 11906, // e.g., A4 size in twips
            height: 16838,
          },
          margin: {
            top: 720,
            right: 720,
            bottom: 720,
            left: 720
          }
        }
      },
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "MEMORANDUM OF CRIMINAL PETITION",
                  size: 25,
                }),
              ],
              alignment: "center",
            }),
            new Paragraph({
              children: [
                new TextRun({
                  text: "UNDER SECTION 437 & 439 CRIMINAL PROCEDURE CODE]",
                  size: 25,
                }),
              ],
              alignment: "center",
            }),
            new Paragraph({
              text: "IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH AT HYDERABAD]",
              alignment: "center",
              size: 25,
              spacing: { after: 300 },
            }),
            new Paragraph({
              text: "CRL.P.No.                        OF 2007",
              alignment: "center",
              size: 25,
              spacing: { after: 300 },
            }),
            new Paragraph({ text: "BETWEEN:", alignment: "Left", spacing: { after: 200 } }),
            new Paragraph({ text: "___________________" }),
            new Paragraph({ text: "___________________" }),
            new Paragraph({ text: "___________________" }),
            new Paragraph({ text: "___________________" }),
            new Paragraph({ text: "___________________" }),
            new Paragraph({
              text: "..PETITIONER/ACCUSED",
              alignment: "right",
              spacing: { before: 200 },
            }),
            new Paragraph({
              text: "AND",
              alignment: "left",
              spacing: { before: 400, after: 400 },
            }),
            new Paragraph({
              text: "THE STATE OF A.P. REP.BY PUBLIC PROSECUTOR]",
              spacing: { after: 200 },
            }),
            new Paragraph({
              text: "..RESPONDENT/COMPLAINANT",
              alignment: "right",
              spacing: { after: 400 },
            }),
            new Paragraph({
              text: "The address for service of all notices and process on the above named Petitioner is that of his counsel M/s ###, Advocate, Hyderabad.",
              spacing: { after: 400 },
            }),
            new Paragraph({
              text: "BAIL APPLICATION",
              bold: true,
              alignment: "center",
              
              spacing: { after: 400 },
            }),
            new Paragraph({
              text: "The petitioner is accused in Crime No.______ of 2007 of ________________ Police Station. He is alleged to have committed offenses punishable under Sections ______________. He is arrested on __________.",
              spacing: { after: 200 },
            }),
            new Paragraph({
              text: "1. The prosecution case is briefly follows:-",
              spacing: { after: 800 },
            }),
            new Paragraph({
              text: "2. The Petitioner submits that he is innocent of the offenses alleged against him and he has been falsely implicated due to",
              spacing: { after: 500 },
            }),
            new Paragraph({ text: "3. The petitioner submits that", spacing: { after: 500 } }),
            new Paragraph({ text: "4. The petitioner submits that", spacing: { after: 500 } }),
            new Paragraph({ text: "5. The petitioner submits that", spacing: { after: 500 } }),
            new Paragraph({ text: "6. The petitioner submits that", spacing: { after: 500 } }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    setDocxBlob(blob);
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={generateAndShowDocument} className="btn btn-primary">
        Generate & Preview Document
      </button>

      <DocxModalViewer
        docxBlob={docxBlob}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Template;
