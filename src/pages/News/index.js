import classNames from "classnames/bind"
import { useEffect, useState, useCallback } from "react"

import styles from './News.module.css'
import Loader from "../../components/Loader"

const cx = classNames.bind(styles)

const data = [
    {
        title: 'Pokémon TCG - Scarlet & Violet một kỷ nguyên mới với những thay đổi cực lớn!!!',
        background: 'https://file.hstatic.net/200000346081/article/imagem_2022-12-09_150710858_9c5189d823fb4010be7b7004a51a6280_1024x1024.png',
        createdBy: 'Nguyễn Thị Huỳnh Nhi',
        createDate: '28.04.2023',
        contents: [
            {
                type: 'text',
                content: 'Xin chào tất cả các Pokellector, Một kỷ nguyên mới của trào lưu sưu tập thẻ Pokémon TCG đã được chính thức bắt đầu với series hoàn toàn mới Scarlet & Violet. Và lần này, series mới này sẽ đem lại cho chúng ta một thay đổi cực kì lớn . Hãy cùng Gạo khám phá xem series Scarlet & Violet có những thay đổi gì nhé.'
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/sv01-top-cards-169-en_3802afb5b11e475088b4b3f9784bb00c_grande.png',
                caption: 'Ảnh 1'
            },
            {
                type: 'text',
                content: 'Thay đổi đáng kể nhất trong series Scarlet & Violet chính là sự thay đổi về format thẻ. Để phù hợp với các thẻ được xuất bản tại Nhật Bản, các đường viền màu vàng trên các thẻ Pokémon sẽ đổi thành màu bạc. Điều này sẽ tạo ra trải nghiệm Pokémon TCG nhất quán hơn trên toàn thế giới đồng thời nâng cao tác phẩm nghệ thuật thẻ bài.'
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/sv01_en_36-2x_1c2c9ac5250c49658c149e51ec9e5364_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_36-2x_1c2c9ac5250c49658c149e51ec9e5364_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_52-2x_0109722f60cf4e489b4a492a94246abf_grande.jpg'],
                caption: 'Ảnh 2'
            },
            {
                type: 'text',
                content: 'Ngoài ra, các danh mục phụ cho thẻ Trainer như Người hỗ trợ, Vật phẩm và Sân vận động, sẽ hiển thị ở góc trên cùng bên trái để người chơi dễ nhìn thấy hơn. '
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/sv01_en_238-2x_5897bf27384b4e69b4d4e3512f853919_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_177-2x_936e6392a78e4a5287592103d010d8d2_grande.jpg'],
                caption: 'Ảnh 3'
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/sv01_en_171-2x_6be5150af7e94b00be56610e598b26d7_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_192-2x_14be67a442f84a1e8fae4123ac7c46bf_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_167-2x_9708444b68ae4aa99f19d8315dcdfd5d_grande.jpg'],
                caption: 'Ảnh 4'
            },
            {
                type: 'text',
                content: 'Thẻ Năng lượng Cơ bản sẽ hiển thị một biểu tượng Năng lượng khác ở góc dưới cùng bên phải để dễ dàng hơn theo dõi năng lượng trong quá trình chơi , đồng thời trên cùng của thẻ giờ sẽ hiển thị tên của Năng lượng.'
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/z4296715599122_3af9502a4a39a1d58bb4b6e007cbd67d_82173e7b0dfc49b0997543c1f14c8b31_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4296715599122_3af9502a4a39a1d58bb4b6e007cbd67d_82173e7b0dfc49b0997543c1f14c8b31_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4296715599103_3bbe613f198e8bf7b273d8ba414527fe_21792ae68ab14cfe87070c5be5cf9901_grande.jpg'],
                caption: 'Ảnh 5'
            },
            {
                type: 'text',
                content: 'Và còn có rất nhiều thay đổi khác đang chờ bạn khám phá . Tất cả đều có trong series Scarlet&Violet hiện đã có mặt tại sạp nhà Gạo. Mời bạn ghé Gạo để xem thêm nhiều sản phẩm hơn nhé.'
            }
        ]
    },
    {
        title: 'Theo bạn cách chọn thẻ Pokemon TCG như thế nào là lý tưởng nhất?',
        background: 'https://file.hstatic.net/200000346081/article/mick-haupt-kttf68zjbak-unsplash_7710768ac5f442d1a2324d14b2b0caf0_1024x1024.jpg',
        createdBy: 'Nguyễn Thị Huỳnh Nhi',
        createDate: '20.04.2023',
        contents: [
            {
                type: 'text',
                content: 'Khi bắt đầu cuộc hành trình của bạn vào thế giới của Pokemon Trading Card Game (TCG), một khía cạnh quan trọng là chọn thẻ Pokemon TCG lý tưởng để đảm bảo nó phù hợp với chiến lược và sở thích cá nhân của bạn. Để đưa ra lựa chọn sáng suốt, bạn phải xem xét một số yếu tố góp phần tạo nên giá trị và hiệu quả của thẻ.'
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/pp-5a0a7530a43f5e7a2142a592-ph0__1__3db956fe551e4920b4c3a87c26fbe9dd_grande.jpg',
                caption: 'Ảnh 1'
            },
            {
                type: 'text',
                content: 'Trước tiên, hãy xác định phong cách chơi ưa thích của bạn,cho dù đó là tấn công, phòng thủ hay chiến lược, để xác định loại thẻ Pokemon phù hợp: Huấn luyện viên, Năng lượng hoặc Pokemon. Mỗi loại đóng một vai trò riêng, đòi hỏi phải suy nghĩ cẩn thận về việc tích hợp nó vào bộ bài của bạn.'
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/nmah-ahb2017q014319_276ad39c120a40549f4ca22a9aa63103_grande.jpg',
                caption: 'Ảnh 2'
            },
            {
                type: 'text',
                content: 'Tiếp theo, hãy tập trung vào những lá bài có sức mạnh tổng hợp với nguyên mẫu bộ bài mong muốn của bạn, đảm bảo rằng bạn đang tối đa hóa tiềm năng của từng lá bài. Hơn nữa, hãy suy ngẫm về khả năng cạnh tranh của thẻ trong meta hiện tại, đánh giá sức mạnh của nó trong trận chiến, sức mạnh tổng hợp với các thẻ khác và khả năng thích ứng với thay đổi. '
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/obj16956329_1_4b3cec27d4c74b9bb9500b1d7f289dc3_grande.jpg',
                caption: 'Ảnh 3'
            },
            {
                type: 'text',
                content: 'Cuối cùng, hãy lưu ý đến ngân sách của bạn khi chọn thẻ và không chi tiêu quá mức vào các thẻ đơn lẻ. Bằng cách tính đến các yếu tố này và liên tục đánh giá lại thành phần bộ bài của mình, bạn sẽ tối ưu hóa trải nghiệm Pokemon TCG của mình, tăng cơ hội thành công và hài lòng trong trò chơi bài hấp dẫn này.',
            },
            {
                type: 'text',
                content: 'Thẻ Năng lượng Cơ bản sẽ hiển thị một biểu tượng Năng lượng khác ở góc dưới cùng bên phải để dễ dàng hơn theo dõi năng lượng trong quá trình chơi , đồng thời trên cùng của thẻ giờ sẽ hiển thị tên của Năng lượng.'
            },
            {
                type: 'image',
                content: `Mời bạn ghé thăm nhà Gạo để xem thêm nhiều sản phẩm về Pokemon TCG nữa nha :
                - Xem hàng trực tiếp tại: 59D Mạc Đĩnh Chi, Đakao, Q1, Tp.HCM 
                
                - Hoặc có thể đặt hàng online tại các link sau: 
                
                https://gaopokemon.com 
                
                https://shopee.vn/gaopokemon 
                
                https://www.facebook.com/Gaopokemon `
            }
        ]
    },
    {
        title: 'Các loại thẻ Pokemon TCG',
        background: 'https://file.hstatic.net/200000346081/article/z4272263457943_c0e988beed8c4a795907b820c5c63b56_d2bf6acd20f04d6c973e1c645ec736a4_1024x1024.jpg',
        createdBy: 'Nguyễn Thị Huỳnh Nhi',
        createDate: '17.04.2023',
        contents: [
            {
                type: 'text',
                content: 'Pokémon Trading Card Game (TCG) là một trò chơi linh hoạt và năng động có nhiều lựa chọn thẻ bài, bao gồm vô số sinh vật và đặc điểm được tìm thấy trong vũ trụ Pokémon. Có ba loại thẻ Pokémon TCG chính: thẻ Pokémon (Pokémon card), Thẻ Huấn luyện viên ( Trainer Card) và Thẻ Năng lượng (Energy cards).'
            },
            {
                type: 'text',
                content: `1) Pokémon card
                Pokémon card là dạng thẻ bài cơ bản nhất trong game. Các thẻ Pokémon đại diện cho các sinh vật mà người chơi sử dụng trong các trận chiến, mỗi thẻ hiển thị các thuộc tính độc đáo như khả năng và di chuyển, cũng như loại của chúng, xác định lợi thế và điểm yếu của chúng so với các thẻ khác. 
                Trong thế giới Pokémon, các thẻ nhân vật có thể tiến hóa để phát huy hết khả năng của chúng và đạt được một hình thức mạnh mẽ hơn. Tùy vào số lần tiến hóa của một Pokémon mà chúng sẽ có thẻ giai đoạn 2 và 3. Sau khi tiến hóa, các thẻ Pokémon nâng cao này có thể giải phóng các khả năng vượt trội, tăng cường các chỉ số của chúng và thường có ngoại hình mới, mang lại lợi thế chiến lược cho người huấn luyện trong các trận chiến và cuộc thi`
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/z4272417333332_0cc3edbfb6a63797760f3c594e9c0831_13053ca426204359aeaa3bb01ca484d1_grande.jpg',
                caption: 'Ảnh 2'
            },
            {
                type: 'text',
                content: `2) Trainer Card
                Trainer Card đóng vai trò then chốt trong việc định hình chiến lược của người chơi. Các thẻ linh hoạt này cung cấp hỗ trợ cần thiết bằng cách cấp các khả năng khác nhau . Về bản chất, thẻ Huấn luyện viên cho phép người chơi thích nghi và vượt qua các thử thách trong suốt trò chơi, khiến chúng trở thành yếu tố không thể thiếu trong việc xây dựng một bộ bài cạnh tranh.
                Trainer cards được phân loại thành 4 dạng thẻ gồm: Item Card, Pokemon Tool, Supporter Card và Stadium Card. Từng loại thẻ sẽ mang đến các công dụng khác nhau.`
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/z4272263461800_773e16ab8a0f08e462629263ae40a52e_440a6915abef480e9aa7eaf11cc6904a_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4272267134361_fe3c09f4fefbdf870ec005393ce7dba3_bb9170eda36a469fba68597d8de95a8b_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4272263441195_c41a5e076240403af80b21061ed4fafc_50ffde61f89b425a8fce9095f75a30da_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4272263446290_f8fb6b6a87782b6959fd91a03b7c4af1_7b03356131d24fda8c38648372a7ce41_grande.jpg'],
                caption: 'Ảnh 3'
            },
            {
                type: 'text',
                content: `3) Energy cards
                Thẻ Năng lượng hoạt động như một nguồn tài nguyên thiết yếu để Pokémon thực hiện các bước di chuyển của chúng trong các trận chiến. Các loại Năng lượng chính tương ứng với các hệ gồm : Grass (Cỏ), Fire (Lửa), Water (Nước), Lightning (Điện), Psychic (Tâm Linh), Fighting (Giác Đấu), Darkness (Bóng Tối), Metal (Kim Loại), Fairy (Tiên).`
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/61lkngsvcwl_9c4ce0d8006b449f9e0356f810304213_grande.jpg',
                caption: 'Ảnh 4'
            },
            {
                type: 'text',
                content: 'Trên đây là bài viết tổng quan chia sẻ về các khái niệm cơ bản của các loại thẻ bài trong Pokemon TCG. Hy vọng nó sẽ giúp ích cho các bạn trong việc làm quen và hiểu rõ hơn về cách chơi của game này một cách nhanh chóng. Và đừng quên ghé Gạo Pokemon để xem thêm nhiều sản phẩm nữa nha.',
            },
        ]
    },
    {
        title: 'Pokémon TCG - Scarlet & Violet một kỷ nguyên mới với những thay đổi cực lớn!!!',
        background: 'https://file.hstatic.net/200000346081/article/imagem_2022-12-09_150710858_9c5189d823fb4010be7b7004a51a6280_1024x1024.png',
        createdBy: 'Nguyễn Thị Huỳnh Nhi',
        createDate: '28.04.2023',
        contents: [
            {
                type: 'text',
                content: 'Xin chào tất cả các Pokellector, Một kỷ nguyên mới của trào lưu sưu tập thẻ Pokémon TCG đã được chính thức bắt đầu với series hoàn toàn mới Scarlet & Violet. Và lần này, series mới này sẽ đem lại cho chúng ta một thay đổi cực kì lớn . Hãy cùng Gạo khám phá xem series Scarlet & Violet có những thay đổi gì nhé.'
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/sv01-top-cards-169-en_3802afb5b11e475088b4b3f9784bb00c_grande.png',
                caption: 'Ảnh 1'
            },
            {
                type: 'text',
                content: 'Thay đổi đáng kể nhất trong series Scarlet & Violet chính là sự thay đổi về format thẻ. Để phù hợp với các thẻ được xuất bản tại Nhật Bản, các đường viền màu vàng trên các thẻ Pokémon sẽ đổi thành màu bạc. Điều này sẽ tạo ra trải nghiệm Pokémon TCG nhất quán hơn trên toàn thế giới đồng thời nâng cao tác phẩm nghệ thuật thẻ bài.'
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/sv01_en_36-2x_1c2c9ac5250c49658c149e51ec9e5364_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_36-2x_1c2c9ac5250c49658c149e51ec9e5364_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_52-2x_0109722f60cf4e489b4a492a94246abf_grande.jpg'],
                caption: 'Ảnh 2'
            },
            {
                type: 'text',
                content: 'Ngoài ra, các danh mục phụ cho thẻ Trainer như Người hỗ trợ, Vật phẩm và Sân vận động, sẽ hiển thị ở góc trên cùng bên trái để người chơi dễ nhìn thấy hơn. '
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/sv01_en_238-2x_5897bf27384b4e69b4d4e3512f853919_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_177-2x_936e6392a78e4a5287592103d010d8d2_grande.jpg'],
                caption: 'Ảnh 3'
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/sv01_en_171-2x_6be5150af7e94b00be56610e598b26d7_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_192-2x_14be67a442f84a1e8fae4123ac7c46bf_grande.jpg', 'https://file.hstatic.net/200000346081/file/sv01_en_167-2x_9708444b68ae4aa99f19d8315dcdfd5d_grande.jpg'],
                caption: 'Ảnh 4'
            },
            {
                type: 'text',
                content: 'Thẻ Năng lượng Cơ bản sẽ hiển thị một biểu tượng Năng lượng khác ở góc dưới cùng bên phải để dễ dàng hơn theo dõi năng lượng trong quá trình chơi , đồng thời trên cùng của thẻ giờ sẽ hiển thị tên của Năng lượng.'
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/z4296715599122_3af9502a4a39a1d58bb4b6e007cbd67d_82173e7b0dfc49b0997543c1f14c8b31_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4296715599122_3af9502a4a39a1d58bb4b6e007cbd67d_82173e7b0dfc49b0997543c1f14c8b31_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4296715599103_3bbe613f198e8bf7b273d8ba414527fe_21792ae68ab14cfe87070c5be5cf9901_grande.jpg'],
                caption: 'Ảnh 5'
            },
            {
                type: 'text',
                content: 'Và còn có rất nhiều thay đổi khác đang chờ bạn khám phá . Tất cả đều có trong series Scarlet&Violet hiện đã có mặt tại sạp nhà Gạo. Mời bạn ghé Gạo để xem thêm nhiều sản phẩm hơn nhé.'
            }
        ]
    },
    {
        title: 'Theo bạn cách chọn thẻ Pokemon TCG như thế nào là lý tưởng nhất?',
        background: 'https://file.hstatic.net/200000346081/article/mick-haupt-kttf68zjbak-unsplash_7710768ac5f442d1a2324d14b2b0caf0_1024x1024.jpg',
        createdBy: 'Nguyễn Thị Huỳnh Nhi',
        createDate: '20.04.2023',
        contents: [
            {
                type: 'text',
                content: 'Khi bắt đầu cuộc hành trình của bạn vào thế giới của Pokemon Trading Card Game (TCG), một khía cạnh quan trọng là chọn thẻ Pokemon TCG lý tưởng để đảm bảo nó phù hợp với chiến lược và sở thích cá nhân của bạn. Để đưa ra lựa chọn sáng suốt, bạn phải xem xét một số yếu tố góp phần tạo nên giá trị và hiệu quả của thẻ.'
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/pp-5a0a7530a43f5e7a2142a592-ph0__1__3db956fe551e4920b4c3a87c26fbe9dd_grande.jpg',
                caption: 'Ảnh 1'
            },
            {
                type: 'text',
                content: 'Trước tiên, hãy xác định phong cách chơi ưa thích của bạn,cho dù đó là tấn công, phòng thủ hay chiến lược, để xác định loại thẻ Pokemon phù hợp: Huấn luyện viên, Năng lượng hoặc Pokemon. Mỗi loại đóng một vai trò riêng, đòi hỏi phải suy nghĩ cẩn thận về việc tích hợp nó vào bộ bài của bạn.'
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/nmah-ahb2017q014319_276ad39c120a40549f4ca22a9aa63103_grande.jpg',
                caption: 'Ảnh 2'
            },
            {
                type: 'text',
                content: 'Tiếp theo, hãy tập trung vào những lá bài có sức mạnh tổng hợp với nguyên mẫu bộ bài mong muốn của bạn, đảm bảo rằng bạn đang tối đa hóa tiềm năng của từng lá bài. Hơn nữa, hãy suy ngẫm về khả năng cạnh tranh của thẻ trong meta hiện tại, đánh giá sức mạnh của nó trong trận chiến, sức mạnh tổng hợp với các thẻ khác và khả năng thích ứng với thay đổi. '
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/obj16956329_1_4b3cec27d4c74b9bb9500b1d7f289dc3_grande.jpg',
                caption: 'Ảnh 3'
            },
            {
                type: 'text',
                content: 'Cuối cùng, hãy lưu ý đến ngân sách của bạn khi chọn thẻ và không chi tiêu quá mức vào các thẻ đơn lẻ. Bằng cách tính đến các yếu tố này và liên tục đánh giá lại thành phần bộ bài của mình, bạn sẽ tối ưu hóa trải nghiệm Pokemon TCG của mình, tăng cơ hội thành công và hài lòng trong trò chơi bài hấp dẫn này.',
            },
            {
                type: 'text',
                content: 'Thẻ Năng lượng Cơ bản sẽ hiển thị một biểu tượng Năng lượng khác ở góc dưới cùng bên phải để dễ dàng hơn theo dõi năng lượng trong quá trình chơi , đồng thời trên cùng của thẻ giờ sẽ hiển thị tên của Năng lượng.'
            },
            {
                type: 'image',
                content: `Mời bạn ghé thăm nhà Gạo để xem thêm nhiều sản phẩm về Pokemon TCG nữa nha :
                - Xem hàng trực tiếp tại: 59D Mạc Đĩnh Chi, Đakao, Q1, Tp.HCM 
                
                - Hoặc có thể đặt hàng online tại các link sau: 
                
                https://gaopokemon.com 
                
                https://shopee.vn/gaopokemon 
                
                https://www.facebook.com/Gaopokemon `
            }
        ]
    },
    {
        title: 'Các loại thẻ Pokemon TCG',
        background: 'https://file.hstatic.net/200000346081/article/z4272263457943_c0e988beed8c4a795907b820c5c63b56_d2bf6acd20f04d6c973e1c645ec736a4_1024x1024.jpg',
        createdBy: 'Nguyễn Thị Huỳnh Nhi',
        createDate: '17.04.2023',
        contents: [
            {
                type: 'text',
                content: 'Pokémon Trading Card Game (TCG) là một trò chơi linh hoạt và năng động có nhiều lựa chọn thẻ bài, bao gồm vô số sinh vật và đặc điểm được tìm thấy trong vũ trụ Pokémon. Có ba loại thẻ Pokémon TCG chính: thẻ Pokémon (Pokémon card), Thẻ Huấn luyện viên ( Trainer Card) và Thẻ Năng lượng (Energy cards).'
            },
            {
                type: 'text',
                content: `1) Pokémon card
                Pokémon card là dạng thẻ bài cơ bản nhất trong game. Các thẻ Pokémon đại diện cho các sinh vật mà người chơi sử dụng trong các trận chiến, mỗi thẻ hiển thị các thuộc tính độc đáo như khả năng và di chuyển, cũng như loại của chúng, xác định lợi thế và điểm yếu của chúng so với các thẻ khác. 
                Trong thế giới Pokémon, các thẻ nhân vật có thể tiến hóa để phát huy hết khả năng của chúng và đạt được một hình thức mạnh mẽ hơn. Tùy vào số lần tiến hóa của một Pokémon mà chúng sẽ có thẻ giai đoạn 2 và 3. Sau khi tiến hóa, các thẻ Pokémon nâng cao này có thể giải phóng các khả năng vượt trội, tăng cường các chỉ số của chúng và thường có ngoại hình mới, mang lại lợi thế chiến lược cho người huấn luyện trong các trận chiến và cuộc thi`
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/z4272417333332_0cc3edbfb6a63797760f3c594e9c0831_13053ca426204359aeaa3bb01ca484d1_grande.jpg',
                caption: 'Ảnh 2'
            },
            {
                type: 'text',
                content: `2) Trainer Card
                Trainer Card đóng vai trò then chốt trong việc định hình chiến lược của người chơi. Các thẻ linh hoạt này cung cấp hỗ trợ cần thiết bằng cách cấp các khả năng khác nhau . Về bản chất, thẻ Huấn luyện viên cho phép người chơi thích nghi và vượt qua các thử thách trong suốt trò chơi, khiến chúng trở thành yếu tố không thể thiếu trong việc xây dựng một bộ bài cạnh tranh.
                Trainer cards được phân loại thành 4 dạng thẻ gồm: Item Card, Pokemon Tool, Supporter Card và Stadium Card. Từng loại thẻ sẽ mang đến các công dụng khác nhau.`
            },
            {
                type: 'image',
                imgUrl: ['https://file.hstatic.net/200000346081/file/z4272263461800_773e16ab8a0f08e462629263ae40a52e_440a6915abef480e9aa7eaf11cc6904a_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4272267134361_fe3c09f4fefbdf870ec005393ce7dba3_bb9170eda36a469fba68597d8de95a8b_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4272263441195_c41a5e076240403af80b21061ed4fafc_50ffde61f89b425a8fce9095f75a30da_grande.jpg', 'https://file.hstatic.net/200000346081/file/z4272263446290_f8fb6b6a87782b6959fd91a03b7c4af1_7b03356131d24fda8c38648372a7ce41_grande.jpg'],
                caption: 'Ảnh 3'
            },
            {
                type: 'text',
                content: `3) Energy cards
                Thẻ Năng lượng hoạt động như một nguồn tài nguyên thiết yếu để Pokémon thực hiện các bước di chuyển của chúng trong các trận chiến. Các loại Năng lượng chính tương ứng với các hệ gồm : Grass (Cỏ), Fire (Lửa), Water (Nước), Lightning (Điện), Psychic (Tâm Linh), Fighting (Giác Đấu), Darkness (Bóng Tối), Metal (Kim Loại), Fairy (Tiên).`
            },
            {
                type: 'image',
                imgUrl: 'https://file.hstatic.net/200000346081/file/61lkngsvcwl_9c4ce0d8006b449f9e0356f810304213_grande.jpg',
                caption: 'Ảnh 4'
            },
            {
                type: 'text',
                content: 'Trên đây là bài viết tổng quan chia sẻ về các khái niệm cơ bản của các loại thẻ bài trong Pokemon TCG. Hy vọng nó sẽ giúp ích cho các bạn trong việc làm quen và hiểu rõ hơn về cách chơi của game này một cách nhanh chóng. Và đừng quên ghé Gạo Pokemon để xem thêm nhiều sản phẩm nữa nha.',
            },
        ]
    }
]

