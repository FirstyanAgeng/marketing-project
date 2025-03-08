import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    { id: 1, title: "Judul Film 1", description: "Deskripsi film 1." },
    { id: 2, title: "Judul Film 2", description: "Deskripsi film 2." },
    { id: 3, title: "Judul Film 3", description: "Deskripsi film 3." },
    { id: 3, title: "Judul Film 3", description: "Deskripsi film 3." },
    { id: 3, title: "Judul Film 3", description: "Deskripsi film 3." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-800 to-red-600 text-white">
      {/* Hero Section */}
      <header className="container mx-auto py-12 px-4">
        <nav className="flex justify-between items-center mb-16">
          <div className="font-bold text-xl">FilmIndonesia</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-red-200 transition">
              Beranda
            </a>
            <a href="#" className="hover:text-red-200 transition">
              Film
            </a>
            <a href="#" className="hover:text-red-200 transition">
              Berita
            </a>
            <a href="#" className="hover:text-red-200 transition">
              Tentang Kami
            </a>
          </div>
          <button className="bg-white text-red-800 px-4 py-2 rounded font-medium hover:bg-red-100 transition">
            Hubungi Kami
          </button>
        </nav>

        <div
          className={`flex flex-col items-center max-w-6xl mx-auto transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
              Transformasi Perfilman Indonesia
            </h1>
            <p className="text-xl text-red-100 mb-8">
              Menghadirkan karya film berkualitas tinggi yang menginspirasi dan
              membanggakan
            </p>
          </div>

          <div className="w-full max-w-3xl mx-auto">
            <div className="relative shadow-2xl rounded-lg overflow-hidden">
              <video
                className="w-full rounded-lg"
                controls
                poster="/path-to-poster-image.jpg"
              >
                <source src="/video.mp4" type="video/mp4" />
                Browser Anda tidak mendukung tag video.
              </video>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-white text-red-800 px-6 py-3 rounded-lg font-bold hover:bg-red-100 transition">
              Lihat Katalog Film
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition">
              Tentang Kami
            </button>
          </div>
        </div>
      </header>

      {/* Problems & Solutions Section */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-4">
              Transformasi Perfilman Indonesia
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kami memahami tantangan dalam industri film Indonesia dan
              berkomitmen untuk menghadirkan solusi inovatif
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-red-50 p-8 rounded-lg shadow-lg transform transition hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Tantangan Saat Ini
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>
                    Efek visual dan CGI yang belum memenuhi standar
                    internasional
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>
                    Konten yang kurang relevan dengan selera penonton modern
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>
                    Keragaman genre yang terbatas dan eksploitasi tema-tema
                    serupa
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>
                    Kendala anggaran dan infrastruktur produksi yang memadai
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span>Kurangnya inovasi naratif dalam penceritaan</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg shadow-lg transform transition hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                Solusi Kami
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Kolaborasi dengan studio efek visual kelas dunia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>
                    Riset mendalam terhadap preferensi penonton kontemporer
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>
                    Eksplorasi genre baru dan pendekatan kreatif yang segar
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>
                    Investasi dalam teknologi dan pelatihan tenaga kerja film
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span>Pengembangan cerita yang kompleks dan mendalam</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-red-800 mb-12">
            Proyek Unggulan Kami
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    {/* Placeholder for film poster */}
                    <span className="text-gray-500">Poster {project.id}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <button className="text-red-700 font-semibold hover:text-red-900">
                      Pelajari Lebih Lanjut →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Kata Mereka Tentang Kami</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Andi Sutanto",
                role: "Sutradara Film",
                quote:
                  "Pendekatan mereka terhadap produksi film benar-benar mengubah cara saya melihat industri film Indonesia.",
              },
              {
                name: "Maya Pratiwi",
                role: "Kritikus Film",
                quote:
                  "Jarang sekali saya melihat dedikasi seperti ini untuk meningkatkan standar perfilman nasional.",
              },
              {
                name: "Budi Setiawan",
                role: "Produser Eksekutif",
                quote:
                  "Ketelitian dan standar kualitas mereka telah menghasilkan karya yang benar-benar membanggakan.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-red-800 p-6 rounded-lg">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-red-300 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-4">
            Jadilah Bagian dari Revolusi Film Indonesia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Kami mengundang Anda untuk berkolaborasi dan menjadi bagian dari
            perubahan industri film Indonesia
          </p>
          <button className="bg-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-900 transition">
            Hubungi Tim Kami
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">FilmIndonesia</h3>
              <p className="text-gray-400">
                Menghadirkan karya film berkualitas tinggi yang menginspirasi
                dan membanggakan
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Tautan</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Film
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Tentang Kami
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Hubungi Kami</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@filmindonesia.co.id</li>
                <li>+62 21 1234 5678</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  FB
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  IG
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  TW
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  YT
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>
              © {new Date().getFullYear()} FilmIndonesia. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
