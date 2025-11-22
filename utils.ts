import { KHUNG_NLS_DATA } from './constants';
import { MucDoThanhThao } from './types';

// Declare globals for the libraries loaded via script tags
declare const mammoth: any;
declare const pdfjsLib: any;

export function getKhungNLSText(): string {
  let text = `KHUNG NĂNG LỰC SỐ CHO NGƯỜI HỌC
(Thông tư ${KHUNG_NLS_DATA.thongTu})
(Công văn ${KHUNG_NLS_DATA.congVan3456})
(Công văn ${KHUNG_NLS_DATA.congVan405})

=== MỨC ĐỘ THÀNH THẠO THEO KHỐI LỚP ===\n\n`;
  
  for (const [key, value] of Object.entries(KHUNG_NLS_DATA.mucDoThanhThao)) {
    text += `${key} - ${value.ten} (${value.kyHieu}):\n`;
    text += `  - Áp dụng cho: ${value.lopApDung.join(', ')}\n`;
    text += `  - Nhiệm vụ: ${value.nhiemVu}\n`;
    text += `  - Mức độ tự chủ: ${value.tuChu}\n`;
    text += `  - Mô tả: ${value.moTa}\n\n`;
  }

  text += `\n=== CÁC MIỀN NĂNG LỰC VÀ NĂNG LỰC THÀNH PHẦN ===\n\n`;

  KHUNG_NLS_DATA.mienNangLuc.forEach(mien => {
    text += `${mien.ma}. ${mien.ten.toUpperCase()}\n`;
    text += `Mô tả tổng quát: ${mien.moTaTongQuat}\n\n`;
    
    mien.nangLucThanhPhan.forEach(nl => {
      text += `  ${nl.ma}. ${nl.ten}\n`;
      text += `  Định nghĩa: ${nl.moTa}\n`;
      text += `  Chỉ báo theo mức độ:\n`;
      
      for (const [level, indicators] of Object.entries(nl.chiSoTheoLop)) {
        const mucDo = Object.values(KHUNG_NLS_DATA.mucDoThanhThao).find(m => 
          level === Object.keys(KHUNG_NLS_DATA.mucDoThanhThao).find(k => k === level)
        );
        text += `    [${level}] ${mucDo ? mucDo.ten : level}:\n`;
        indicators.forEach((indicator, idx) => {
          text += `      - ${String.fromCharCode(97 + idx)}. ${indicator}\n`;
        });
      }
      text += '\n';
    });
  });

  return text;
}

export function getMucDoTheoKhoiLop(khoiLop: string): MucDoThanhThao | null {
  for (const value of Object.values(KHUNG_NLS_DATA.mucDoThanhThao)) {
    if (value.lopApDung.includes(khoiLop)) {
      return value;
    }
  }
  return null;
}

