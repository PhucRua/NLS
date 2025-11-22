import React, { useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ResultDisplayProps {
  content: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    alert('Đã sao chép nội dung vào bộ nhớ tạm!');
  };

  const handleExportWord = () => {
    if (!contentRef.current) return;

    // Get the HTML content from the markdown container
    const contentHtml = contentRef.current.innerHTML;

    // Construct a Word-compatible HTML document
    // We add specific CSS for tables to ensure borders appear in Word
    const preHtml = `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Phụ lục Tích hợp Năng lực số</title>
        <style>
          body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 1em; }
          td, th { border: 1px solid black; padding: 8px; vertical-align: top; }
          th { background-color: #f2f2f2; font-weight: bold; }
          h1, h2, h3 { color: #2E74B5; }
        </style>
      </head>
      <body>
    `;
    const postHtml = `</body></html>`;
    const fullHtml = preHtml + contentHtml + postHtml;

    // Create a Blob with the correct MIME type for Word
    const blob = new Blob(['\ufeff', fullHtml], {
      type: 'application/msword'
    });

    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    
    // Generate a filename with timestamp
    const date = new Date().toISOString().slice(0, 10);
    link.download = `TichHopNLS_${date}.doc`;
    
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in-up mt-8">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center flex-wrap gap-4">
        <div className="flex items-center space-x-2 text-primary-dark">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-semibold">Kết quả Tích hợp</h3>
        </div>
        <div className="flex space-x-3">
            <button 
              onClick={handleExportWord}
              className="flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Xuất Word
            </button>
            <button 
              onClick={handleCopy}
              className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Sao chép
            </button>
        </div>
      </div>
      
      <div 
        ref={contentRef}
        className="p-6 overflow-x-auto max-h-[800px] overflow-y-auto prose prose-sm max-w-none prose-headings:text-primary-dark prose-a:text-primary"
      >
         <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ResultDisplay;