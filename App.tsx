import React, { useState, useRef } from 'react';
import { SubjectType, GradeType, ProcessingState } from './types';
import { getMucDoTheoKhoiLop, createIntegrationPrompt, extractTextFromFile } from './utils';
import { generateCompetencyIntegration } from './services/geminiService';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [subject, setSubject] = useState<SubjectType | ''>('');
  const [grade, setGrade] = useState<GradeType | ''>('');
  const [inputText, setInputText] = useState<string>('');
  const [isReadingFile, setIsReadingFile] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [processing, setProcessing] = useState<ProcessingState>({
    isLoading: false,
    status: 'idle',
    result: null,
    error: null
  });

  const mucDoInfo = grade ? getMucDoTheoKhoiLop(grade) : null;

  // Handle File Upload
  const handleFile = async (file: File) => {
    if (!file) return;
    
    setIsReadingFile(true);
    setProcessing(prev => ({ ...prev, error: null }));

    try {
      const text = await extractTextFromFile(file);
      if (!text || text.trim().length === 0) {
        throw new Error("Không tìm thấy văn bản trong file này (có thể là ảnh scan?).");
      }
      setInputText(text);
    } catch (error: any) {
      setProcessing(prev => ({
        ...prev,
        error: `Lỗi đọc file: ${error.message}`
      }));
    } finally {
      setIsReadingFile(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject || !grade || !inputText.trim()) {
      return;
    }

    setProcessing({ isLoading: true, status: 'preparing', result: null, error: null });

    try {
      // 1. Create Prompt
      const prompt = createIntegrationPrompt(inputText, subject, grade);
      
      // 2. Call Gemini
      setProcessing(prev => ({ ...prev, status: 'processing' }));
      const result = await generateCompetencyIntegration(prompt);

      // 3. Complete
      setProcessing({
        isLoading: false,
        status: 'completed',
        result: result,
        error: null
      });

    } catch (error: any) {
      setProcessing({
        isLoading: false,
        status: 'error',
        result: null,
        error: error.message || "Đã xảy ra lỗi không xác định"
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 animate-fade-in-down">
        <div className="bg-gradient-to-r from-primary-dark to-primary p-8 text-center text-white">
          <h1 className="text-3xl font-bold mb-2">🎓 Tích hợp Năng lực Số vào Phụ lục Môn học</h1>
          <p className="opacity-90 text-sm">Theo Thông tư 02/2025/TT-BGDĐT, Công văn 3456/BGDĐT-GDPT & Công văn 405/SGDĐT-GDTrH</p>
        </div>
        
        <div className="p-8">
          {/* Info Box */}
          <div className="bg-blue-50 border-l-4 border-primary p-4 mb-8 rounded-r">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-900">
                  <span className="font-bold">Hướng dẫn:</span> Tải lên file Phụ lục môn học (PDF hoặc DOCX) để AI phân tích. Hệ thống sẽ tự động trích xuất nội dung và đề xuất năng lực số phù hợp.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Subject Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Môn học
                </label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value as SubjectType)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white"
                >
                  <option value="">-- Chọn môn học --</option>
                  <optgroup label="Môn học chủ đạo">
                    <option value="Tin học">Tin học</option>
                  </optgroup>
                  <optgroup label="Khoa học Tự nhiên">
                    <option value="Toán">Toán</option>
                    <option value="Vật lý">Vật lý</option>
                    <option value="Hóa học">Hóa học</option>
                    <option value="Sinh học">Sinh học</option>
                    <option value="Khoa học tự nhiên">Khoa học tự nhiên</option>
                  </optgroup>
                  <optgroup label="Khoa học Xã hội">
                    <option value="Ngữ văn">Ngữ văn</option>
                    <option value="Tiếng Anh">Tiếng Anh</option>
                    <option value="Lịch sử">Lịch sử</option>
                    <option value="Địa lý">Địa lý</option>
                    <option value="GDCD">GDCD</option>
                    <option value="Khoa học xã hội">Khoa học xã hội</option>
                  </optgroup>
                  <optgroup label="Khác">
                    <option value="Công nghệ">Công nghệ</option>
                    <option value="Âm nhạc">Âm nhạc</option>
                    <option value="Mỹ thuật">Mỹ thuật</option>
                    <option value="Thể dục">Thể dục</option>
                    <option value="Hoạt động trải nghiệm">Hoạt động trải nghiệm</option>
                  </optgroup>
                </select>
              </div>

              {/* Grade Select */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Khối lớp
                </label>
                <div className="relative">
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value as GradeType)}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white"
                  >
                    <option value="">-- Chọn khối lớp --</option>
                    <optgroup label="Tiểu học (CB1/CB2)">
                      <option value="Lớp 1">Lớp 1</option>
                      <option value="Lớp 2">Lớp 2</option>
                      <option value="Lớp 3">Lớp 3</option>
                      <option value="Lớp 4">Lớp 4</option>
                      <option value="Lớp 5">Lớp 5</option>
                    </optgroup>
                    <optgroup label="THCS (TC1/TC2)">
                      <option value="Lớp 6">Lớp 6</option>
                      <option value="Lớp 7">Lớp 7</option>
                      <option value="Lớp 8">Lớp 8</option>
                      <option value="Lớp 9">Lớp 9</option>
                    </optgroup>
                    <optgroup label="THPT (NC1)">
                      <option value="Lớp 10">Lớp 10</option>
                      <option value="Lớp 11">Lớp 11</option>
                      <option value="Lớp 12">Lớp 12</option>
                    </optgroup>
                  </select>
                  {mucDoInfo && (
                    <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {mucDoInfo.kyHieu}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* File Upload Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tải lên Phụ lục (PDF / DOCX)
              </label>
              
              <div 
                className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 
                  ${dragActive ? 'border-accent bg-green-50 transform scale-105' : 'border-primary-light bg-gray-50 hover:bg-green-50 hover:border-primary'}
                  ${isReadingFile ? 'opacity-75 pointer-events-none' : ''}
                `}
                onDragEnter={handleDrag} 
                onDragLeave={handleDrag} 
                onDragOver={handleDrag} 
                onDrop={handleDrop}
                onClick={onButtonClick}
              >
                <input 
                  ref={fileInputRef}
                  type="file" 
                  accept=".pdf,.docx,.txt" 
                  className="hidden" 
                  onChange={handleFileChange} 
                />
                
                {isReadingFile ? (
                  <div className="flex flex-col items-center justify-center py-4">
                     <svg className="animate-spin h-10 w-10 text-primary mb-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-primary font-medium">Đang đọc và phân tích file...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <svg className="w-12 h-12 text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-lg font-medium text-gray-700">Kéo thả file vào đây</p>
                    <p className="text-sm text-gray-500 mt-1">hoặc <span className="text-primary font-semibold hover:underline">click để chọn file</span> (PDF, DOCX)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Text Input Area (Review) */}
            {inputText && (
              <div className="animate-fade-in-up">
                <label className="block text-sm font-medium text-gray-700 mb-2 flex justify-between items-end">
                  <span>Nội dung trích xuất (Có thể chỉnh sửa nếu cần)</span>
                  <button
                    type="button"
                    onClick={() => setInputText('')}
                    className="text-xs text-red-500 hover:text-red-700 underline"
                  >
                    Xóa nội dung
                  </button>
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary font-mono text-sm bg-white"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={processing.isLoading || !inputText}
              className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white 
                ${(processing.isLoading || !inputText)
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                } transition-all duration-200 transform hover:-translate-y-0.5`}
            >
              {processing.isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang xử lý với Gemini AI...
                </span>
              ) : (
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  Tích hợp Năng lực Số
                </span>
              )}
            </button>
          </form>

          {/* Error Message */}
          {processing.error && (
             <div className="mt-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative animate-fade-in-up" role="alert">
                <strong className="font-bold">Lỗi! </strong>
                <span className="block sm:inline">{processing.error}</span>
             </div>
          )}

        </div>
      </div>

      {/* Result Section */}
      {processing.result && (
        <ResultDisplay content={processing.result} />
      )}
    </div>
  );
}

export default App;