export function createIntegrationPrompt(phuLucText: string, monHoc: string, khoiLop: string): string {
  const khungNLSText = getKhungNLSText();
  const mucDoInfo = getMucDoTheoKhoiLop(khoiLop);
  
  if (!mucDoInfo) {
    throw new Error(`Không tìm thấy mức độ cho ${khoiLop}`);
  }

  return `Bạn là chuyên gia giáo dục Việt Nam, am hiểu sâu sắc Chương trình GDPT 2018 và Khung Năng lực số theo Thông tư 02/2025/TT-BGDĐT.

## BỐI CẢNH
Nhiệm vụ của bạn là hỗ trợ Tổ chuyên môn môn **${monHoc}** xây dựng PHỤ LỤC TÍCH HỢP NĂNG LỰC SỐ HOÀN CHỈNH, trong đó **DIỄN GIẢI CHI TIẾT** hoạt động thực tế để hình thành năng lực số cho học sinh **${khoiLop}**.

## TÀI LIỆU NGUỒN (BẮT BUỘC TUÂN THỦ)

### 1. Thông tư 02/2025/TT-BGDĐT (Khung NLS):
${khungNLSText}

### 2. Mức độ yêu cầu (Tham chiếu CV 405):
**Mức độ cho ${khoiLop}: ${mucDoInfo.ten} (${mucDoInfo.kyHieu})**
- Nhiệm vụ: ${mucDoInfo.nhiemVu}
- Mức độ tự chủ: ${mucDoInfo.tuChu}
- Mô tả: ${mucDoInfo.moTa}

### 3. Nội dung Phụ lục môn học (Văn bản đầu vào):
${phuLucText}

## YÊU CẦU CHI TIẾT VỀ QUY TRÌNH

### Bước 1: Phân tích Phụ lục
- Đọc kỹ nội dung văn bản đầu vào để xác định cấu trúc bảng (nếu có) hoặc danh sách bài học.
- **BẮT BUỘC**: Phải tạo nội dung năng lực số cho TẤT CẢ các bài học/chủ đề tìm thấy trong văn bản.

### Bước 2: Xác định năng lực số và CHỈ BÁO CỤ THỂ
- Với **MỖI bài học**, chọn 1-3 Năng lực thành phần phù hợp (ví dụ: 1.1, 2.4, 3.1, 6.2)
- Dựa vào mức độ **${mucDoInfo.ten}** cho ${khoiLop}, xác định đúng cột trong bảng chỉ báo
- Trong cột đó, chọn ra chỉ báo cụ thể (a, b, c...) phù hợp nhất

### Bước 3: DIỄN GIẢI HOẠT ĐỘNG THỰC TẾ (THEN CHỐT)
**QUAN TRỌNG**: Với MỖI bài học, bạn phải:
1. Diễn giải thành hoạt động học tập cụ thể, sinh động (ít nhất 2-3 câu)
2. Gắn chặt với nội dung bài học của tiết đó
3. Phù hợp tâm lý lứa tuổi học sinh ${khoiLop}
4. Thực tiễn với điều kiện trường học Việt Nam
5. Mỗi bài học có thể có 1-3 năng lực số, mỗi năng lực cách nhau bởi <br><br>

### Bước 4: Định dạng kết quả
**Định dạng cột "Năng lực số hình thành" cho từng ô:**
\`\`\`
${mucDoInfo.kyHieu} [Mã NL].[Chỉ báo]: [Diễn giải chi tiết 2-3 câu]<br><br>${mucDoInfo.kyHieu} [Mã NL].[Chỉ báo]: [Diễn giải chi tiết 2-3 câu]
\`\`\`

## OUTPUT YÊU CẦU

Hãy tái tạo lại bảng kế hoạch dạy học (hoặc tạo bảng mới nếu đầu vào là danh sách) với các cột gốc và THÊM cột "Năng lực số hình thành" vào cuối cùng.

Định dạng Output là **Markdown Table**.

Ví dụ hàng trong bảng:
| STT | Bài học | Số tiết | ... | Năng lực số hình thành |
| --- | --- | --- | --- | --- |
| 1 | Bài 1... | 2 | ... | ${mucDoInfo.kyHieu} 1.1.a: [Diễn giải chi tiết...]<br><br>${mucDoInfo.kyHieu} 4.1.a: [Diễn giải chi tiết...] |

**CHỈ DẪN CUỐI CÙNG**: Hãy tạo bảng HOÀN CHỈNH với TẤT CẢ các bài học từ đầu đến cuối. Không được lược bỏ.`;
}

/**
 * Helper function to extract text from File object (PDF or DOCX)
 */
export async function extractTextFromFile(file: File): Promise<string> {
  const fileType = file.type;
  const fileName = file.name.toLowerCase();

  if (fileName.endsWith('.docx')) {
    return extractTextFromDocx(file);
  } else if (fileName.endsWith('.pdf') || fileType === 'application/pdf') {
    return extractTextFromPdf(file);
  } else if (fileType === 'text/plain') {
    return await file.text();
  } else {
    throw new Error('Định dạng file không được hỗ trợ. Vui lòng chọn PDF hoặc DOCX.');
  }
}

async function extractTextFromDocx(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target?.result;
      if (!mammoth) {
        reject(new Error('Thư viện Mammoth chưa được tải.'));
        return;
      }
      mammoth.extractRawText({ arrayBuffer: arrayBuffer })
        .then((result: any) => {
          resolve(result.value);
        })
        .catch((err: any) => reject(err));
    };
    reader.onerror = (err) => reject(err);
    reader.readAsArrayBuffer(file);
  });
}

async function extractTextFromPdf(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const typedarray = new Uint8Array(event.target?.result as ArrayBuffer);
      
      if (!pdfjsLib) {
        reject(new Error('Thư viện PDF.js chưa được tải.'));
        return;
      }

      try {
        const pdf = await pdfjsLib.getDocument(typedarray).promise;
        let fullText = '';
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items.map((item: any) => item.str).join(' ');
          fullText += pageText + '\n';
        }
        
        resolve(fullText);
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = (err) => reject(err);
    reader.readAsArrayBuffer(file);
  });
}