function News() {
    const [curPost, setCurPost] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const handleSetCurPost = useCallback((post) => {
        setCurPost(post)
    }, [])

    useEffect(() => {
        const id = setTimeout(() => {
            setIsLoading(false)
        }, 1000);
        return () => clearTimeout(id)
    }, [])

    return (
        <div>
            {isLoading ?
                (<Loader />) :
                (<div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <div className={cx('row')}>
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                                <div className={cx('article')}>
                                    <div className={cx('article-heading')}>
                                        <h3>BÀI VIẾT MỚI NHẤT</h3>
                                    </div>
                                    <div className={cx('article-box')}>
                                        {data.length > 0 &&
                                            data.slice(0, 4).map((item, index) => (
                                                <div key={index} className={cx('article-item')}
                                                    onClick={() => handleSetCurPost(item)}
                                                >
                                                    <div className={cx('article-item--img')}>
                                                        <img src={item.background} alt={item.title} />
                                                    </div>
                                                    <div className={cx('article-item--content')}>
                                                        <h3>{item.title}</h3>
                                                        <p>{item.createDate}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                                <h3 className={cx('box-posts--heading')} onClick={() => setCurPost(null)}>Tin tức</h3>
                                {!curPost &&
                                    <div className={cx('box-posts')}>
                                        <div className={cx('wrapper-post')}>
                                            {data.length > 0 &&
                                                data.map((item, index) => (
                                                    <div key={index} className={cx('post-item', 'row')}
                                                        onClick={() => handleSetCurPost(item)}
                                                    >
                                                        <div className={cx('post-item--img', 'col-xl-4 col-lg-4 col-md-3 col-sm-12')}>
                                                            <img src={item.background} alt={item.title} />
                                                        </div>
                                                        <div
                                                            className={cx('post-item--content', 'col-xl-8 col-lg-8 col-md-9 col-sm-12')}
                                                        >
                                                            <h3>{item.title}</h3>
                                                            <p>
                                                                <span>Người viết: {item.createdBy}
                                                                </span>
                                                                <span> / {item.createDate}</span>
                                                            </p>
                                                            <span>{item.contents[0].content}</span>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                }
                                {curPost &&
                                    <div className={cx('post-box')}>
                                        <div className={cx('post-background')}>
                                            <img src={curPost.background} alt={curPost.title} />
                                        </div>
                                        <div className={cx('post-heading')}>
                                            <h2>{curPost.title}</h2>
                                        </div>
                                        <div className={cx('post-info')}>
                                            <p>
                                                <span>
                                                    Người viết: {curPost.createdBy} / {curPost.createDate}
                                                </span>
                                            </p>
                                        </div>
                                        <div className={cx('post-content')}>
                                            {Array.isArray(curPost.contents) &&
                                                curPost.contents.map((item, index) => {
                                                    if (item.type === 'text') {
                                                        return (
                                                            <p key={index}>{item.content}</p>
                                                        )
                                                    }
                                                    else if (item.type === 'image') {
                                                        if (Array.isArray(item.imgUrl)) {
                                                            return (
                                                                <p style={{ textAlign: 'center' }} key={index}>
                                                                    {item.imgUrl.map((link, key) => (
                                                                        <img src={link} alt={item.caption} key={key} />
                                                                    ))}
                                                                </p>
                                                            )
                                                        } else {
                                                            return (
                                                                <p style={{ textAlign: 'center' }} key={index}>
                                                                    <img src={item.imgUrl} alt={item.caption} />
                                                                </p>
                                                            )
                                                        }
                                                    }
                                                    return null;
                                                })}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default News