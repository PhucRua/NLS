export interface MucDoThanhThao {
  ten: string;
  kyHieu: string;
  moTa: string;
  nhiemVu: string;
  tuChu: string;
  lopApDung: string[];
}

export interface NangLucThanhPhan {
  ma: string;
  ten: string;
  moTa: string;
  chiSoTheoLop: Record<string, string[]>;
}

export interface MienNangLuc {
  ma: string;
  ten: string;
  moTaTongQuat: string;
  nangLucThanhPhan: NangLucThanhPhan[];
}

export interface KhungNLSData {
  thongTu: string;
  congVan3456: string;
  congVan405: string;
  mucDoThanhThao: Record<string, MucDoThanhThao>;
  mienNangLuc: MienNangLuc[];
}

export interface ProcessingState {
  isLoading: boolean;
  status: string;
  result: string | null;
  error: string | null;
}

export type SubjectType = 
  | 'Tin học' 
  | 'Toán' | 'Vật lý' | 'Hóa học' | 'Sinh học' | 'Khoa học tự nhiên'
  | 'Ngữ văn' | 'Tiếng Anh' | 'Lịch sử' | 'Địa lý' | 'GDCD' | 'Khoa học xã hội'
  | 'Công nghệ' | 'Âm nhạc' | 'Mỹ thuật' | 'Thể dục' | 'Hoạt động trải nghiệm';

export type GradeType = 
  | 'Lớp 1' | 'Lớp 2' 
  | 'Lớp 3' | 'Lớp 4' | 'Lớp 5' 
  | 'Lớp 6' | 'Lớp 7' 
  | 'Lớp 8' | 'Lớp 9' 
  | 'Lớp 10' | 'Lớp 11' | 'Lớp 12';