const questions = [
    {
        question: "Nguyên nhân phổ biến nhất gây cháy tại nhà là gì?",
        answers: [
            { text: "Chập điện", correct: true },
            { text: "Rò rỉ khí gas", correct: false },
            { text: "Bếp nấu không an toàn", correct: false },
            { text: "Tất cả các đáp án trên", correct: false }
        ]
    },
    {
        question: "Khi phát hiện cháy nhỏ, bạn nên dùng gì để dập lửa?",
        answers: [
            { text: "Nước", correct: false },
            { text: "Bình chữa cháy", correct: true },
            { text: "Cát hoặc chăn ướt", correct: false },
            { text: "Quạt gió", correct: false }
        ]
    },
    {
        question: "Số điện thoại khẩn cấp của lực lượng Cảnh sát PCCC là số nào?",
        answers: [
            { text: "113", correct: false },
            { text: "114", correct: true },
            { text: "115", correct: false },
            { text: "119", correct: false }
        ]
    },
    {
        question: "Tại sao không nên dùng nước để chữa cháy điện?",
        answers: [
            { text: "Nước làm cháy to hơn", correct: false },
            { text: "Nước dẫn điện gây nguy hiểm", correct: true },
            { text: "Nước làm hỏng thiết bị điện", correct: false },
            { text: "Nước không có tác dụng với cháy điện", correct: false }
        ]
    },
    {
        question: "Khi có cháy, nên di chuyển bằng cách nào?",
        answers: [
            { text: "Chạy nhanh", correct: false },
            { text: "Đi khom hoặc bò sát mặt đất", correct: true },
            { text: "Sử dụng thang máy", correct: false },
            { text: "Trốn vào phòng kín", correct: false }
        ]
    },
    {
        question: "Đâu là vị trí lắp đặt bình chữa cháy phù hợp tại cơ quan?",
        answers: [
            { text: "Gần cửa ra vào", correct: true },
            { text: "Trong phòng làm việc riêng", correct: false },
            { text: "Góc khuất của hành lang", correct: false },
            { text: "Trong nhà vệ sinh", correct: false }
        ]
    },
    {
        question: "Hệ thống báo cháy tự động có chức năng gì?",
        answers: [
            { text: "Tự động dập tắt đám cháy", correct: false },
            { text: "Phát hiện và cảnh báo cháy sớm", correct: true },
            { text: "Thông báo số điện thoại cứu hỏa", correct: false },
            { text: "Mở cửa thoát hiểm", correct: false }
        ]
    },
    {
        question: "Khi nghe chuông báo cháy, việc đầu tiên cần làm là gì?",
        answers: [
            { text: "Tiếp tục làm việc", correct: false },
            { text: "Tìm nguồn gốc chuông báo", correct: false },
            { text: "Nhanh chóng di chuyển theo lối thoát hiểm", correct: true },
            { text: "Gọi điện thoại cho người thân", correct: false }
        ]
    },
    {
        question: "Tại sao cần có sơ đồ thoát hiểm tại cơ quan, trường học?",
        answers: [
            { text: "Để trang trí", correct: false },
            { text: "Để nhân viên biết đường đi hàng ngày", correct: false },
            { text: "Để hướng dẫn mọi người thoát hiểm nhanh chóng khi có sự cố", correct: true },
            { text: "Để quản lý số lượng người trong tòa nhà", correct: false }
        ]
    },
    {
        question: "Vật liệu nào sau đây dễ gây cháy?",
        answers: [
            { text: "Gạch, đá", correct: false },
            { text: "Kim loại", correct: false },
            { text: "Giấy, vải, xăng dầu", correct: true },
            { text: "Bê tông", correct: false }
        ]
    },
    {
        question: "Ở trường học, ai là người chịu trách nhiệm hướng dẫn PCCC?",
        answers: [
            { text: "Học sinh", correct: false },
            { text: "Bảo vệ", correct: false },
            { text: "Giáo viên và cán bộ nhà trường", correct: true },
            { text: "Phụ huynh", correct: false }
        ]
    },
    {
        question: "Các buổi diễn tập PCCC ở trường có quan trọng không?",
        answers: [
            { text: "Không quan trọng, mất thời gian", correct: false },
            { text: "Chỉ quan trọng với giáo viên", correct: false },
            { text: "Rất quan trọng, giúp học sinh biết cách ứng phó khi có cháy", correct: true },
            { text: "Chỉ quan trọng với các trường có nguy cơ cháy cao", correct: false }
        ]
    },
    {
        question: "Khi có cháy ở phòng thí nghiệm, điều gì cần ưu tiên?",
        answers: [
            { text: "Dập lửa bằng mọi giá", correct: false },
            { text: "Báo động và sơ tán học sinh", correct: true },
            { text: "Cứu các thiết bị đắt tiền", correct: false },
            { text: "Đóng cửa phòng thí nghiệm", correct: false }
        ]
    },
    {
        question: "Tại sao cần kiểm tra thường xuyên các thiết bị điện ở trường?",
        answers: [
            { text: "Để tiết kiệm điện", correct: false },
            { text: "Để đảm bảo an toàn PCCC", correct: true },
            { text: "Để tăng tuổi thọ thiết bị", correct: false },
            { text: "Để trường trông chuyên nghiệp hơn", correct: false }
        ]
    },
    {
        question: "Hành động nào sau đây là sai khi có cháy ở trường?",
        answers: [
            { text: "Báo động cho mọi người", correct: false },
            { text: "Sử dụng bình chữa cháy nếu có thể", correct: false },
            { text: "Chạy ngược dòng người để tìm bạn", correct: true },
            { text: "Di chuyển đến điểm tập trung đã quy định", correct: false }
        ]
    },
    {
        question: "Tại khu dân cư, ai có trách nhiệm tuyên truyền PCCC?",
        answers: [
            { text: "Chỉ có lực lượng PCCC chuyên nghiệp", correct: false },
            { text: "Tổ dân phố, ban quản lý và mọi người dân", correct: true },
            { text: "Chỉ có người lớn tuổi", correct: false },
            { text: "Chỉ có trẻ em", correct: false }
        ]
    },
    {
        question: "Điều gì cần chú ý khi sử dụng điện trong khu dân cư?",
        answers: [
            { text: "Sử dụng nhiều thiết bị điện cùng lúc", correct: false },
            { text: "Không kiểm tra dây dẫn điện thường xuyên", correct: false },
            { text: "Không để vật liệu dễ cháy gần ổ cắm, cầu dao", correct: true },
            { text: "Tự ý sửa chữa điện khi không có chuyên môn", correct: false }
        ]
    },
    {
        question: "Tại sao cần có lối thoát hiểm chung ở khu dân cư (chung cư)?",
        answers: [
            { text: "Để đi lại cho tiện", correct: false },
            { text: "Để phơi quần áo", correct: false },
            { text: "Để mọi người thoát hiểm nhanh chóng khi có cháy", correct: true },
            { text: "Để trẻ em chơi đùa", correct: false }
        ]
    },
    {
        question: "Khi đun nấu bằng gas, cần chú ý điều gì?",
        answers: [
            { text: "Không cần khóa van gas khi không sử dụng", correct: false },
            { text: "Để bình gas gần bếp", correct: false },
            { text: "Kiểm tra thường xuyên đường ống dẫn gas", correct: true },
            { text: "Sử dụng bếp và bình gas cũ, rỉ sét", correct: false }
        ]
    },
    {
        question: "Nếu xảy ra cháy ở tầng dưới của chung cư, bạn nên làm gì?",
        answers: [
            { text: "Sử dụng thang máy để xuống", correct: false },
            { text: "Ở yên trong nhà chờ cứu hỏa", correct: false },
            { text: "Di chuyển xuống bằng cầu thang bộ", correct: true },
            { text: "Nhảy xuống từ ban công", correct: false }
        ]
    },
    {
        question: "Đâu là biện pháp phòng cháy chữa cháy cơ bản?",
        answers: [
            { text: "Ngăn chặn nguồn gây cháy", correct: false },
            { text: "Hạn chế chất cháy", correct: false },
            { text: "Tổ chức thoát nạn an toàn", correct: false },
            { text: "Cả 3 đáp án trên", correct: true }
        ]
    },
    {
        question: "Khi phát hiện người bị bỏng do cháy, việc đầu tiên cần làm là gì?",
        answers: [
            { text: "Cởi quần áo bị dính vào vết bỏng", correct: false },
            { text: "Ngâm vết bỏng vào nước lạnh sạch", correct: true },
            { text: "Bôi kem đánh răng hoặc thuốc mỡ", correct: false },
            { text: "Chườm đá trực tiếp lên vết bỏng", correct: false }
        ]
    },
    {
        question: "Loại bình chữa cháy nào phù hợp với đám cháy xăng dầu?",
        answers: [
            { text: "Bình nước", correct: false },
            { text: "Bình bột hoặc bình CO2", correct: true },
            { text: "Bình bọt", correct: false },
            { text: "Cả B và C", correct: false }
        ]
    },
    {
        question: "Tại sao cần kiểm tra hạn sử dụng của bình chữa cháy?",
        answers: [
            { text: "Để bình trông mới hơn", correct: false },
            { text: "Để đảm bảo bình còn hoạt động tốt", correct: true },
            { text: "Để đổi bình mới miễn phí", correct: false },
            { text: "Không cần kiểm tra hạn sử dụng", correct: false }
        ]
    },
    {
        question: "Khi có cháy lớn, điều quan trọng nhất là gì?",
        answers: [
            { text: "Dập tắt đám cháy bằng mọi giá", correct: false },
            { text: "Bảo vệ tài sản", correct: false },
            { text: "Thoát hiểm và gọi cứu hỏa", correct: true },
            { text: "Tìm nguyên nhân gây cháy", correct: false }
        ]
    },
    {
        question: "Ở đâu cần trang bị hệ thống chống sét?",
        answers: [
            { text: "Nhà ở nông thôn", correct: false },
            { text: "Nhà cao tầng", correct: false },
            { text: "Kho chứa vật liệu dễ cháy nổ", correct: false },
            { text: "Tất cả các đáp án trên", correct: true }
        ]
    },
    {
        question: "Khi sử dụng bếp gas, cần tránh điều gì?",
        answers: [
            { text: "Để các vật liệu dễ cháy gần bếp", correct: false },
            { text: "Sử dụng bếp và bình gas không rõ nguồn gốc", correct: false },
            { text: "Rời khỏi bếp khi đang đun nấu", correct: false },
            { text: "Tất cả các đáp án trên", correct: true }
        ]
    },
    {
        question: "Tại sao cần thường xuyên vệ sinh hệ thống thông gió?",
        answers: [
            { text: "Để tiết kiệm năng lượng", correct: false },
            { text: "Để đảm bảo không khí trong lành", correct: false },
            { text: "Để tránh bụi bẩn bám vào thiết bị", correct: false },
            { text: "Cả B và C", correct: true }
        ]
    },
    {
        question: "Khi phát hiện mùi khét, bạn nên làm gì?",
        answers: [
            { text: "Bỏ qua vì nghĩ không sao", correct: false },
            { text: "Tìm kiếm nguồn gốc mùi khét ngay lập tức", correct: false },
            { text: "Mở cửa sổ cho thoáng khí", correct: false },
            { text: "Cả B và C", correct: true }
        ]
    },
    {
        question: "Đâu là hành động đúng để phòng cháy nổ?",
        answers: [
            { text: "Tắt các thiết bị điện khi không sử dụng", correct: false },
            { text: "Không để các chất dễ cháy gần nguồn nhiệt", correct: false },
            { text: "Kiểm tra và bảo dưỡng định kỳ các thiết bị điện, gas", correct: false },
            { text: "Tất cả các đáp án trên", correct: true }
        ]
    },
    {
        question: "Nguyên nhân phổ biến nhất gây ra cháy tại khu dân cư là gì?",
        answers: [
            { text: "Sử dụng điện không an toàn", correct: true },
            { text: "Nấu ăn bất cẩn", correct: false },
            { text: "Sự cố hóa chất", correct: false },
            { text: "Thiên tai", correct: false }
        ]
    },
    {
        question: "Khi phát hiện cháy, việc đầu tiên cần làm là gì?",
        answers: [
            { text: "Tìm cách dập lửa một mình", correct: false },
            { text: "Báo động và gọi cứu hỏa (114)", correct: true },
            { text: "Thu dọn tài sản có giá trị", correct: false },
            { text: "Mở hết cửa để khói thoát ra", correct: false }
        ]
    },
    {
        question: "Loại bình chữa cháy nào thường được trang bị cho các đám cháy chất rắn (gỗ, giấy, vải...)?",
        answers: [
            { text: "Bình bột ABC", correct: false },
            { text: "Bình khí CO2", correct: true },
            { text: "Bình bọt Foam", correct: false },
            { text: "Bình nước", correct: false }
        ]
    },
    {
        question: "Loại bình chữa cháy nào phù hợp cho đám cháy thiết bị điện?",
        answers: [
            { text: "Bình bột ABC", correct: false },
            { text: "Bình khí CO2", correct: true },
            { text: "Bình bọt Foam", correct: false },
            { text: "Bình nước", correct: false }
        ]
    },
    {
        question: "Khi bị kẹt trong đám cháy có nhiều khói, bạn nên di chuyển như thế nào?",
        answers: [
            { text: "Đứng thẳng và chạy nhanh", correct: false },
            { text: "Cúi thấp người hoặc bò sát mặt đất", correct: true },
            { text: "Trườn người", correct: false },
            { text: "Đi bằng đầu gối", correct: false }
        ]
    },
    {
        question: "Để tránh ngạt khói khi thoát hiểm, bạn nên dùng vật gì che miệng và mũi?",
        answers: [
            { text: "Áo khô", correct: false },
            { text: "Khăn giấy", correct: false },
            { text: "Khăn ẩm", correct: true },
            { text: "Găng tay", correct: false }
        ]
    },
    {
        question: "Bạn có nên sử dụng thang máy khi có cháy xảy ra?",
        answers: [
            { text: "Có, để thoát nhanh hơn", correct: false },
            { text: "Không, vì có thể bị kẹt", correct: true },
            { text: "Tùy vào tình huống", correct: false },
            { text: "Chỉ khi không có khói", correct: false }
        ]
    },
    {
        question: "Bạn hãy cho biết có mấy cách nhận biết đám cháy qua các dấu hiệu ban đầu?",
        answers: [
            { text: "Khói, mùi.", correct: false },
            { text: "Ánh lửa, khói.", correct: false },
            { text: "Khói, ánh lửa – tiếng nổ – mùi sản phẩm cháy.", correct: true },
            { text: "Giống mùi nấu thức ăn.", correct: false }
        ]
    },
    {
        question: "Bạn nhìn thấy một đám cháy nhỏ, và bạn có một bình chữa cháy thích hợp. Bạn nên làm gì?",
        answers: [
            { text: "Sử dụng bình chữa cháy và thoát ra ngoài nếu nó không thể dập tắt lửa ngay lập tức.", correct: true },
            { text: "Yêu cầu người khác ở lại trong khi bạn cố gắng dập tắt đám cháy.", correct: false },
            { text: "Đổ nước vào đám cháy trước. Sau đó dùng bình chữa cháy xịt vào ngọn lửa. Kế tiếp, ngọn lửa sẽ dịu đi.", correct: false },
            { text: "Thoát ra ngoài.", correct: false }
        ]
    },
    {
        question: "Bạn nên làm gì nếu phát hiện khói trong tòa nhà?",
        answers: [
            { text: "Chạy lên mái nhà", correct: false },
            { text: "Dùng khăn ướt che miệng và mũi.", correct: true },
            { text: "Đợi cứu hỏa đến.", correct: false },
            { text: "Mở hết các cửa sổ để thông gió.", correct: false }
        ]
    },
    {
        question: "Khi ở trong tòa nhà cao tầng, bạn nên làm gì để chuẩn bị cho tình huống hỏa hoạn?",
        answers: [
            { text: "Chỉ sử dụng cầu thang máy", correct: false },
            { text: "Biết rõ các lối thoát hiểm và cầu thang bộ", correct: true },
            { text: "Giữ cửa phòng luôn đóng", correct: false },
            { text: "Trang bị đèn pin trong phòng ngủ", correct: false }
        ]
    },
    {
        question: "Khi nhà bạn có trẻ nhỏ, bạn nên dạy trẻ những gì về phòng cháy chữa cháy?",
        answers: [
            { text: "Nhận biết các dấu hiệu của hỏa hoạn.", correct: false },
            { text: "Cách gọi cứu hỏa và báo cho người lớn.", correct: false },
            { text: "Cách thoát hiểm an toàn khỏi đám cháy.", correct: false },
            { text: "Tất cả các đáp án trên.", correct: true }
        ]
    },
    {
        question: "Khi sử dụng bình chữa cháy, bạn cần lưu ý điều gì?",
        answers: [
            { text: "Hướng vòi phun vào gốc lửa.", correct: false },
            { text: "Giữ bình ở khoảng cách an toàn với đám cháy.", correct: false },
            { text: "Không phun liên tục, nên phun thành từng đợt ngắn.", correct: false },
            { text: "Tất cả các đáp án trên.", correct: true }
        ]
    },
    {
        question: "Trong trường hợp không thể thoát ra khỏi đám cháy, bạn nên làm gì?",
        answers: [
            { text: "Đóng kín cửa phòng, chèn kín các khe hở bằng khăn ướt..", correct: false },
            { text: "Gọi điện thoại báo cứu hộ và thông báo vị trí của bạn.", correct: false },
            { text: "Tìm cách ra tín hiệu cầu cứu như vẫy khăn sáng màu qua cửa sổ.", correct: false },
            { text: "Tất cả các đáp án trên.", correct: true }
        ]
    },
    {
        question: "Khi có hỏa hoạn, bạn có nên mở cửa sổ để thoát khói không?",
        answers: [
            { text: "Có, luôn mở cửa sổ để thoát khói.", correct: false },
            { text: "Chỉ mở cửa sổ khi chắc chắn không có lửa bên ngoài.", correct: true },
            { text: "Không nên mở cửa sổ vì có thể làm lửa lan rộng.", correct: false },
            { text: "Mở cửa sổ quan sát xung quanh.", correct: false }
        ]
    },
    {
        question: "Bạn đang ở trong phòng ngủ của mình và nghe thấy chuông báo động khói. Bạn nên làm gì?",
        answers: [
            { text: "Vô hiệu hóa chuông báo động khói. Nếu bạn không ngửi thấy khói hoặc nhìn thấy ngọn lửa nghĩa là mọi thứ đều ổn.", correct: false },
            { text: "Dùng mu bàn tay để mở cánh cửa đang đóng. Mở nó từ từ và đi ra ngoài.", correct: true },
            { text: "Chạy ra ngoài ngay.", correct: false },
            { text: "Đứng im và hô to.", correct: false }
        ]
    },
    {
        question: "Cách tránh ngộ độc khí trong đám cháy?",
        answers: [
            { text: "Phải ngay lập tức mở tất cả các cửa ở hướng không có cháy để giảm áp suất.", correct: false },
            { text: "Không được mở cửa ở hướng có cháy và khói xông vào phòng.", correct: false },
            { text: "Các phương pháp phòng khói khẩn cấp như khăn ướt luôn có tác dụng tốt vì vậy bạn nên luôn để 1 chai nước trong phòng.", correct: false },
            { text: "Tất cả các đáp án trên.", correct: true }
        ]
    },
    {
        question: "Luật PCCC được Quốc hội khóa X nước CHXHCN Việt Nam thông qua vào ngày tháng năm nào ?",
        answers: [
            { text: "Ngày 29/6/2001.", correct: true },
            { text: "Ngày 30/6/2001.", correct: false },
            { text: "Ngày 29/6/2002.", correct: false },
            { text: "Ngày 30/6/2002.", correct: false }
        ]
    },
    {
        question: "Luật PCCC giải thích Đội PCCC cơ sở như thế nào ?",
        answers: [
            { text: "Gồm những người tham gia hoạt động sản xuất tại cơ sở.", correct: false },
            { text: "Là tổ chức gồm những người tham gia hoạt động PCCC tại cơ sở.", correct: true },
            { text: "Gồm những người tham gia chỉ đạo công tác PCCC tại cơ sở.", correct: false },
            { text: "Là tổ chức gồm những người quản đốc, tổ trưởng sản xuất, dân phòng tại cơ quan, xí nghiệp.", correct: false }
        ]
    },
    {
        question: "Luật PCCC quy định những đối tượng nào phải thực hiện Bảo hiểm cháy, nổ bắt buộc đối với tài sản của mình?",
        answers: [
            { text: "Tất cả các cơ sở sản xuất, kinh doanh", correct: false },
            { text: "Tổ chức và cá nhân có cơ sở có nguy hiểm về cháy nổ", correct: false },
            { text: "Cơ quan, tổ chức và cá nhân có cơ sở có nguy hiểm về cháy nổ", correct: true },
            { text: "Cơ quan, xí nghiệp có nguy hiểm về cháy nổ", correct: false }
        ]
    },
    {
        question: "Trách nhiệm tuyên truyền, phổ biến, giáo dục về PCCC được quy định trong điều nào của Luật PCCC?",
        answers: [
            { text: "Điều 6", correct: true },
            { text: "Điều 7", correct: false },
            { text: "Điều 8", correct: false },
            { text: "Điều 9", correct: false }
        ]
    },
    {
        question: "Việc “ưu tiên và đảm bảo quyền ưu tiên cho người và phương tiện tham gia chữa cháy” được quy định tại điều mấy của Luật PCCC:",
        answers: [
            { text: "Điều 36", correct: true },
            { text: "Điều 37", correct: false },
            { text: "Điều 38", correct: false },
            { text: "Điều 39", correct: false }
        ]
    },
    {
        question: "Trong lĩnh vực xây dựng, Luật PCCC quy định hành vi nào bị nghiêm cấm ?",
        answers: [
            { text: "Thi công những công trình có nguy hiểm về cháy nổ mà không có thiết kế về PCCC", correct: false },
            { text: "Thi công những công trình có nguy hiểm về cháy nổ mà chưa có thiết kế được duyệt về PCCC", correct: true },
            { text: "Thi công những công trình có nguy hiểm về cháy nổ gần các nhà và công trình công cộng", correct: false },
            { text: "Thi công những công trình có nguy hiểm về cháy nổ mà không có trang bị phương tiện PCCC", correct: false }
        ]
    },
    {
        question: "Theo quy định của Luật PCCC hằng năm ngày nào sau đây là “Ngày toàn dân phòng cháy và chữa cháy”?",
        answers: [
            { text: "Ngày 2/9", correct: false },
            { text: "Ngày 19/8", correct: false },
            { text: "Ngày 04/10", correct: true },
            { text: "Ngày 05/10", correct: false }
        ]
    },
    {
        question: "“Trách nhiệm chữa cháy và tham gia chữa cháy” được quy định tại điều mấy trong Luật PCCC:",
        answers: [
            { text: "Điều 31", correct: false },
            { text: "Điều 32", correct: false },
            { text: "Điều 33", correct: true },
            { text: "Điều 34", correct: false }
        ]
    },
    {
        question: "Luật PCCC quy định trong hoạt động PCCC nhiệm vụ nào là chính?",
        answers: [
            { text: "Trong hoạt động PCCC lấy phòng ngừa làm chính", correct: true },
            { text: "Trong hoạt động PCCC lấy phương châm 4 tại chỗ làm chính", correct: false },
            { text: "Trong hoạt động PCCC lấy chữa cháy làm chính", correct: false },
            { text: "Trong hoạt động PCCC lấy tuyên truyền là chính.", correct: false }
        ]
    },
    {
        question: "Đối tượng áp dụng của Luật phòng cháy và chữa cháy được qui định tại Điều 2 như thế nào.",
        answers: [
            { text: "Tất cả các cơ quan, tổ chức, hộ gia đình và cá nhân hoạt động sinh sống trên lãnh thổ Việt Nam", correct: true },
            { text: "Tất cả các cơ quan, tổ chức, hộ gia đình và cá nhân hoạt động sinh sống trong và ngoài nước", correct: false },
            { text: "Tất cả các cơ quan, tổ chức và hộ gia đình trên lãnh thổ Việt Nam", correct: false },
            { text: "Tất cả các cơ sở hoạt động, sản xuất, kinh doanh và cá nhân sinh sống trên lãnh thổ Việt Nam", correct: false }
        ]
    },
    {
        question: "Luật PCCC giải thích “Chữa cháy” như thế nào?",
        answers: [
            { text: "Gồm các công việc huy động triển khai lực lượng, phương tiện chữa cháy, cắt điện, tổ chức thoát nạn, cứu người, cứu tài sản, chống cháy lan, dập tắt đám cháy và các hoạt động khác liên quan đến chữa cháy.", correct: true },
            { text: "Gồm các công việc tổ chức thoát nạn, cứu người, cứu tài sản, huy động triển khai lực lượng, phương tiện chữa cháy dập tắt đám cháy.", correct: false },
            { text: "Gồm các công việc huy động triển khai lực lượng, phương tiện chữa cháy, cắt điện, chống cháy lan, cứu người, cứu tài sản.", correct: false },
            { text: "Câu B và C đúng.", correct: false }
        ]
    },
    {
        question: "Luật PCCC quy định ai là người chịu trách nhiệm tổ chức thực hiện khắc phục hậu quả vụ cháy ?",
        answers: [
            { text: "Chỉ huy lực lượng cảnh sát PCCC phối hợp với người đứng đầu cơ sở bị cháy", correct: false },
            { text: "Chủ tịch UBND cấp xã trở lên, người đứng đầu cơ quan, tổ chức có cơ sở bị cháy", correct: true },
            { text: "Công an phường nơi có cơ sở bị cháy", correct: false },
            { text: "Tất cả đều đúng", correct: false }
        ]
    },
    {
        question: "Tại khoản 4 điều 22 của Luật PCCC quy định: Các hoạt động sản xuất, kinh doanh, dịch vụ về hàng hoá, vật tư nguy hiểm về cháy, nổ cần có điều kiện an toàn PCCC gì ?",
        answers: [
            { text: "Phải in các thông số kỹ thuật, bản hướng dẫn an toàn về PCCC, phải trang bị phương tiện chữa cháy", correct: false },
            { text: "Phải in các thông số kỹ thuật trên nhãn hàng hóa, bản hướng dẫn an toàn về PCCC bằng tiếng việt, phải có chứng nhận đủ điều kiện về phòng cháy và chữa cháy", correct: true },
            { text: "Phải in thông số kỹ thuật, bảng hướng dẫn an toàn về PCCC bằng tiếng việt", correct: false },
            { text: "Cả A và B đúng", correct: false }
        ]
    },
    {
        question: "Nội dung của Luật PCCC gồm bao nhiêu Chương, Điều?",
        answers: [
            { text: "9 chương, 60 Điều", correct: false },
            { text: "9 chương, 65 Điều", correct: true },
            { text: "9 chương, 70 Điều", correct: false },
            { text: "9 chương, 75 Điều", correct: false }
        ]
    },
    {
        question: "Luật PC&CC giải thích từ cơ sở như thế nào ?",
        answers: [
            { text: "Là nhà máy, xí nghiệp, kho hàng, trụ sở làm việc, bệnh viện, trường học, rạp hát, khách sạn, chợ, trung tâm thương mại, doanh trại lực lượng vũ trang và các công trình khác", correct: true },
            { text: "Là nhà máy, xí nghiệp, kho hàng, trụ sở làm việc, bệnh viện, trường học, rạp hát, khách sạn, chợ, trung tâm thương mại và doanh trại lực lượng vũ trang có nguy cơ cháy nổ cao", correct: false },
            { text: "Là nhà máy, xí nghiệp, kho hàng, trụ sở làm việc, bệnh viện, trường học, rạp hát, khách sạn, chợ, trung tâm thương mại, doanh trại lực lượng vũ trang và các công trình khác có nguy cơ cháy, nổ cao.", correct: false },
            { text: "Là nhà máy, xí nghiệp, kho hàng, trụ sở làm việc, bênh viện, trường học, rạp hát, khách sạn, chợ, trung tâm thương mại, doanh trại lực lượng vũ trang.", correct: false }
        ]
    },
    {
        question: "Đ/c hãy cho biết thiết kế và thẩm duyệt thiết kế về phòng cháy và chữa cháy được quy định cụ thể tại Điều mấy của Luật phòng cháy và chữa cháy?",
        answers: [
            { text: "Điều 14", correct: false },
            { text: "Điều 15", correct: true },
            { text: "Điều 16", correct: false },
            { text: "Điều 17", correct: false }
        ]
    },
    {
        question: "Khoản 4, Điều 18 Luật PCCC quy định Chủ sở hữu, người chỉ huy, người điều khiển các phương tiện giao thông phải có trách nhiệm bảo đảm an toàn PCCC với phương tiện của mình như thế nào ?",
        answers: [
            { text: "Đảm bảo an toàn PCCC trong suốt quá trình hoạt động của xe", correct: true },
            { text: "Đảm bảo an toàn PCCC khi tham gia giao thông trên đường", correct: false },
            { text: "Đảm bảo an toàn PCCC khi tham gia giao thông trên đường, khi sửa chữa", correct: false },
            { text: "Đảm bảo an toàn PCCC khi tham gia giao thông trên đường, ở những nơi dễ cháy, nổ khi sửa chữa", correct: false }
        ]
    },
    {
        question: "Trong Luật phòng cháy và chữa cháy, khái niệm “ cháy ” được hiểu như thế nào?",
        answers: [
            { text: "Là một phản ứng hóa học có tỏa nhiệt và phát sáng.", correct: false },
            { text: "Là trường hợp xảy ra cháy ngoài ý muốn của con người có thể gây thiệt hại về tài sản và ảnh hưởng đến môi trường.", correct: false },
            { text: "Là trường hợp xảy ra cháy không kiểm soát được có thể gây thiệt hại về người, tài sản và ảnh hưởng môi trường", correct: true },
            { text: "Là trường hợp xảy ra cháy không kiểm soát được có thể gây thiệt hại về người và tài sản.", correct: false }
        ]
    },
    {
        question: "Luật PCCC quy định khi có cháy yêu cầu nào được ưu tiên sử dụng cho chữa cháy?",
        answers: [
            { text: "Mọi nguồn nước chữa cháy.", correct: false },
            { text: "Mọi nguồn nước và các vật liệu chữa cháy.", correct: true },
            { text: "Các vật liệu chữa cháy phải được ưu tiên sử dụng cho chữa cháy.", correct: false },
            { text: "Mọi nguồn nước và các vật dụng khác.", correct: false }
        ]
    },
    {
        question: "Nội dung sau đây, nội dung nào thuộc về một trong những nguyên tắc PCCC được quy định trong luật PCCC?",
        answers: [
            { text: "Cơ quan, tổ chức, hộ gia đình và cá nhân trong hoạt động có liên quan đến PCCC phải tuân thủ các tiêu chuẩn của Việt Nam về PCCC", correct: false },
            { text: "PCCC là lấy phòng ngừa là chính, đề cao trách nhiệm của toàn dân đối với hoạt động PCCC", correct: false },
            { text: "Huy động sức mạnh tổng hợp của toàn dân tham gia hoạt động PCCC", correct: true },
            { text: "PCCC là trách nhiệm của mỗi cơ quan ,tổ chức, hộ gia đình và cá nhân", correct: false }
        ]
    },
    {
        question: "Anh (chị) hãy cho biết trách nhiệm của cơ quan, tổ chức, cá nhân trong đầu tư xây dựng và sử dụng công trình quy định cụ thể tại Điều nào của Luật phòng cháy và chữa cháy?",
        answers: [
            { text: "Điều 16", correct: true },
            { text: "Điều 17", correct: false },
            { text: "Điều 18", correct: false },
            { text: "Tất cả đều sai", correct: false }
        ]
    },
    {
        question: "Việc “Huy động lực lượng và phương tiện để chữa cháy” được quy định tại điều mấy trong Luật PCCC:",
        answers: [
            { text: "Điều 33", correct: false },
            { text: "Điều 34", correct: true },
            { text: "Điều 35", correct: false },
            { text: "Điều 36", correct: false }
        ]
    },
    {
        question: "Theo qui định của Luật PCCC, nhiệm vụ của lực lượng dân phòng và lực lượng PCCC cơ sở gồm có 5 nhiệm vụ. Luật quy định nhiệm vụ thứ 5 như thế nào trong các phương án sau đây?",
        answers: [
            { text: "Xây dựng phương án, chuẩn bị lực lượng, phương tiện thực hiện nhiệm vụ chữa cháy khi có cháy xảy ra. Tham gia chữa cháy ở địa phương, cơ sở khác khi có yêu cầu", correct: true },
            { text: "Tổ chức huấn luyện, bồi dưỡng nghiệp vụ phòng cháy và chữa cháy", correct: false },
            { text: "Cả A và B đúng", correct: false },
            { text: "Cả A và B sai", correct: false }
        ]
    },
    {
        question: "Theo quy định của Luật PC&CC, các cơ sở phải thực hiện các yêu cầu gì về PCCC ?",
        answers: [
            { text: "Có phương án chữa cháy, có nội quy, quy định về an toàn PCCC; có hồ sơ theo dõi quản lý hoạt động PCCC; có biện pháp về phòng cháy; có hệ thống báo cháy, chữa cháy, ngăn cháy phù hợp với tính chất hoạt động của cơ sở; có lực lượng, phương tiện PCCC.", correct: true },
            { text: "Có phương án phòng cháy chữa cháy, có nội quy, quy định về an toàn PCCC.", correct: false },
            { text: "Có hệ thống báo cháy, chữa cháy, ngăn cháy; máy bơm chữa cháy", correct: false },
            { text: "Có trang bị xe chữa cháy hệ thống cấp nước chữa cháy vách tường, ngoài nhà và tiêu lệnh PCCC.", correct: false }
        ]
    },
    {
        question: "Trong Luật PCCC giải thích “Chất nguy hiểm về cháy, nổ” như thế nào?",
        answers: [
            { text: "Là chất lỏng, chất khí, máy móc hoặc vật tư, hàng hoá dễ xảy ra cháy nổ", correct: false },
            { text: "Là chất lỏng, chất khí, chất rắn, hoặc máy móc dễ xảy ra cháy, nổ", correct: false },
            { text: "Là chất lỏng, chất khí, chất rắn hoặc vật tư, hàng hoá dễ xảy ra cháy nổ", correct: true },
            { text: "Các chất có tính chất đặc biệt nguy hiểm về cháy nổ như xăng, dầu, khí đốt, hóa lỏng", correct: false }
        ]
    },
    {
        question: "Luật PC&CC giải thích Cơ sở có nguy hiểm về cháy nổ như thế nào?",
        answers: [
            { text: "Là cơ sở có một số lượng nhất định nguy hiểm về cháy, nổ, theo quy định của chính phủ", correct: true },
            { text: "Là cơ sở có chứa nhiều chất có nguy hiểm về cháy, nổ, có khả năng xảy ra cháy lớn.", correct: false },
            { text: "Là cơ sở chứa nhiều chất có nguy hiểm về cháy, nổ, và được sắp xếp, bảo quản không đảm bảo an toàn về PCCC.", correct: false },
            { text: "Là cơ sở có nhiều chất lỏng dễ cháy, nổ.", correct: false }
        ]
    },
    {
        question: "Khoản 1, Điều 18 Luật PCCC qui định đối với các phương tiện giao thông cơ giới nào cần đảm bảo các điều kiện theo qui định của cơ quan quản lý nhà nước về PCCC?",
        answers: [
            { text: "Phương tiện giao thông cơ giới từ 16 chỗ ngồi trở lên và các phuơng tiện giao thông cơ giới vận chuyển hàng hoá, chất nguy hiểm cháy nổ", correct: false },
            { text: "Phương tiện giao thông cơ giới từ 7 chỗ ngồi trở lên và cá phuơng tiện giao thông cơ giới vận chuyển hàng hoá, chất nguy hiểm cháy nổ", correct: false },
            { text: "Phương tiện giao thông cơ giới từ 8 bánh trở lên và các phuơng tiện giao thông cơ giới vận chuyển hàng hoá, chất nguy hiểm cháy nổ", correct: false },
            { text: "Phương tiện giao thông cơ giới từ 4 chỗ ngồi trở lên, các phương tiện giao thông cơ giới vận chuyển hàng hoá, chất nguy hiểm cháy", correct: true }
        ]
    },
    {
        question: "Luật PCCC qui định Trách nhiệm PCCC là của ai ?",
        answers: [
            { text: "Lực lượng cảnh sát PCCC, UBND các cấp, tổ chức và hộ gia đình", correct: false },
            { text: "Các cơ quan, tổ chức, hộ gia đình và cá nhân", correct: true },
            { text: "Ban điều hành tổ dân phố, bảo vệ cơ quan xí nghiệp, Đội PCCC cơ sở", correct: false },
            { text: "UBND các cấp, Chủ các doanh nghiệp, cơ quan, tổ chức và hộ gia đình", correct: false }
        ]
    },
    {
        question: "Luật PCCC quy định mọi hoạt động PCCC trước hết phải thực hiện bằng lực lượng và phương tiện như thế nào ?",
        answers: [
            { text: "Bằng lực lượng và phương tiện tại chỗ", correct: true },
            { text: "Bằng lực lượng và phương tiện của lực lượng Cảnh Sát PC&CC", correct: false },
            { text: "Bằng lực lượng và phương tiện của cơ sở", correct: false },
            { text: "Bằng lực lượng và phương tiện của lực lượng dân phòng.", correct: false }
        ]
    },
    {
        question: "Quy định “quyền và trách nhiệm của người chỉ huy chữa cháy” được quy định tại điều mấy của Luật PC&CC:",
        answers: [
            { text: "Điều 36", correct: false },
            { text: "Điều 37", correct: false },
            { text: "Điều 38", correct: true },
            { text: "Điều 39", correct: false }
        ]
    },
    {
        question: "Luật PCCC quy định về phòng cháy đối với trụ sở làm việc, kho lưu trữ quy định như thế nào?",
        answers: [
            { text: "Có phương án chữa cháy,có nội quy, quy định về an toàn PCCC có hồ sơ theo dõi hoạt động PCCC, có biện pháp về phòng cháy, có hệ thống báo cháy, chữa cháy, ngăn cháy phù hợp với tính chất hoạt động của cơ sở.", correct: false },
            { text: "Phải sắp xếp các thiết bị văn phòng, hồ sơ, tài liệu đảm bảo an toàn PCCC. Có biện pháp quản lý chặt chẽ chất cháy, nguồn lửa, nguồn nhiệt, thiết bị và dụng cụ sinh lửa, sinh nhiệt, chất sinh lửa, sinh nhiệt và các biện pháp đảm bảo an toàn phòng cháy chữa cháy khi rời nơi làm việc.", correct: true },
            { text: "Phải sắp xếp các thiết bị văn phòng, hồ sơ, tài liệu đảm bảo gọn gàng ngăn nắp và phải trang bị đầy đủ phương tiện PCCC theo quy định.", correct: false },
            { text: "Câu 3 câu A, B, C đều đúng.", correct: false }
        ]
    },
    {
        question: "Trong các cơ quan, đơn vị dưới đây, cơ quan, đơn vị nào có trách nhiệm trình duyệt dự án thiết kế về PCCC theo quy định của luật.",
        answers: [
            { text: "Cơ quan, đơn vị là chủ đầu tư", correct: true },
            { text: "Cơ quan, đơn vị chủ trì thẩm định", correct: false },
            { text: "Đơn vị thiết kế", correct: false },
            { text: "Đơn vị thi công", correct: false }
        ]
    },
    {
        question: "Luật PCCC quy định phòng cháy đối với nhà ở như thế nào ?",
        answers: [
            { text: "Trang bị phương tiện phòng cháy chữa cháy tại chỗ.", correct: false },
            { text: "Phải bố trí hệ thống điện, bếp đun nấu, nơi thờ cúng đảm bảo an toàn, gọn gàng, ngăn nắp.", correct: false },
            { text: "Phải bố trí hệ thống điện, bếp đun nấu, nơi thờ cúng đảm bảo an toàn; các chất cháy, chất nổ phải để xa nguồn lửa nguồn nhiệt; chuẩn bị các điều kiện, phương tiện để sẵn sàng chữa cháy.", correct: true },
            { text: "Các chất cháy, nổ phải để xa nguồn lửa, nguồn nhiệt.", correct: false }
        ]
    },
    {
        question: "Luật PCCC qui định một trong những biện pháp cơ bản đầu tiên trong công tác phòng cháy là gì?",
        answers: [
            { text: "Sử dụng an toàn các chất cháy, chất nổ, nguồn lửa nguồn nhiệt, thiết bị và dụng cụ sinh lửa, sinh nhiệt, chất sinh lửa, sinh nhiệt.", correct: false },
            { text: "Quản lý chặt chẽ về sử dụng an toàn các chất cháy, chất nổ, nguồn lửa nguồn nhiệt; đảm bảo các điều kiện an toàn trong sản xuất kinh doanh.", correct: false },
            { text: "Quản lý chặt chẽ và sử dụng an toàn các chất cháy, chất nổ, nguồn lửa nguồn nhiệt, thiết bị và dụng cụ sinh lửa, sinh nhiệt, chất sinh lửa, sinh nhiệt; đảm bảo các điều kiện an toàn về phòng cháy.", correct: true },
            { text: "Định kỳ tự tổ chức kiểm tra công tác an toàn PCCC.", correct: false }
        ]
    },
    {
        question: "Khi xảy ra cháy tại một cơ sở mà lực lượng cảnh sát PCCC chưa tới, theo quy định của Luật PCCC, khi có mặt những người sau đây ở đám cháy thì ai là người chỉ huy chữa cháy ?",
        answers: [
            { text: "Người đứng đầu cơ sở bị cháy.", correct: true },
            { text: "Đội trưởng đội chữa cháy cơ sở.", correct: false },
            { text: "Tổ trưởng tổ sản xuất.", correct: false },
            { text: "Tổ trưởng tổ bảo vệ", correct: false }
        ]
    },
    {
        question: "Các hành vi nào sau đây vi phạm quy định về việc quản lý, bảo quản và sử dụng chất nguy hiểm về cháy, nổ?",
        answers: [
            { text: "Sử dụng kho, thiết bị chứa chất nguy hiểm về cháy, nổ không đảm bảo các điều kiện về phòng cháy và chữa cháy theo quy định", correct: false },
            { text: "Sử dụng thiết bị, phương tiện chứa chất nguy hiểm về cháy, nổ chưa được kiểm định hoặc đã hết hạn sử dụng theo quy định. Bố trí, sắp xếp chất nguy hiểm về cháy, nổ không theo từng nhóm riêng theo quy định", correct: false },
            { text: "Câu A và B sai", correct: false },
            { text: "Câu A và B đúng", correct: true }
        ]
    },
    {
        question: "Điều kiện để tham gia Đội dân phòng và đội PCCC cơ sở khi có yêu cầu?",
        answers: [
            { text: "Công dân từ 16 tuổi, đủ sức khỏe", correct: false },
            { text: "Công dân từ 18 tuổi trở lên", correct: false },
            { text: "Công dân từ 18 tuổi trở lên, đủ sức khỏe", correct: true },
            { text: "Công dân từ 16 tuổi đến 50 tuổi, đủ sức khỏe", correct: false }
        ]
    },
    {
        question: "Trong các nội dung sau đây, nội dung nào là biện pháp cơ bản trong chữa cháy ?",
        answers: [
            { text: "Huy động nhanh nhất các lực lượng, phương tiện để dập tắt ngay đám cháy.", correct: false },
            { text: "Tập trung cứu người, cứu tài sản và chống cháy lan.", correct: false },
            { text: "Thống nhất chỉ huy, điều hành trong chữa cháy.", correct: false },
            { text: "Cả 3 câu đều đúng.", correct: true }
        ]
    },
    {
        question: "Điều nào của Luật PCCC quy định: người trực tiếp chữa cháy, người tham gia chữa cháy mà bị hy sinh, bị thương, bị tổn hại đối với sức khỏe, bị tổn thất về tài sản thì được hưởng chế độ, chính sách theo quy định của pháp luật?",
        answers: [
            { text: "Điều 8", correct: false },
            { text: "Điều 9", correct: false },
            { text: "Điều 10", correct: true },
            { text: "Điều 11", correct: false }
        ]
    },
    {
        question: "Theo Điều 13 của Luật PCCC, có bao nhiêu hành vi bị nghiêm cấm?",
        answers: [
            { text: "6 hành vi", correct: false },
            { text: "8 hành vi", correct: true },
            { text: "9 hành vi", correct: false },
            { text: "10 hành vi", correct: false }
        ]
    },
    {
        question: "Khi nhận được lệnh huy động tham gia cứu chữa đám cháy. Bạn sẽ thực hiện như thế nào?",
        answers: [
            { text: "Nhanh chóng tiếp cận đám cháy, để cứu người.", correct: false },
            { text: "Nhanh chóng tiếp cận đám cháy, sử dụng các dụng cụ tham gia chữa cháy.", correct: false },
            { text: "Nhanh chóng nhận lệnh, sử dụng các dụng cụ chữa cháy và thực hiện theo sự chỉ dẫn của lực lượng chữa cháy chuyên nghiệp.", correct: true },
            { text: "Nhanh chóng tiếp cận đám cháy và thực hiện theo chỉ dẫn của lực lượng chữa cháy cơ sở.", correct: false }
        ]
    },
    {
        question: "Lực lượng dân phòng và lực lượng PCCC cơ sở có được hưởng chế độ chính sách trong huấn luyện, bồi dưỡng nghiệp vụ và khi trực tiếp tham gia chữa cháy không ?",
        answers: [
            { text: "Chỉ được hưởng chế độ chính sách khi trực tiếp tham gia chữa cháy.", correct: false },
            { text: "Chỉ được hưởng chế độ chính sách khi trực tiếp tham gia chữa cháy và trong huấn luyện bồi dưỡng nghiệp vụ .", correct: false },
            { text: "Chỉ được hưởng chế độ chính sách trong huấn luyện bồi dưỡng nghiệp vụ và khi trực tiếp tham gia chữa cháy theo quy định của chính phủ.", correct: true },
            { text: "Cả 3 câu trên đều đúng.", correct: false }
        ]
    },
    {
        question: "Khi tham gia giao thông trên các phương tiện giao thông cơ giới, những người nào sau đây phải có trách nhiệm bảo đảm an toàn PCCC trong suốt quá trình hoạt động của phương tiện?",
        answers: [
            { text: "Chủ sở hữu, người điều khiển phương tiện.", correct: true },
            { text: "Hành khách đi trên phương tiện", correct: false },
            { text: "Thủ trưởng cơ quan có phương tiện", correct: false },
            { text: "Cả 3 câu đều đúng", correct: false }
        ]
    },
    {
        question: "Phòng cháy trong sản xuất, cung ứng, sử dụng điện và thiết bị, dụng cụ điện được qui định như thế nào?",
        answers: [
            { text: "Có biện pháp chủ động xử lý sự cố gây cháy. Khi thiết kế, thi công lắp đặt hệ thống điện phải đảm bảo tiêu chuẩn an toàn về PCCC.", correct: false },
            { text: "Thiết bị, dụng cụ điện được sử dụng trong môi trường nguy hiểm về cháy, nổ phải là loại thiết bị, dụng cụ an toàn về cháy, nổ. Cơ quan, tổ chức cá nhân cung ứng điện có trách nhiệm hướng dẫn biện pháp an toàn về PCCC cho người sử dụng điện.", correct: false },
            { text: "Cả 2 câu A + B đều đúng.", correct: true },
            { text: "Cả 2 câu A + B đều sai.", correct: false }
        ]
    },
    {
        question: "Lực lượng nòng cốt trong hoạt động PCCC của toàn dân là lực lượng nào sau đây?",
        answers: [
            { text: "Lực lượng dân phòng", correct: false },
            { text: "Lực lượng PCCC cơ sở", correct: false },
            { text: "Lực lượng Cảnh sát PCCC", correct: false },
            { text: "Tất cả các lực lượng trên", correct: true }
        ]
    },
    {
        question: "Đội dân phòng do ai thành lập, quản lý và chỉ đạo?",
        answers: [
            { text: "Trưởng Công an cấp xã", correct: false },
            { text: "Chủ tịch UBND cấp xã", correct: true },
            { text: "Trưởng Phòng Cảnh sát PCCC", correct: false },
            { text: "Chủ tịch Ủy ban nhân dân cấp huyện", correct: false }
        ]
    },
    {
        question: "Đội PCCC cơ sở do ai thành lập, quản lý và chỉ đạo?",
        answers: [
            { text: "Người đứng đầu cở sở", correct: false },
            { text: "Chủ tịch Ủy ban nhân dân cấp xã nơi cơ sở hoạt động", correct: false },
            { text: "Người đứng đầu cơ quan, tổ chức trực tiếp quản lý cơ sở", correct: true },
            { text: "Người đứng đầu sơ quan PCCC quản lý cơ sở", correct: false }
        ]
    },
    {
        question: "Luật PCCC quy định nhiệm vụ của lực lượng dân phòng và lực lượng PCCC cơ sở, theo đó, lực lượng dân phòng và lực lượng PCCC cơ sở có mấy nhiệm vụ?",
        answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        question: "Trong trường hợp nào thì hoạt động của cơ sở, phương tiện giao thông cơ giới, hộ gia đình và cá nhân bị tạm đình chỉ?",
        answers: [
            { text: "Khi có nguy cơ trực tiếp phát sinh cháy, nổ", correct: false },
            { text: "Vi phạm đặc biệt nghiêm trọng quy định về PCCC", correct: false },
            { text: "Vi phạm nghiêm trọng quy định về PCCC đã được cơ quan quản lý nhà nước về PCCC yêu cầu khắc phục mà không thực hiện", correct: false },
            { text: "Tất cả các trường hợp trên", correct: true }
        ]
    },
    {
        question: "Luật PCCC quy định số điện thoại báo cháy được quy định thống nhất trong cả nước, số điện thoại báo cháy của nước ta hiện nay là số nào sau đây?",
        answers: [
            { text: "113", correct: false },
            { text: "114", correct: true },
            { text: "115", correct: false },
            { text: "116", correct: false }
        ]
    },
    {
        question: "Theo khoản 2, Điều 17 Nghị định số 35/2003/NĐ-CP, ai có trách nhiệm trình hồ sơ thẩm duyệt về PCCC :",
        answers: [
            { text: "Cơ quan đơn vị tổng thầu xây dựng", correct: false },
            { text: "Chủ đầu tư", correct: true },
            { text: "Tổ chức, cá nhân do chủ đầu tư ủy quyền", correct: false },
            { text: "Đơn vị thiết kế công trình", correct: false }
        ]
    },
    {
        question: "Hội trường có quy mô nào sau đây thuộc cơ sở nguy hiểm về cháy, nổ quy định tại Nghị định số 35/2003/NĐ-CP",
        answers: [
            { text: "Hội trường có thiết kế từ 100 chỗ ngồi trở lên", correct: false },
            { text: "Hội trường có thiết kế từ 200 chỗ ngồi trở lên", correct: true },
            { text: "Hội trường có thiết kế từ 300 chỗ ngồi trở lên", correct: false },
            { text: "Hội trường có thiết kế từ 400 chỗ ngồi trở lên", correct: false }
        ]
    },
    {
        question: "Theo Phụ lục 3, Nghị định số 35/2003/NĐ-CP ngày 04/4/2003 của Chính Phủ qui định Các cơ sở giáo dục, trường học nào sau đây thuộc diện phải thiết kế và thẩm duyệt về PCCC:",
        answers: [
            { text: "Từ 4 tầng trở lên hoặc có khối tích tổng cộng từ 5000m3 trở lên", correct: false },
            { text: "Từ 4 tầng trở lên hoặc có khối tích tổng cộng từ 6000m3 trở lên", correct: false },
            { text: "Từ 3 tầng trở lên hoặc có khối tích tổng cộng từ 5000m3 trở lên", correct: true },
            { text: "Từ 3 tầng trở lên hoặc có khối tích tổng cộng từ 6000m3 trở lên", correct: false }
        ]
    },
    {
        question: "Theo Phụ lục 3, Nghị định số 35/2003/NĐ-CP ngày 04/4/2003 của Chính Phủ qui định Công trình nào sau đây thuộc diện phải thiết kế và thẩm duyệt về PCCC .",
        answers: [
            { text: "Khách sạn, nhà khách, nhà nghỉ, nhà trọ từ 4 tầng trở lên hoặc có khối tích từ 4000m3 trở lên", correct: false },
            { text: "Khách sạn, nhà khách, nhà nghỉ, nhà trọ từ 5 tầng trở lên hoặc có khối tích từ 5000m3 trở lên", correct: true },
            { text: "Khách sạn, nhà khách, nhà nghỉ, nhà trọ có khối tích từ 4000m3 trở lên", correct: false },
            { text: "Khách sạn, nhà khách, nhà nghỉ, nhà trọ từ 4 tầng trở lên hoặc có khối tích từ 3500m3 trở lên", correct: false }
        ]
    },
    {
        question: "Cơ sở nào sau đây thuộc cơ sở nguy hiểm về cháy, nổ quy định trong Phụ lục 1 Nghị định số 35/2003/NĐ-CP ?",
        answers: [
            { text: "Trụ sở cơ quan, văn phòng làm việc, cơ sở nghiên cứu từ 5 tầng trở lên", correct: false },
            { text: "Trụ sở cơ quan, văn phòng làm việc, cơ sở nghiên cứu từ 5 tầng trở lên và có 1 tầng hầm", correct: false },
            { text: "Trụ sở cơ quan, văn phòng làm việc, cơ sở nghiên cứu từ 6 tầng trở lên hoặc có khối tích từ 25.000 m3 trở lên", correct: true },
            { text: "Trụ sở cơ quan, văn phòng làm việc, cơ sở nghiên cứu có khối tích từ 20.000 m3trở lên", correct: false }
        ]
    },
    {
        question: "Danh mục nào sau đây thuộc cơ sở nguy hiểm về cháy, nổ theo quy định trong phụ lục I, Nghị định 35/2003/NĐ-CP?",
        answers: [
            { text: "Kho hàng hóa, vật tư cháy được hoặc hàng hóa vật tư không cháy đựng trong các bao bì cháy được có khối tích từ 4000 m3 trở lên", correct: false },
            { text: "Kho hàng hóa, vật tư cháy được hoặc hàng hóa vật tư không cháy đựng trong các bao bì cháy được có khối tích từ 5000 m3 trở lên; bãi hàng hóa vật tư cháy được có diện tích từ 500 m2 trở lên", correct: true },
            { text: "Kho hàng hóa, vật tư cháy được hoặc hàng hóa vật tư không cháy đựng trong các bao bì cháy được có khối tích từ 4000 m3 trở lên; bãi hàng hóa vật tư cháy được có diện tích từ 400 m2 trở lên", correct: false },
            { text: "Kho hàng hóa, vật tư cháy được hoặc hàng hóa vật tư không cháy đựng trong các bao bì cháy được có khối tích từ 4000 m3 trở lên; bãi hàng hóa vật tư cháy được có diện tích từ 500 m2 trở lên", correct: false }
        ]
    },
    {
        question: "Theo Phụ lục 3, Nghị định số 35/2003/NĐ-CP ngày 04/4/2003 của Chính Phủ qui định Nhà máy điện, trạm biến áp bao nhiêu KV phải thiết kế và thẩm duyệt về PCCC",
        answers: [
            { text: "34KV", correct: false },
            { text: "35KV", correct: true },
            { text: "36KV", correct: false },
            { text: "37KV", correct: false }
        ]
    },
    {
        question: "Việc “hoàn trả và bồi thường thiệt hại phương tiện, tài sản được huy động để chữa cháy” được quy định tại điều mấy của Nghị định số 35/2003/NĐ-CP ngày 04/4/2003:",
        answers: [
            { text: "Điều 27", correct: false },
            { text: "Điều 26", correct: true },
            { text: "Điều 25", correct: false },
            { text: "Điều 24", correct: false }
        ]
    },
    {
        question: "Đ/c hãy cho biết Trách nhiệm của nhà thầu thi công (theo khoản 3 điều 17 Nghị định số 35/2003/NĐ-CP).",
        answers: [
            { text: "Bảo đảm an toàn về PCCC, phòng nổ thuộc phạm vi quản lý của mình trong suốt quá trình thi công xây lắp đến khi bàn giao công trình", correct: false },
            { text: "Lập hồ sơ hoàn công, chuẩn bị các tài liệu để phục vụ công tác nghiệm thu công trình và tham gia nghiệm thu công trình", correct: false },
            { text: "Thi công theo đúng thiết kế đã được thẩm duyệt", correct: false },
            { text: "Cả ba câu trên đêu đúng", correct: true }
        ]
    },
    {
        question: "Cơ sở nào sau đây thuộc cơ sở nguy hiểm về cháy, nổ quy định tại phụ lục I, Nghị định 35/2003/NĐ-CP.",
        answers: [
            { text: "Nhà máy điện; trạm biến áp từ 35 KV trở lên", correct: false },
            { text: "Nhà máy điện; trạm biến áp từ 110 KV trở lên", correct: true },
            { text: "Nhà máy điện; trạm biến áp từ 220 KV trở lên", correct: false },
            { text: "Nhà máy điện; trạm biến áp từ 380 KV trở lên", correct: false }
        ]
    },
    {
        question: "“Trong trường hợp tại nơi xảy ra cháy, lực lượng cảnh sát phòng cháy và chữa cháy chưa đến nơi mà đám cháy lan từ cơ sở này sang cơ sở khác hoặc cháy lan từ cơ sở sang khu dân cư và ngược lại thì người chỉ huy chữa cháy của cơ sở và khu dân cư bị cháy phải có trách nhiệm phối hợp trong chỉ huy chữa cháy”. Cho biết quy định trên nằm ở điều mấy của Nghị định số 35/2003/NĐ-CP ngày 04/4/2003:",
        answers: [
            { text: "Điều 26", correct: false },
            { text: "Điều 27", correct: false },
            { text: "Điều 28", correct: false },
            { text: "Điều 29", correct: true }
        ]
    },
    {
        question: "Trách nhiệm của cơ quan thiết kế về PCCC được qui định tại Nghị định số 35/2003/NĐ-CP như thế nào?",
        answers: [
            { text: "Thiết kế bảo đảm các yêu cầu về PCCC; chịu trách nhiệm về sản phẩm thiết kế trong thời gian xây dựng và sử dụng công trình", correct: false },
            { text: "Thực hiện giám sát tác giả trong quá trình thi công xây lắp công trình. Tham gia nghiệm thu công trình", correct: false },
            { text: "Thiết kế bảo đảm các yêu cầu về PCCC; chịu trách nhiệm về sản phẩm thiết kế trong thời gian xây dựng và sử dụng công trình. Thực hiện giám sát tác giả trong quá trình thi công xây lắp công trình", correct: false },
            { text: "Câu A và B đúng", correct: true }
        ]
    },
    {
        question: "Chương III “chữa cháy” của Nghị định số 35/2003/NĐ-CP ngày 04/4/2003 có mấy điều ? từ điều nào đến điều nào?",
        answers: [
            { text: "11 điều, từ điều 22 đến điều 32", correct: true },
            { text: "11 điều, từ điều 23 đến điều 33", correct: false },
            { text: "11 điều, từ điều 24 đến điều 34", correct: false },
            { text: "11 điều, từ điều 25 đến điều 35", correct: false }
        ]
    },
    {
        question: "Các công trình nào sau đây thuộc diện phải thiết kế và thẩm duyệt về PCCC (theo Phục lục 3, Nghị định số 35/2003/NĐ-CP ngày 04/4/2003 của Chính Phủ).",
        answers: [
            { text: "Nhà ở tập thể, chung cư cao từ 5 tầng trở lên, hoặc có khối tích từ 3000m3 trở lên; nhà ở khác cao từ 7 tầng trở lên", correct: false },
            { text: "Nhà ở tập thể, chung cư cao từ 6 tầng trở lên hoặc có khối tích từ 5000m3 trở lên; nhà ở khác cao từ 7 tầng trở lên", correct: false },
            { text: "Nhà ở tập thể, chung cư cao từ 5 tầng trở lên hoặc có khối tích từ 5000m3 trở lên; nhà ở khác cao từ 7 tầng trở lên", correct: true },
            { text: "Nhà ở tập thể, chung cư, nhà nghỉ, nhà trọ có khối tích từ 5000m3 trở lên.", correct: false }
        ]
    },
    {
        question: "Công trình nào sau đây thuộc diện phải thiết kế và thẩm duyệt về PCCC theo Phục lục 3, Nghị định số 35/2003/NĐ-CP ngày 04/4/2003 của Chính Phủ?",
        answers: [
            { text: "Nhà văn phòng, trụ sở làm việc của cơ quan chính quyền, tổ chức chính trị xã hội cấp huyện trở lên, nhà văn phòng, trụ sở làm việc khác từ 5 tầng trở lên hoặc có khối tích từ 5000m3 trở lên.", correct: true },
            { text: "Nhà văn phòng, trụ sở làm việc của cơ quan chính quyền, tổ chức chính trị xã hội cấp huyện trở lên, nhà văn phòng, trụ sở làm việc khác từ 5 tầng trở lên hoặc có khối tích từ 3000m3 trở lên", correct: false },
            { text: "Nhà văn phòng, trụ sở làm việc của cơ quan chính quyền, tổ chức chính trị xã hội cấp huyện trở lên, nhà văn phòng, trụ sở làm việc khác từ 4 tầng trở lên hoặc có khối tích từ 5000m3 trở lên", correct: false },
            { text: "Nhà văn phòng, trụ sở làm việc của cơ quan chính quyền, tổ chức chính trị xã hội cấp huyện trở lên, nhà văn phòng, trụ sở làm việc khác từ 4 tầng trở lên hoặc có khối tích từ 3000m3 trở lên", correct: false }
        ]
    },
    {
        question: "Cơ sở nào sau đây thuộc cơ sở nguy hiểm về cháy, nổ theo quy định trong Nghị định 35/2003/NĐ-CP ?",
        answers: [
            { text: "Trụ sở cơ quan, văn phòng làm việc, cơ sở nghiên cứu từ 5 tầng trở lên hoặc có khối tích từ 25.000 m3 trở lên;", correct: false },
            { text: "Trụ sở cơ quan, văn phòng làm việc, cơ sở nghiên cứu từ 6 tầng trở lên và có khối tích từ 25.000 m3 trở lên;", correct: false },
            { text: "Trụ sở cơ quan, văn phòng làm việc, cơ sở nghiên cứu từ 6 tầng trở lên hoặc có khối tích từ 25.000 m3 trở lên;", correct: true },
            { text: "Trụ sở cơ quan, văn phòng làm việc, cơ sở nghiên cứu từ 8 tầng trở lên hoặc có khối tích từ 25.000 m3 trở lên;", correct: false }
        ]
    },
    {
        question: "Công trình nào sau đây phải được thẩm duyệt về PCCC theo Khoản 1, điều 16 Nghị định số 35/2003/NĐ-CP ngày 04/4/2003 của Chính Phủ?",
        answers: [
            { text: "Công trình được thay đổi tên hoặc địa chỉ, mở rộng công trình", correct: false },
            { text: "Công trình được thiết kế xây dựng mới, cải tạo hoặc thay đổi tính chất sử dụng của công trình", correct: true },
            { text: "Thay đổi địa chỉ hoặc tên công trình, cải tạo hoặc thay đổi tính chất sử dụng của công trình", correct: false },
            { text: "Công trình được thay đổi tên hoặc địa chỉ hoặc thay đổi tính chất sử dụng của công trình", correct: false }
        ]
    },
    {
        question: "Theo Điều 5 Nghị định số 35/2003/NĐ-CP, cá nhân có bao nhiêu trách nhiệm?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: true },
            { text: "7", correct: false },
            { text: "8", correct: false }
        ]
    },
    {
        question: "Nghị định số 130/2006/NĐ-CP quy định chế độ bảo hiểm cháy nổ bắt buộc có bao nhiêu chương? Bao nhiêu điều?",
        answers: [
            { text: "5 chương 23 điều", correct: false },
            { text: "5 chương 24 điều", correct: true },
            { text: "5 chương 25 điều", correct: false },
            { text: "5 chương 26 điều", correct: false }
        ]
    },
    {
        question: "Nghị định nào sau đây quy định chế độ bảo hiểm cháy nổ bắt buộc?",
        answers: [
            { text: "Nghị định số 35/2003/ NĐ-", correct: false },
            { text: "Nghị định số 130/2006/ NĐ-CP", correct: true },
            { text: "Nghị định số 123/2005/NĐ- CP", correct: false },
            { text: "Nghị định 08/ 2001/ NĐ- CP", correct: false }
        ]
    },
    {
        question: "Theo Nghị định số 123/2005/NĐ-CP qui định hành vi nào sau đây bị Phạt tiền từ 200.000 đồng đến 1.000.000 đồng?",
        answers: [
            { text: "Sử dụng thiết bị tiêu thụ điện ở những nơi đã có quy định cấm", correct: false },
            { text: "Lắp đặt hệ thống chống sét không đúng quy định hoặc không đảm bảo yêu cầu chống sét theo quy định", correct: false },
            { text: "Không sửa chữa hoặc không thực hiện chế độ kiểm tra, đo đếm định kỳ hệ thống chống sét theo quy định", correct: false },
            { text: "Tất cả các câu trên", correct: true }
        ]
    },
    {
        question: "Hành vi vi phạm quy định về phòng cháy và chữa cháy trong sản xuất, kinh doanh chất nguy hiểm về cháy, nổ được áp dụng xử phạt với khung hình phạt tối đa là:",
        answers: [
            { text: "Phạt tiền đến 5.000.000 đồng", correct: false },
            { text: "Phạt tiền đến 10.000.000 đồng", correct: true },
            { text: "Phạt tiền đến 15.000.000 đồng", correct: false },
            { text: "Phạt tiền đến 20.000.000 đồng", correct: false }
        ]
    },
    {
        question: "Theo Nghị định số 123/2005/NĐ-CP qui định Phạt tiền từ 2.000.000 đồng đến 5.000.000 đồng đối với một trong những hành vi sau?",
        answers: [
            { text: "Thay đổi, dịch chuyển làm sai vị trí niêm yết nội quy, vị trí để biển báo, biển cấm, biển chỉ dẫn về phòng cháy và chữa cháy", correct: false },
            { text: "Không có biển cấm, biển báo, biển chỉ dẫn về phòng cháy và chữa cháy tại những vị trí cần thiết theo quy định.", correct: false },
            { text: "Không ban hành quy định, nội quy về phòng cháy và chữa cháy theo quy định", correct: true },
            { text: "Tất cả đều đúng", correct: false }
        ]
    },
    {
        question: "Nội dung khoản 1, Điều 15 Nghị định 123/ 2005/ NĐ- CP qui định:",
        answers: [
            { text: "Phạt tiền từ 100.000 đồng đến 200.000 đồng đối với hành vi bố trí nơi đun nấu không đảm bảo an toàn về phòng cháy và chữa cháy theo qui định", correct: false },
            { text: "Phạt tiền từ 100.000 đồng đến 200.000 đồng đối với hành vi không sửa chữa hoặc không thực hiện chế độ kiểm tra, đo đếm định kỳ hệ thống chống sét theo quy định", correct: false },
            { text: "Phạt tiền từ 100.000 đồng đến 200.000 đồng đối với hành vi sử dụng thiết bị tiêu thụ điện ở những nơi đã có quy định cấm", correct: false },
            { text: "Phạt tiền từ 100.000 đồng đến 200.000 đồng đối với hành vi không có biện pháp chống cháy lan khi sử dụng thiết bị điện", correct: true }
        ]
    },
    {
        question: "Theo khoản 4, điều 15 Nghị định 123/2005/NĐ-CP của Chính phủ quy định Phạt tiền từ 2.000.000 đồng đến 5.000.000 đồng đối với một trong những hành vi nào sau đây?",
        answers: [
            { text: "Không có nguồn điện dự phòng theo quy định. Hệ thống điện không được tách riêng thành từng hệ thống theo quy định", correct: false },
            { text: "Không có biện pháp xử lý những sự cố kỹ thuật có thể dẫn đến nguy cơ cháy, nổ tại cơ sở sản xuất, cung ứng, truyền tải và phân phối điện", correct: false },
            { text: "Không lắp đặt hệ thống chống sét theo qui định", correct: false },
            { text: "Câu A và B đúng", correct: true }
        ]
    },
    {
        question: "Khoản 3, điều 20 Nghị định 123/2005/NĐ-CP của Chính phủ quy định Phạt tiền từ 2.000.000 đồng đến 5.000.000 đồng đối với hành vi nào sau đây?",
        answers: [
            { text: "Không có hiệu lệnh, thiết bị thông tin báo cháy theo qui định", correct: false },
            { text: "Báo cháy giả", correct: true },
            { text: "Gây cản trở cho công tác chữa cháy", correct: false },
            { text: "Không thực hiện yêu cầu của người chỉ huy chữa cháy.", correct: false }
        ]
    },
    {
        question: "Đ/c hãy cho biết Nghị Định số 123/2005/NĐ-CP của Chính Phủ ngày 05/10/2005 quy định mức phạt tiền bao nhiêu đối với hành vi Thi công, lắp đặt hạng mục phòng cháy và chữa cháy không theo đúng thiết kế về phòng cháy và chữa cháy đã được thẩm duyệt?",
        answers: [
            { text: "Phạt tiền từ 2.000.000 đồng đến 5.000.000 đồng", correct: false },
            { text: "Phạt tiền 5.000.000 đồng đến 10.000.000 đồng", correct: true },
            { text: "Phạt tiền 10.000.000 đồng đến 15.000.000 đồng", correct: false },
            { text: "Phạt tiền 15.000.000 đồng đến 20.000.000 đồng", correct: false }
        ]
    },
    {
        question: "Theo Nghị định số 123/2005/NĐ-CP qui định hành vi nào sau đây bị phạt tiền từ 500.000 đồng đến 1.000.000 đồng?",
        answers: [
            { text: "Không ban hành quy định, nội quy về phòng cháy và chữa cháy theo quy định", correct: false },
            { text: "Không phổ biến quy định và nội quy về PCCC cho những người trong phạm vi quản lý của mình", correct: true },
            { text: "Không có biển cấm, biển báo, biển chỉ dẫn về phòng cháy và chữa cháy tại những vị trí cần thiết theo quy định", correct: false },
            { text: "Câu A và B đúng", correct: false }
        ]
    },
    {
        question: "Theo Nghị định số 123/2005/NĐ-CP qui định hành vi nào bị phạt tiền từ 1.000.000 đồng đến 2.000.000 đồng?",
        answers: [
            { text: "Lắp đặt, sử dụng hệ thống điện, thiết bị tiêu thụ điện không đảm bảo an toàn về phòng cháy và chữa cháy theo quy định", correct: false },
            { text: "Lắp đặt, sử dụng hệ thống điện, thiết bị tiêu thụ điện trong môi trường có nguy hiểm về cháy, nổ không đảm bảo an toàn về phòng cháy và chữa cháy theo quy định", correct: true },
            { text: "Không có biện pháp xử lý những sự cố kỹ thuật có thể dẫn đến nguy cơ cháy, nổ tại cơ sở sản xuất, cung ứng, truyền tải và phân phối điện", correct: false },
            { text: "Không sửa chữa hoặc không thực hiện chế độ kiểm tra, đo đếm định kỳ hệ thống chống sét theo quy định", correct: false }
        ]
    },
    {
        question: "Khoản 1, Điều 24 Nghị định số 123/2005/NĐ-CP quy định hành vi nào sau đây bị Phạt tiền từ 200.000 đồng đến 1.000.000 đồng?",
        answers: [
            { text: "Không có biện pháp quản lý và duy trì hoạt động của đội dân phòng, đội phòng cháy và chữa cháy cơ sở theo quy định", correct: false },
            { text: "Không có biện pháp quản lý và duy trì hoạt động của đội dân phòng, đội phòng cháy và chữa cháy cơ sở hoặc chuyên ngành theo quy định", correct: true },
            { text: "Đội dân phòng, đội phòng cháy và chữa cháy cơ sở hay chuyên ngành không tham gia hoạt động phòng cháy và chữa cháy khi được người có thẩm quyền yêu cầu", correct: false },
            { text: "Đội dân phòng, đội phòng cháy và chữa cháy cơ sở không tham gia hoạt động phòng cháy và chữa cháy khi được người có thẩm quyền yêu cầu.", correct: false }
        ]
    },
    {
        question: "Theo Khoản 5, điều 16 Nghị định số 123/2005/NĐ-CP của Chính phủ quy định những hành vi nào sau đây bị phạt tiền từ 15.000.000 đồng đến 20.000.000 đồng?",
        answers: [
            { text: "Không có thiết kế hệ thống phòng cháy và chữa cháy đối với công trình thuộc diện phải có thiết kế về phòng cháy và chữa cháy", correct: false },
            { text: "Không nghiệm thu về phòng cháy và chữa cháy theo qui định", correct: false },
            { text: "Đưa công trình vào hoạt động mà chưa được nghiệm thu về phòng cháy và chữa cháy theo quy định", correct: false },
            { text: "A và C đúng", correct: true }
        ]
    },
    {
        question: "Hành vi không tổ chức kiểm tra an toàn phòng cháy và chữa cháy theo quy định sẽ bị phạt tiền từ:",
        answers: [
            { text: "Từ 500.000 đồng đến 1.000.0000 đồng", correct: false },
            { text: "Từ 1000.000 đồng đến 2.000.0000 đồng", correct: false },
            { text: "Từ 1.000.000 đồng đến 2.000.000 đồng", correct: true },
            { text: "Tất cả đều sai", correct: false }
        ]
    },
    {
        question: "Khoản 1, Điều 22 Nghị định 123/ 2005/ NĐ- CP quy định Phạt cảnh cáo hoặc phạt tiền từ 50.000 đồng đến 100.000 đồng đối với hành vi nào sau đây?",
        answers: [
            { text: "Vào khu vực chữa cháy để làm các việc khác ngoài nhiệm vụ chữa cháy, cứu người, cứu tài sản hoặc làm bất cứ việc gì khi không được phép của người có thẩm quyền", correct: true },
            { text: "Không chuẩn bị sẵn sàng, đầy đủ về lực lượng theo qui định để chữa cháy", correct: false },
            { text: "Hai câu A và B đúng", correct: false },
            { text: "Hai câu A và B sai", correct: false }
        ]
    },
    {
        question: "Đối với hành vi xây dựng phương án chữa cháy không đảm bảo yêu cầu theo quy định tại khoản 1, Điều 19 Nghị định 123/ 2005/ NĐ- CP thì bị phạt ở mức bao nhiêu?",
        answers: [
            { text: "50.000 đ đến 100.000 đ", correct: false },
            { text: "100.000 đ đến 200.000 đ", correct: true },
            { text: "200.000 đ đến 500.000 đ", correct: false },
            { text: "200.000 đ đến 1.000.000 đ", correct: false }
        ]
    },
    {
        question: "Đ/c hãy cho biết mức phạt tiền đối với hành vi không lắp đặt hệ thống chống sét?",
        answers: [
            { text: "Phạt tiền từ 200.000 đồng đến 1.000.000 đồng.", correct: false },
            { text: "Phạt tiền 1.000.000 đồng đến 2.000.000 đồng.", correct: true },
            { text: "Phạt tiền 2.000.000 đồng đến 3.000.000 đồng.", correct: false },
            { text: "Phạt tiền 3.000.000 đồng đến 4.000.000 đồng.", correct: false }
        ]
    },
    {
        question: "Hành vi “Không thông báo kịp thời cho cơ quan Cảnh sát phòng cháy và chữa cháy trực tiếp quản lý khi có những thay đổi về kiến trúc của công trình, quy mô tính chất hoạt động làm tăng mức độ nguy hiểm về phòng cháy và chữa cháy” sẽ bị phạt tiền:",
        answers: [
            { text: "Từ 100.000 đồng đến 200.000 đồng", correct: true },
            { text: "Từ 200.000 đồng đến 1.000.000 đồng", correct: false },
            { text: "Từ 1.000.000 đồng đến 2.000.000 đồng", correct: false },
            { text: "Từ 2.000.000 đồng đến 5.000.000 đồng", correct: false }
        ]
    },
    {
        question: "Theo Nghị định số 123/2005/NĐ-CP qui định mức phạt tiền bao nhiêu đối với hành vi “Không bán hoặc không mua bảo hiểm cháy, nổ bắt buộc theo quy định” ?",
        answers: [
            { text: "Từ 2.000.000 đồng đến 5.000.000 đồng", correct: true },
            { text: "Từ 5.000.000 đồng đến 10.000.000 đồng", correct: false },
            { text: "Từ 10.000.000 đồng đến 15.000.000 đồng", correct: false },
            { text: "Từ 15.000.000 đồng đến 20.000.000 đồng", correct: false }
        ]
    },
    {
        question: "Theo Thông tư số 04/2004/TT-BCA qui định Việc thống kê về PC&CC gồm những gì?",
        answers: [
            { text: "Thống kê về số lần kiểm tra an toàn, tuyên truyền, bồi dưỡng, huấn luyện về PC&CC, xử lý vi phạm về PC&CC", correct: false },
            { text: "Số lượng cán bộ, đội viên PC&CC cơ sở; phương tiện chữa cháy; thống kê về học tập, thực tập phương án chữa cháy; về vụ cháy, công tác chữa cháy và những vấn đề khác có liên quan đến hoạt động PC&CC", correct: false },
            { text: "Về số lần kiểm tra an toàn, tuyên truyền, bồi dưỡng, huấn luyện về PC&CC; phương tiện chữa cháy; thực tập phương án chữa cháy; về vụ cháy, công tác chữa cháy và những vấn đề khác có liên quan đến hoạt động PC&CC", correct: false },
            { text: "Hai câu A và B đúng", correct: true }
        ]
    },
    {
        question: "Thông tư 04/2004/TT-BCA quy định khi tiến hành kiểm tra định kỳ về PC&CC phải thông báo trước mấy ngày?",
        answers: [
            { text: "02 ngày", correct: false },
            { text: "03 ngày", correct: true },
            { text: "04 ngày", correct: false },
            { text: "05 ngày", correct: false }
        ]
    },
    {
        question: "Thông tư số 04/2004/TT-BCA quy định sơ đồ chỉ dẫn về PCCC phải thể hiện những gì?",
        answers: [
            { text: "Sơ đồ chỉ dẫn về PC&CC phải thể hiện được hệ thống đường nội bộ, hướng thoát nạn, vị trí nguồn nước chữa cháy và phương tiện chữa cháy", correct: false },
            { text: "Sơ đồ chỉ dẫn về PC&CC phải thể hiện được các hạng mục công trình, hệ thống đường nội bộ, lối thoát nạn, hướng thoát nạn, vị trí nguồn nước chữa cháy và phương tiện chữa cháy", correct: false },
            { text: "Sơ đồ chỉ dẫn về PC&CC có thể tách thành những sơ đồ chỉ dẫn riêng thể hiện một hoặc một số nội dung trên", correct: false },
            { text: "Hai câu B và C đúng", correct: true }
        ]
    },
    {
        question: "Theo Thông tư 04/TT/2004/TT-BCA thì biên chế của Đội dân phòng có mấy người?",
        answers: [
            { text: "10 người", correct: false },
            { text: "20 người", correct: false },
            { text: "30 người", correct: false },
            { text: "Từ 10 đến 30 người hoặc nhiều hơn khi thấy cần thiết", correct: true }
        ]
    },
    {
        question: "Theo Thông tư số 04/2004/TT-BCA cơ sở, phương tiện giao thông cơ giới có dưới 10 người thường xuyên làm việc thì đội PCCC cơ sở được lập gồm mấy người?",
        answers: [
            { text: "4 người", correct: false },
            { text: "5 người", correct: false },
            { text: "6 người", correct: false },
            { text: "Tất cả những người làm việc tại cơ sở đó", correct: true }
        ]
    },
    {
        question: "Theo Thông tư số 04/2004/TT-BCA cơ sở, phương tiện giao thông cơ giới có từ 10 đến 50 người thường xuyên làm việc thì biên chế của đội PCCC cơ sở tối thiểu là bao nhiêu người?",
        answers: [
            { text: "7 người", correct: false },
            { text: "8 người", correct: false },
            { text: "9 người", correct: false },
            { text: "10 người", correct: true }
        ]
    },
    {
        question: "Theo Thông tư số 04/2004/TT-BCA cơ sở, phương tiện giao thông cơ giới có trên 50 người đến 100 người thường xuyên làm việc thì biên chế của đội phòng cháy và chữa cháy cơ sở có bao nhiêu người?",
        answers: [
            { text: "Tối thiếu là 14 người", correct: false },
            { text: "Tối thiếu là 15 người", correct: true },
            { text: "Tối thiếu là 16 người", correct: false },
            { text: "Tối thiếu là 17 người", correct: false }
        ]
    },
    {
        question: "Theo Thông tư số 04/2004/TT-BCA cơ sở, phương tiện giao thông cơ giới có trên 100 người thường xuyên làm việc thì biên chế của đội phòng cháy và chữa cháy cơ sở có bao nhiêu người?",
        answers: [
            { text: "Tối thiếu là 20 người", correct: false },
            { text: "Tối thiếu là 23 người", correct: false },
            { text: "Tối thiếu là 25 người", correct: true },
            { text: "Tối thiếu là 27 người", correct: false }
        ]
    },
    {
        question: "Theo Thông tư số 04/2004/TT-BCA thời gian huấn luyện bồi dưỡng nghiệp vụ PCCC lần đầu cho cán bộ, đội viên đội dân phòng, Đội PCCC cơ sở và chuyên ngành là bao nhiêu giờ?",
        answers: [
            { text: "Từ 16 đến 24 giờ", correct: false },
            { text: "Từ 24 đến 32 giờ", correct: false },
            { text: "Từ 32 đến 48 giờ", correct: true },
            { text: "Từ 48 đến 54 giờ", correct: false }
        ]
    },
    {
        question: "Theo Thông tư số 04/2004/TT-BCA thời gian bồ dưỡng bổ sung hàng năm về nghiệp vụ PCCC cho cán bộ đội và đội dân phòng, đội PCCC cơ sở và chuyên ngành là bao nhiêu giờ?",
        answers: [
            { text: "Tối thiểu là 8 giờ", correct: false },
            { text: "Tối thiểu là 12 giờ", correct: false },
            { text: "Tối thiểu là 16 giờ", correct: true },
            { text: "Tối thiểu là 20 giờ", correct: false }
        ]
    }
];
// Export the questions array
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
} else {
    window.questions = questions;
}