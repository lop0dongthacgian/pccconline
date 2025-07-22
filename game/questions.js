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
            { text: "Bình bột hoặc bình CO2", correct: false },
            { text: "Bình bọt", correct: false },
            { text: "Cả B và C", correct: true }
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
            { text: "Bình bột ABC", correct: true },
            { text: "Bình khí CO2", correct: false },
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
            { text: "Cả A và B .", correct: true }
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
            { text: "Không cần chú ý điều này.", correct: false }
        ]
    },
    {
        question: "Bạn đang ở trong phòng ngủ của mình và nghe thấy chuông báo động khói. Bạn nên làm gì?",
        answers: [
            { text: "Vô hiệu hóa chuông báo động khói. Nếu bạn không ngửi thấy khói hoặc nhìn thấy ngọn lửa nghĩa là mọi thứ đều ổn.", correct: false },
            { text: "Dùng mu bàn tay để mở cánh cửa đang đóng. Mở nó từ từ và đi ra ngoài.", correct: true },
            { text: "Chạy ra ngoài ngay.", correct: false },
            { text: "Ở yên tại chổ để theo dõi tình hình.", correct: false }
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
            { text: "Điều 6", correct: false },
            { text: "Điều 7", correct: false },
            { text: "Điều 8", correct: false },
            { text: "Điều 9", correct: true }
        ]
    }
];
// Export the questions array
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
} else {
    window.questions = questions;
}
