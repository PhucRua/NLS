import { KhungNLSData } from './types';

export const KHUNG_NLS_DATA: KhungNLSData = {
  "thongTu": "02/2025/TT-BGDĐT ngày 24/01/2025",
  "congVan3456": "3456/BGDĐT-GDPT ngày 27/06/2025",
  "congVan405": "405/SGDĐT-GDTrH",
  
  "mucDoThanhThao": {
    "L1-L2": {
      "ten": "Cơ bản 1",
      "kyHieu": "CB1",
      "moTa": "Ở trình độ cơ bản và có hướng dẫn",
      "nhiemVu": "Nhiệm vụ đơn giản",
      "tuChu": "Với sự hướng dẫn",
      "lopApDung": ["Lớp 1", "Lớp 2"]
    },
    "L3-L4-L5": {
      "ten": "Cơ bản 2",
      "kyHieu": "CB2",
      "moTa": "Ở trình độ cơ bản, với khả năng tự chủ và hướng dẫn phù hợp khi cần",
      "nhiemVu": "Nhiệm vụ đơn giản",
      "tuChu": "Tự chủ và có hướng dẫn khi cần thiết",
      "lopApDung": ["Lớp 3", "Lớp 4", "Lớp 5"]
    },
    "L6-L7": {
      "ten": "Trung cấp 1",
      "kyHieu": "TC1",
      "moTa": "Với các vấn đề đơn giản, học sinh có thể tự mình",
      "nhiemVu": "Nhiệm vụ được xác định rõ ràng và thường xuyên",
      "tuChu": "Tự chủ hoàn toàn",
      "lopApDung": ["Lớp 6", "Lớp 7"]
    },
    "L8-L9": {
      "ten": "Trung cấp 2",
      "kyHieu": "TC2",
      "moTa": "Dựa trên nhu cầu riêng và với các vấn đề được xác định rõ ràng và không thường xuyên",
      "nhiemVu": "Nhiệm vụ được xác định rõ ràng và không thường xuyên",
      "tuChu": "Độc lập và theo nhu cầu cá nhân",
      "lopApDung": ["Lớp 8", "Lớp 9"]
    },
    "L10-L11-L12": {
      "ten": "Nâng cao 1",
      "kyHieu": "NC1",
      "moTa": "Khi tự mình và hướng dẫn người khác",
      "nhiemVu": "Các nhiệm vụ và vấn đề khác nhau",
      "tuChu": "Hướng dẫn người khác",
      "lopApDung": ["Lớp 10", "Lớp 11", "Lớp 12"]
    }
  },

  "mienNangLuc": [
    {
      "ma": "I",
      "ten": "Khai thác dữ liệu và thông tin",
      "moTaTongQuat": "Xác định được rõ nhu cầu thông tin; xác định được vị trí và truy xuất được dữ liệu, thông tin và nội dung số. Đánh giá được mức độ liên quan của nguồn và nội dung của chúng. Lưu trữ, quản lý và tổ chức được dữ liệu, thông tin và nội dung số.",
      "nangLucThanhPhan": [
        {
          "ma": "1.1",
          "ten": "Duyệt, tìm kiếm và lọc dữ liệu, thông tin và nội dung số",
          "moTa": "Xác định được nhu cầu thông tin; tìm kiếm được dữ liệu, thông tin và nội dung trong môi trường số; truy cập chúng và khai thác được kết quả tìm kiếm. Tạo và cập nhật được chiến lược tìm kiếm.",
          "chiSoTheoLop": {
            "L1-L2": [
              "Xác định được nhu cầu thông tin, tìm kiếm dữ liệu thông qua tìm kiếm đơn giản",
              "Tìm được cách truy cập và điều hướng giữa chúng",
              "Xác định được các chiến lược tìm kiếm đơn giản"
            ],
            "L3-L4-L5": [
              "Xác định được nhu cầu thông tin",
              "Tìm được dữ liệu qua tìm kiếm đơn giản",
              "Xác định được chiến lược tìm kiếm đơn giản"
            ],
            "L6-L7": [
              "Giải thích được nhu cầu thông tin",
              "Thực hiện được tìm kiếm theo quy trình",
              "Giải thích được chiến lược tìm kiếm"
            ],
            "L8-L9": [
              "Minh họa được nhu cầu thông tin",
              "Tổ chức được tìm kiếm dữ liệu",
              "Tổ chức được các chiến lược tìm kiếm"
            ],
            "L10-L11-L12": [
              "Đáp ứng được nhu cầu thông tin",
              "Áp dụng được kỹ thuật tìm kiếm",
              "Tự đề xuất được chiến lược tìm kiếm"
            ]
          }
        },
        {
          "ma": "1.2",
          "ten": "Đánh giá dữ liệu, thông tin và nội dung số",
          "moTa": "Phân tích, so sánh và đánh giá được độ tin cậy và tính xác thực của nguồn dữ liệu, thông tin và nội dung số.",
          "chiSoTheoLop": {
            "L1-L2": ["Phát hiện được độ tin cậy của các nguồn chung"],
            "L3-L4-L5": ["Phát hiện được độ tin cậy và độ chính xác của nguồn"],
            "L6-L7": ["Phân tích, so sánh, đánh giá được độ tin cậy của nguồn đã tổ chức rõ ràng"],
            "L8-L9": ["Phân tích, đánh giá được các nguồn dữ liệu, thông tin và nội dung số"],
            "L10-L11-L12": ["Đánh giá được độ tin cậy của các nguồn khác nhau", "Tiến hành đánh giá có phê phán"]
          }
        },
        {
          "ma": "1.3",
          "ten": "Quản lý dữ liệu, thông tin và nội dung số",
          "moTa": "Tổ chức, lưu trữ và truy xuất được dữ liệu, thông tin và nội dung trong môi trường số có cấu trúc.",
          "chiSoTheoLop": {
            "L1-L2": ["Xác định được cách tổ chức, lưu trữ đơn giản", "Nhận biết được nơi sắp xếp trong môi trường có cấu trúc"],
            "L3-L4-L5": ["Xác định được cách tổ chức, lưu trữ và truy xuất đơn giản"],
            "L6-L7": ["Lựa chọn được dữ liệu để tổ chức thường xuyên", "Sắp xếp trật tự trong môi trường có cấu trúc"],
            "L8-L9": ["Sắp xếp được để dễ lưu trữ và truy xuất", "Tổ chức được trong môi trường có cấu trúc"],
            "L10-L11-L12": ["Thao tác được để tổ chức, lưu trữ dễ dàng hơn", "Triển khai được việc tổ chức và sắp xếp"]
          }
        }
      ]
    },
    {
      "ma": "II",
      "ten": "Giao tiếp và hợp tác trong môi trường số",
      "moTaTongQuat": "Tương tác, giao tiếp và hợp tác thông qua công nghệ số đồng thời nhận thức rõ được sự đa dạng về văn hóa và thế hệ. Tham gia và đóng góp cho xã hội thông qua các dịch vụ công và tư. Quản lý danh tính số và danh tiếng của bản thân.",
      "nangLucThanhPhan": [
        {
          "ma": "2.1",
          "ten": "Tương tác thông qua công nghệ số",
          "moTa": "Tương tác thông qua các công nghệ số khác nhau và nhận biết được phương tiện giao tiếp số phù hợp cho một bối cảnh cụ thể.",
          "chiSoTheoLop": {
            "L1-L2": ["Lựa chọn được công nghệ số đơn giản để tương tác", "Xác định được phương tiện giao tiếp đơn giản thích hợp"],
            "L3-L4-L5": ["Lựa chọn được công nghệ số đơn giản", "Xác định được phương tiện giao tiếp phù hợp"],
            "L6-L7": ["Thực hiện được tương tác xác định rõ ràng và thường xuyên", "Lựa chọn được phương tiện giao tiếp phù hợp quy trình"],
            "L8-L9": ["Lựa chọn được nhiều công nghệ số để tương tác", "Lựa chọn được nhiều phương tiện giao tiếp số"],
            "L10-L11-L12": ["Sử dụng được nhiều công nghệ số để tương tác", "Chỉ cho người khác phương tiện thích hợp nhất"]
          }
        },
        {
          "ma": "2.2",
          "ten": "Chia sẻ thông tin và nội dung thông qua công nghệ số",
          "moTa": "Chia sẻ dữ liệu, thông tin và nội dung số với người khác thông qua các công nghệ số phù hợp. Đóng vai trò là người trung gian, hiểu biết về thực hành trích dẫn và ghi chú nguồn.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được công nghệ số đơn giản để chia sẻ", "Nhận biết được tham chiếu và ghi chú nguồn cơ bản"],
            "L3-L4-L5": ["Nhận biết được công nghệ số phù hợp để chia sẻ"],
            "L6-L7": ["Lựa chọn và xác định rõ công nghệ số phù hợp", "Minh họa phương pháp tham chiếu và ghi chú nguồn"],
            "L8-L9": ["Vận dụng được công nghệ số để chia sẻ", "Sử dụng được phương pháp tham chiếu"],
            "L10-L11-L12": ["Chia sẻ thông qua nhiều công cụ số phù hợp", "Đề xuất được phương pháp tham chiếu"]
          }
        },
        {
          "ma": "2.3",
          "ten": "Sử dụng công nghệ số để thực hiện trách nhiệm công dân",
          "moTa": "Tham gia đóng góp cho xã hội thông qua việc sử dụng các dịch vụ số công và tư. Tìm kiếm được cơ hội để trao quyền và thu hút công dân thông qua các công nghệ số phù hợp.",
          "chiSoTheoLop": {
            "L1-L2": ["Xác định được dịch vụ số đơn giản cho công dân", "Nhận biết được cách tham gia đơn giản với xã hội"],
            "L3-L4-L5": ["Xác định được các dịch vụ số đơn giản"],
            "L6-L7": ["Lựa chọn được dịch vụ số phù hợp để tham gia xã hội"],
            "L8-L9": ["Đề xuất được dịch vụ số để tham gia tích cực", "Thảo luận được về cơ hội trao quyền"],
            "L10-L11-L12": ["Sử dụng được dịch vụ số công và tư", "Đánh giá được cơ hội trao quyền công dân"]
          }
        },
        {
          "ma": "2.4",
          "ten": "Hợp tác thông qua công nghệ số",
          "moTa": "Sử dụng được các công cụ và công nghệ số cho các quá trình hợp tác cũng như để cùng xây dựng và đồng sáng tạo dữ liệu, tài nguyên và kiến thức.",
          "chiSoTheoLop": {
            "L1-L2": ["Lựa chọn được công cụ số đơn giản để hợp tác", "Nhận biết được cách cùng xây dựng nội dung số đơn giản"],
            "L3-L4-L5": ["Lựa chọn được công cụ số đơn giản để hợp tác"],
            "L6-L7": ["Lựa chọn được công cụ và công nghệ số thích hợp", "Xác định được cách đồng sáng tạo dữ liệu"],
            "L8-L9": ["Sử dụng được công cụ và công nghệ số phù hợp", "Thực hiện được việc đồng sáng tạo"],
            "L10-L11-L12": ["Đề xuất được công cụ phù hợp nhất", "Hướng dẫn người khác đồng sáng tạo"]
          }
        },
        {
          "ma": "2.5",
          "ten": "Thực hiện quy tắc ứng xử trên mạng",
          "moTa": "Nhận thức được các chuẩn mực hành vi và kiến thức khi sử dụng công nghệ số và tương tác trong môi trường số. Điều chỉnh được các chiến lược giao tiếp phù hợp với đối tượng cụ thể và nhận thức được sự đa dạng về văn hóa và thế hệ trong môi trường số.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được quy tắc ứng xử cơ bản trên mạng", "Xác định được hành vi phù hợp"],
            "L3-L4-L5": ["Nhận biết được quy tắc ứng xử cơ bản"],
            "L6-L7": ["Thực hiện được quy tắc ứng xử trên mạng", "Điều chỉnh được cách giao tiếp phù hợp bối cảnh"],
            "L8-L9": ["Áp dụng được chuẩn mực hành vi", "Điều chỉnh được chiến lược giao tiếp phù hợp đối tượng"],
            "L10-L11-L12": ["Đánh giá và điều chỉnh được quy tắc ứng xử", "Nhận thức và tôn trọng được sự đa dạng văn hóa"]
          }
        },
        {
          "ma": "2.6",
          "ten": "Quản lý danh tính số",
          "moTa": "Tạo và quản lý được một hoặc nhiều danh tính số để bảo vệ danh tiếng của bản thân, làm việc với dữ liệu mà một người tạo ra bằng nhiều công cụ, môi trường và dịch vụ số.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được lợi ích và rủi ro của danh tính số", "Xác định được thông tin cơ bản trên môi trường số"],
            "L3-L4-L5": ["Nhận biết được lợi ích và rủi ro của danh tính số"],
            "L6-L7": ["Tạo được danh tính số đơn giản", "Theo dõi được dấu chân số cơ bản"],
            "L8-L9": ["Tạo và quản lý được danh tính số phù hợp", "Hiểu được tác động của dấu chân số"],
            "L10-L11-L12": ["Quản lý được nhiều danh tính số", "Bảo vệ được danh tiếng trực tuyến"]
          }
        }
      ]
    },
    {
      "ma": "III",
      "ten": "Sáng tạo nội dung số",
      "moTaTongQuat": "Tạo lập và biên tập được nội dung số. Cải tiến và kết hợp được thông tin và nội dung vào vốn tri thức sẵn có trong khi đó hiểu được hệ thống giấy phép và bản quyền liên quan đến quá trình sáng tạo nội dung số. Biết được cách đưa ra các hướng dẫn có thể hiểu được cho hệ thống máy tính.",
      "nangLucThanhPhan": [
        {
          "ma": "3.1",
          "ten": "Phát triển nội dung số",
          "moTa": "Tạo và chỉnh sửa được nội dung số ở các định dạng khác nhau, nhằm thể hiện bản thân thông qua các phương tiện số.",
          "chiSoTheoLop": {
            "L1-L2": ["Xác định được cách tạo nội dung số đơn giản", "Chọn được cách thể hiện bản thân qua phương tiện số đơn giản"],
            "L3-L4-L5": ["Xác định được cách tạo nội dung số đơn giản"],
            "L6-L7": ["Tạo được nội dung số ở các định dạng cơ bản", "Chỉnh sửa được nội dung số"],
            "L8-L9": ["Tạo và chỉnh sửa được nội dung số ở nhiều định dạng", "Thể hiện bản thân một cách sáng tạo"],
            "L10-L11-L12": ["Tạo và chỉnh sửa được nội dung số phức tạp", "Hướng dẫn người khác tạo nội dung số"]
          }
        },
        {
          "ma": "3.2",
          "ten": "Tích hợp và tạo lập lại nội dung số",
          "moTa": "Sửa đổi, tinh chỉnh và tích hợp được thông tin và nội dung mới vào khối kiến thức và tài nguyên hiện có để tạo ra nội dung và kiến thức mới, độc đáo và phù hợp.",
          "chiSoTheoLop": {
            "L1-L2": ["Xác định được cách sửa đổi nội dung số đơn giản", "Nhận biết được cách kết hợp thông tin"],
            "L3-L4-L5": ["Xác định được cách sửa đổi nội dung số đơn giản"],
            "L6-L7": ["Sửa đổi và tinh chỉnh được nội dung số cơ bản", "Tích hợp được thông tin từ nhiều nguồn"],
            "L8-L9": ["Sửa đổi, tinh chỉnh và tích hợp được nội dung số", "Tạo ra được nội dung mới và độc đáo"],
            "L10-L11-L12": ["Sửa đổi, tinh chỉnh và tích hợp thành thạo", "Tạo ra được kiến thức và tài nguyên mới có giá trị"]
          }
        },
        {
          "ma": "3.3",
          "ten": "Thực thi bản quyền và giấy phép",
          "moTa": "Hiểu được cách áp dụng bản quyền và giấy phép cho thông tin và nội dung số.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được rằng nội dung số có thể có bản quyền", "Xác định được quy tắc cơ bản về sử dụng nội dung"],
            "L3-L4-L5": ["Nhận biết được về bản quyền nội dung số"],
            "L6-L7": ["Phân biệt được các loại giấy phép khác nhau", "Áp dụng được quy tắc bản quyền cơ bản"],
            "L8-L9": ["Hiểu và áp dụng được quy định bản quyền và giấy phép", "Lựa chọn được giấy phép phù hợp"],
            "L10-L11-L12": ["Áp dụng thành thạo quy định bản quyền", "Hướng dẫn người khác về bản quyền nội dung số"]
          }
        },
        {
          "ma": "3.4",
          "ten": "Lập trình",
          "moTa": "Lập kế hoạch và phát triển được một chuỗi các câu lệnh dễ hiểu cho một hệ thống máy tính để giải quyết một vấn đề nhất định hoặc thực hiện một nhiệm vụ cụ thể.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được các hướng dẫn đơn giản cho hệ thống máy tính", "Thực hiện được các bước đơn giản hoàn thành nhiệm vụ"],
            "L3-L4-L5": ["Nhận biết được hướng dẫn đơn giản cho máy tính"],
            "L6-L7": ["Lập kế hoạch được chuỗi hướng dẫn cơ bản", "Viết được các câu lệnh đơn giản"],
            "L8-L9": ["Lập kế hoạch và phát triển được chuỗi câu lệnh", "Hiểu được nguyên lý cơ bản của lập trình"],
            "L10-L11-L12": ["Phát triển được chương trình giải quyết vấn đề phức tạp", "Sửa lỗi và tối ưu hóa được mã lệnh"]
          }
        }
      ]
    },
    {
      "ma": "IV",
      "ten": "An toàn",
      "moTaTongQuat": "Bảo vệ các thiết bị, nội dung, dữ liệu cá nhân và quyền riêng tư trong môi trường số. Bảo vệ sức khỏe thể chất và tinh thần đồng thời nhận biết các công nghệ số cho tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội. Nhận thức về tác động môi trường của công nghệ số và việc sử dụng công nghệ số.",
      "nangLucThanhPhan": [
        {
          "ma": "4.1",
          "ten": "Bảo vệ thiết bị",
          "moTa": "Bảo vệ được các thiết bị và nội dung số cũng như hiểu rõ các rủi ro và mối đe dọa trong môi trường kỹ thuật số. Biết được các biện pháp an toàn và bảo mật cũng như có sự quan tâm đúng mức đến độ tin cậy và quyền riêng tư.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được các rủi ro cơ bản khi sử dụng thiết bị số", "Thực hiện được biện pháp bảo vệ đơn giản"],
            "L3-L4-L5": ["Nhận biết được rủi ro cơ bản", "Thực hiện được biện pháp bảo vệ đơn giản"],
            "L6-L7": ["Xác định được mối đe dọa phổ biến", "Áp dụng được biện pháp bảo mật cơ bản"],
            "L8-L9": ["Hiểu rõ rủi ro và mối đe dọa", "Thực hiện được biện pháp an toàn phù hợp"],
            "L10-L11-L12": ["Đánh giá được rủi ro và áp dụng biện pháp bảo vệ", "Hướng dẫn người khác bảo vệ thiết bị"]
          }
        },
        {
          "ma": "4.2",
          "ten": "Bảo vệ dữ liệu cá nhân và quyền riêng tư",
          "moTa": "Bảo vệ được dữ liệu cá nhân và quyền riêng tư trong môi trường số. Hiểu được cách sử dụng và chia sẻ thông tin định danh cá nhân một cách an toàn, có khả năng bảo vệ bản thân và người khác. Hiểu được cách các dịch vụ số sử dụng Chính sách Quyền riêng tư để thông báo phương thức sử dụng dữ liệu cá nhân.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được tầm quan trọng của bảo vệ thông tin cá nhân", "Xác định được thông tin không nên chia sẻ"],
            "L3-L4-L5": ["Nhận biết được tầm quan trọng của bảo vệ thông tin cá nhân"],
            "L6-L7": ["Hiểu được cách bảo vệ dữ liệu cá nhân", "Nhận biết được chính sách quyền riêng tư cơ bản"],
            "L8-L9": ["Bảo vệ được dữ liệu cá nhân và quyền riêng tư hiệu quả", "Hiểu được cách dịch vụ số sử dụng dữ liệu"],
            "L10-L11-L12": ["Quản lý được quyền riêng tư một cách chủ động", "Hướng dẫn người khác bảo vệ dữ liệu cá nhân"]
          }
        },
        {
          "ma": "4.3",
          "ten": "Bảo vệ sức khỏe và an sinh số",
          "moTa": "Tránh được rủi ro và đe dọa đến sức khỏe thể chất và tinh thần khi sử dụng công nghệ số. Bảo vệ được bản thân và người khác khỏi nguy cơ trong môi trường số (ví dụ: bắt nạt trên mạng). Nhận biết được những công nghệ số cho tăng cường thịnh vượng xã hội và sự hòa hợp trong xã hội.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được nguy cơ cơ bản khi sử dụng công nghệ số", "Xác định được hành vi bắt nạt trên mạng"],
            "L3-L4-L5": ["Nhận biết được nguy cơ cơ bản", "Xác định được hành vi bắt nạt trên mạng"],
            "L6-L7": ["Hiểu được rủi ro đến sức khỏe", "Thực hiện được biện pháp tự bảo vệ"],
            "L8-L9": ["Tránh được rủi ro đến sức khỏe thể chất và tinh thần", "Bảo vệ được bản thân và người khác"],
            "L10-L11-L12": ["Đánh giá và phòng tránh được rủi ro sức khỏe", "Nhận biết được công nghệ số tăng cường thịnh vượng xã hội"]
          }
        },
        {
          "ma": "4.4",
          "ten": "Bảo vệ môi trường",
          "moTa": "Nhận thức được tác động của công nghệ số và việc sử dụng công nghệ số đối với môi trường.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được rằng việc sử dụng công nghệ số có tác động đến môi trường"],
            "L3-L4-L5": ["Nhận biết được tác động của công nghệ số đến môi trường"],
            "L6-L7": ["Hiểu được một số tác động của công nghệ số đến môi trường", "Thực hiện được hành động đơn giản để giảm tác động"],
            "L8-L9": ["Nhận thức được tác động môi trường", "Đề xuất được giải pháp giảm thiểu"],
            "L10-L11-L12": ["Đánh giá được tác động môi trường", "Thực hành sử dụng công nghệ số bền vững"]
          }
        }
      ]
    },
    {
      "ma": "V",
      "ten": "Giải quyết vấn đề",
      "moTaTongQuat": "Nhận diện được nhu cầu và các vấn đề cũng như giải quyết các vấn đề và tình huống trong môi trường số. Sử dụng được các công cụ kỹ thuật số để đổi mới quy trình và sản phẩm. Cập nhật được sự tiến bộ của công nghệ số.",
      "nangLucThanhPhan": [
        {
          "ma": "5.1",
          "ten": "Giải quyết các vấn đề kỹ thuật",
          "moTa": "Xác định được các vấn đề kỹ thuật khi vận hành thiết bị, sử dụng môi trường số và giải quyết chúng (từ xử lý sự cố đến giải quyết các vấn đề phức tạp hơn).",
          "chiSoTheoLop": {
            "L1-L2": ["Xác định được vấn đề kỹ thuật đơn giản khi sử dụng thiết bị số", "Tìm được cách giải quyết đơn giản với sự hướng dẫn"],
            "L3-L4-L5": ["Xác định được vấn đề kỹ thuật đơn giản"],
            "L6-L7": ["Xác định và phân loại được vấn đề kỹ thuật thường gặp", "Giải quyết được vấn đề kỹ thuật cơ bản"],
            "L8-L9": ["Phân tích được nguyên nhân của vấn đề kỹ thuật", "Giải quyết được vấn đề phức tạp hơn"],
            "L10-L11-L12": ["Xác định và giải quyết được nhiều loại vấn đề kỹ thuật", "Hỗ trợ người khác giải quyết vấn đề kỹ thuật"]
          }
        },
        {
          "ma": "5.2",
          "ten": "Xác định nhu cầu và giải pháp công nghệ",
          "moTa": "Đánh giá được nhu cầu và xác định, đánh giá, lựa chọn, sử dụng các công cụ số cùng với các giải pháp công nghệ khả thi để giải quyết chúng. Điều chỉnh và tùy chỉnh được môi trường số theo nhu cầu cá nhân (ví dụ: khả năng tiếp cận).",
          "chiSoTheoLop": {
            "L1-L2": ["Xác định được nhu cầu sử dụng công nghệ số đơn giản", "Lựa chọn được công cụ số cơ bản phù hợp"],
            "L3-L4-L5": ["Xác định được nhu cầu sử dụng công nghệ số đơn giản"],
            "L6-L7": ["Đánh giá được nhu cầu công nghệ số", "Lựa chọn và sử dụng được công cụ số phù hợp"],
            "L8-L9": ["Đánh giá và lựa chọn được giải pháp công nghệ phù hợp", "Điều chỉnh được môi trường số theo nhu cầu cá nhân"],
            "L10-L11-L12": ["Đánh giá toàn diện và đề xuất giải pháp tối ưu", "Hướng dẫn người khác lựa chọn giải pháp"]
          }
        },
        {
          "ma": "5.3",
          "ten": "Sử dụng sáng tạo công nghệ số",
          "moTa": "Sử dụng được các công cụ và công nghệ số để tạo ra kiến thức, đổi mới quy trình và sản phẩm. Gắn kết cá nhân và tập thể vào quá trình xử lý nhận thức để hiểu và giải quyết các vấn đề mang tính khái niệm và các tình huống có vấn đề trong môi trường số.",
          "chiSoTheoLop": {
            "L1-L2": ["Sử dụng được công nghệ số để thực hiện nhiệm vụ đơn giản", "Nhận biết được cách công nghệ số hỗ trợ giải quyết vấn đề"],
            "L3-L4-L5": ["Sử dụng được công nghệ số để thực hiện nhiệm vụ đơn giản"],
            "L6-L7": ["Sử dụng được công nghệ số để tạo ra sản phẩm mới", "Giải quyết được vấn đề cơ bản trong môi trường số"],
            "L8-L9": ["Sử dụng sáng tạo công nghệ số để đổi mới quy trình", "Giải quyết được tình huống có vấn đề"],
            "L10-L11-L12": ["Sử dụng công nghệ số để tạo kiến thức và đổi mới sản phẩm", "Hỗ trợ người khác giải quyết vấn đề sáng tạo"]
          }
        },
        {
          "ma": "5.4",
          "ten": "Xác định các vấn đề cần cải thiện về năng lực số",
          "moTa": "Hiểu được năng lực số của chính mình cần được cải thiện hoặc cập nhật ở đâu. Có thể hỗ trợ người khác phát triển năng lực số của họ. Tìm kiếm được cơ hội phát triển bản thân và cập nhật sự phát triển công nghệ số.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được những kỹ năng số mà mình cần học", "Tìm kiếm được sự hỗ trợ khi cần"],
            "L3-L4-L5": ["Nhận biết được những kỹ năng số cần học"],
            "L6-L7": ["Xác định được những năng lực số cần cải thiện", "Tìm kiếm được cơ hội học tập"],
            "L8-L9": ["Đánh giá được năng lực số của bản thân", "Lập kế hoạch cải thiện năng lực số"],
            "L10-L11-L12": ["Đánh giá toàn diện và cập nhật năng lực số", "Hỗ trợ người khác phát triển năng lực số"]
          }
        }
      ]
    },
    {
      "ma": "VI",
      "ten": "Ứng dụng trí tuệ nhân tạo",
      "moTaTongQuat": "Ứng dụng AI trong học tập, làm việc và cuộc sống một cách có đạo đức và trách nhiệm.",
      "nangLucThanhPhan": [
        {
          "ma": "6.1",
          "ten": "Hiểu biết về AI (trong đó có Gen AI)",
          "moTa": "Hiểu được cách AI ảnh hưởng đến cuộc sống hằng ngày và vai trò của AI trong các lĩnh vực khác nhau. Nắm vững được nguyên tắc hoạt động của AI, khả năng và hạn chế của AI.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được AI trong cuộc sống hằng ngày", "Hiểu được rằng AI có thể thực hiện một số nhiệm vụ"],
            "L3-L4-L5": ["Nhận biết được AI trong cuộc sống hằng ngày"],
            "L6-L7": ["Hiểu được cách AI ảnh hưởng đến cuộc sống", "Nhận biết được khả năng và hạn chế cơ bản của AI"],
            "L8-L9": ["Hiểu được nguyên tắc hoạt động cơ bản của AI", "Nhận biết được vai trò của AI trong các lĩnh vực"],
            "L10-L11-L12": ["Nắm vững nguyên tắc hoạt động của AI", "Đánh giá được khả năng và hạn chế của AI", "Hiểu được AI tạo sinh (Gen AI)"]
          }
        },
        {
          "ma": "6.2",
          "ten": "Sử dụng AI có đạo đức và trách nhiệm",
          "moTa": "Sử dụng hiệu quả các hệ thống AI và hiểu rõ ứng dụng thực tế của chúng. Sử dụng được AI để tạo nội dung, khám phá kiến thức và giải quyết các vấn đề trong công việc, học tập và cuộc sống hàng ngày.",
          "chiSoTheoLop": {
            "L1-L2": ["Sử dụng được các ứng dụng AI đơn giản với sự hướng dẫn", "Hiểu được rằng cần sử dụng AI một cách có trách nhiệm"],
            "L3-L4-L5": ["Sử dụng được ứng dụng AI đơn giản"],
            "L6-L7": ["Sử dụng được AI để hỗ trợ học tập", "Thực hành sử dụng AI có đạo đức"],
            "L8-L9": ["Sử dụng hiệu quả AI để tạo nội dung và giải quyết vấn đề", "Áp dụng được nguyên tắc đạo đức khi sử dụng AI"],
            "L10-L11-L12": ["Sử dụng thành thạo AI cho nhiều mục đích", "Đánh giá và sử dụng AI có trách nhiệm", "Hướng dẫn người khác sử dụng AI có đạo đức"]
          }
        },
        {
          "ma": "6.3",
          "ten": "Đánh giá các công cụ AI",
          "moTa": "Đánh giá và lọc thông tin từ các nguồn được tạo ra hoặc xử lý bằng AI, để hiểu rõ hơn về tính đáng tin cậy và cách sử dụng thông tin đó. Đánh giá AI trên các khía cạnh minh bạch, an toàn, đạo đức và tác động.",
          "chiSoTheoLop": {
            "L1-L2": ["Nhận biết được rằng thông tin từ AI có thể không chính xác", "Kiểm tra lại thông tin từ AI với sự hướng dẫn"],
            "L3-L4-L5": ["Nhận biết được rằng thông tin từ AI có thể không chính xác"],
            "L6-L7": ["Đánh giá được độ tin cậy cơ bản của thông tin từ AI", "Nhận biết được một số rủi ro khi sử dụng AI"],
            "L8-L9": ["Đánh giá và lọc được thông tin từ AI", "Hiểu được các khía cạnh đạo đức và an toàn của AI"],
            "L10-L11-L12": ["Đánh giá toàn diện các công cụ AI", "Phân tích được tính minh bạch, an toàn và tác động của AI"]
          }
        }
      ]
    }
  ]
};