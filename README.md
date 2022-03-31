[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7365127&assignment_repo_type=AssignmentRepo)

# Logo Siber Güvenlik ve Ağ Teknolojileri Full Stack Bootcamp Bitirme Projesi

- Tek sayfadan oluşacak bir e-ticaret sitesi

## Proje Detayları:

- Vue.js ile tek sayfadan oluşan bir e-ticaret sistemi tasarlayacağız.
- 10 adet kategori olacak.
- Tüm backend işlemleri Node.js ile yapılacak.
- Arayüz Vue.js ile yapılacak.
- Ürünler API’den çekilecek. İstenilen API kullanılabilir. API’yi kendiniz tasarlayabilirsiniz.
- ElasticSearch ile ana sayfada arama alanı yapılacak.
- Winston kullanılacak.
- Ürüne tıkladığımız zaman bir kutusu ekrana gelecek ve ürünün bilgileri yer alacak.
- Relational veritabanı için PostgreSQL kullanılacak.

# Proje Detayları:

## Frontend

### Home Page

Aşağıda HomePagei göreceksiniz. Homepageda ürünler listeleniyor, sol üstte ürün eklemeye giden bir navigasyon var 'add product'.
![home-top](https://user-images.githubusercontent.com/71570633/160766227-c2819618-8cb1-442b-8d4e-59f4cf894d7d.png)

Ve HomePagein bottom kısmı
![home-bottom](https://user-images.githubusercontent.com/71570633/160766310-7453712f-ae13-4e84-b2c1-b95778bea0f9.png)

Sayfanın altında footer ve 'go back to top' buttonu var.

Her ürünün üzerinde 'view product' butonu var, oradan ürünleri detaylı bir şekilde inceleyebilirsiniz soldan gelen bir drawerla. Aşağıdaki videosu mevcut

https://user-images.githubusercontent.com/71570633/160766679-af49c866-2a67-4420-8ec6-fa5ca92d4882.mp4

Ve şimdide görseli
![drawer-image](https://user-images.githubusercontent.com/71570633/160766764-11cbbee9-6d5b-4d97-bc28-0f40b4ffffc6.png)
Sağ üstteki button sizi olduğunuz sayfaya tekrar yönlendirecek, yani ürünleri görmeye devam edeceksiniz. Fakat kırmızı renkli button ürünü silmenize neden olacak. Yanlışlıkla tıklarsanız bir sorun olmaz çünkü ürünü silmeden önce comfirmation için uyarı alacaksınız. Onaylandığı takdirde ürün kalıcı olarak silinecek

### Add Product Page

Bu sayfada aşağıda görselde istenilen bilgileri girip ürün ekleyebilirsiniz. Ekleme işleminin ardından anasayfaya yönlendirileceksiniz
Aşağıdaki görsel add product pagein nasıl göründüğünü gösteriyor
![add-product](https://user-images.githubusercontent.com/71570633/160767503-93c62510-943d-4f8b-9ff5-c26907787717.png)

## Kodlar

### Backend Folder structure

![backend folder structure ](https://user-images.githubusercontent.com/71570633/160767936-5680c4bd-1f15-4057-911b-153c8b33cd82.png)

Herşeyi küçük ve mantıklı parçalara bölerek ilerledim ki kodum maintainable sürdürülebilir olsun. Yukarıdaki dosya backend yapım

Biraz daha detay...
![detaylı folder structure](https://user-images.githubusercontent.com/71570633/160768515-4d9c28cd-b4e9-45a8-abfa-5bf5821e7921.png)
