import { generatePdf } from "@/lib/generatePdf";
import { renderPdf } from "@/lib/renderPdf";

export const POST = async (req, { params }) => {
  try {
    const { documentId } = await req.json();
    
    const htmlContent = await renderPdf();
    const pdfBuffer = await generatePdf(htmlContent, documentId, true);
    // return res.status(200).send(pdfBuffer);
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=document-${documentId}.pdf`,
      },
    });
  } catch (error) {
    console.error(error);
    return new Response("Error generating PDF", { status: 500 });
  }
};