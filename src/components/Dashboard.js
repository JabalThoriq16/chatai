import { Grid, Swiper, Image, NoticeBar } from "react-vant";
import { Description, Records, VideoO, FriendsO, WarningO } from '@react-vant/icons'
import "./dashboar.css";

function Dashboard() {  
  const Modules = [
    {
      title: "Logika dan Penalaran",
      page:"LP",
      materi:
        "Materi ini melatih kemampuan berpikir deduktif dan induktif. Siswa diajarkan untuk dapat menyelesaikan masalah secara sistematis dan kritis.",
      link: "https://i.pinimg.com/originals/48/cd/a4/48cda4b905220c9d6af458470b2d894d.jpg",
    },
    {
      title: "Pemecahan Masalah",
      page:"PM",
      materi:
        "Materi ini melatih kemampuan siswa dalam menyelesaikan masalah dengan cara-cara yang kreatif dan inovatif. Siswa diajarkan untuk mengidentifikasi masalah, mengumpulkan informasi, dan merancang solusi yang efektif.",
      link: "https://i.pinimg.com/originals/48/cd/a4/48cda4b905220c9d6af458470b2d894d.jpg",
    },
    {
      title: "Analisis dan Evaluasi",
      page:"AE",
      materi:
        "Materi ini melatih kemampuan siswa dalam menganalisis dan mengevaluasi informasi dengan cara kritis dan objektif. Siswa diajarkan untuk mengidentifikasi argumen yang kuat dan lemah, mengenali bias, dan mempertimbangkan berbagai perspektif.",
      link: "https://i.pinimg.com/originals/48/cd/a4/48cda4b905220c9d6af458470b2d894d.jpg",
    },
    {
      title: "Kreativitas",
      page:"KR",
      materi:
        "Materi ini melatih kemampuan siswa untuk berpikir kreatif dan inovatif dalam menemukan solusi dan ide-ide baru. Siswa diajarkan untuk berpikir di luar kotak, menggunakan imajinasi dan mengembangkan ide yang unik.",
      link: "https://i.pinimg.com/originals/48/cd/a4/48cda4b905220c9d6af458470b2d894d.jpg",
    },
    {
      title: "Komunikasi",
      page:"KM",
      materi:
        "Materi ini melatih kemampuan siswa dalam menyampaikan ide-ide dan gagasan secara efektif dan persuasif. Siswa diajarkan untuk berbicara dan menulis dengan jelas, dan menggunakan argumen yang kuat dan logis.",
      link: "https://i.pinimg.com/originals/48/cd/a4/48cda4b905220c9d6af458470b2d894d.jpg",
    },
    {
      title: "Pemodelan Matematika",
      page:"PM",
      materi:
        "Materi ini melatih kemampuan siswa dalam memodelkan masalah matematika dengan berbagai macam metode dan teknik. Siswa diajarkan untuk mengidentifikasi pola, membuat prediksi, dan merancang strategi penyelesaian masalah.",
      link: "https://i.pinimg.com/originals/48/cd/a4/48cda4b905220c9d6af458470b2d894d.jpg",
    },
  ];
  return (
    <div align="center">
      <h3 style={{color:'black'}}>Module</h3>
      <div className="banner" style={{ backgroundColor: "#3B31F1" }}>
        <div className="demo-swiper">
          <Swiper>
            {Modules.map((module, index) => (
              <Swiper.Item key={index}>
                <Image lazyload src={module.link}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <h2
                      style={{
                        color: "#fff",
                        fontSize: "20px",
                        textAlign: "center",
                      }}
                    >
                      {module.title}
                    </h2>
                    <NoticeBar
                      background="none"
                      color="#fff"
                      style={{
                        // backgroundColor: "",
                        fontSize: "16px",
                        textAlign: "center",
                        width: "48%", // Menambahkan properti width
                      }}
                      scrollable
                      text={module.materi}
                    />
                    <a href={module.page} className="btn">
                      Lihat
                    </a>
                  </div>
                </Image>
              </Swiper.Item>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="menu">

        <h3 style={{color:'black'}}>Menu</h3>
        <Grid
          border={true}
          square={false}
          gutter={20}
          columnNum={2}
          style={{ marginLeft: "3%", marginRight: "5%" }}
        >
          <Grid.Item onClick={() => window.location.href = "/materi"} icon={<Description />} text='Materi' />
          <Grid.Item onClick={() => window.location.href = "/module"} icon={<Description />} text='Module' />
          <Grid.Item onClick={() => window.location.href = "/soal"} icon={<Records />} text='Soal' />
          <Grid.Item onClick={() => window.location.href = "/simulasi"} icon={<VideoO />} text='Simulasi' />
          <Grid.Item onClick={() => window.location.href = "/teman"} icon={<FriendsO />} text='Teman Fisika' />
          <Grid.Item onClick={() => window.location.href = "/info"} icon={<WarningO />} text='Info' />
        </Grid>
      </div>
    </div>
  );
}

export default Dashboard;
