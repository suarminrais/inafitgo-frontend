import Footer from "./components/footer/footer.component"
import Headline from "./components/headline/headline.component"
import Media from "./components/media/media.component"
import Navbar from "./components/navbar/navbar.component"
import OutLine from "./components/outline/outline.component"
import Section from "./components/section/section.component"
import Step from "./components/step/step.component"
import ui from './assets/mockup/video.svg'
import ui2 from './assets/mockup/user.svg'
import ui3 from './assets/mockup/gizi.svg'
import ui4 from './assets/mockup/trainer.svg'
import i from "./assets/icon/1.user.svg"
import i2 from "./assets/icon/2.gizi.svg"
import i3 from "./assets/icon/3.trainer.svg"
import i4 from "./assets/icon/4.video.svg"

const App = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div id="feature">
        <Headline title="INAFITGO PENGGUNA" image={ui2} icon={i} text="Inafitgo Pengguna merupakan tampilan aplikasi yang digunakan masyarakat dalam melakukan kegiatan konsultasi terhadap ahli gizi dan personal trainer dalam memenuhi gizi seimbang dan tubuh yang ideal." />
        <Headline turn title="INAFITGO AHLI GIZI" image={ui3} icon={i2} text="Inafitgo Ahli Gizi merupakan tampilan aplikasi yang digunakan Ahli Gizi dalam melakukan kegiatan konsultasi kepada masyarakat secara berkala sesuai dengan waktu yang telah ditetapkan." />
        <Headline title="INAFITGO PERSONAL TRAINER" image={ui4} icon={i3} text="Inafitgo Personal Trainer merupakan tampilan aplikasi yang digunakan Personal Trainer dalam melakukan kegiatan konsultasi ataupun latihan fisik kepada masyarakat secara berkala sesuai dengan waktu yang telah ditentukan." />
        <Headline accent turn title="INAFITGO VIDEO TIPS GIZI & OLAHRAGA" image={ui} icon={i4} text="Inafitgo Video merupakan tampilan literatur/referensi tips untuk memulai gizi seimbang dan latihan fisik/olahraga secara teratur bersama Inafitgo" />
      </div>
      <Step />
      <OutLine />
      {/* <Headline image="https://bibit.id/img/illustration8.svg" icon="https://bibit.id/img/shieldIcon.png" title="KEAMANAN DANA DARI BANK" text="Bibit tidak menyimpan dana kamu. Dana yang kamu investasikan ditransfer langsung ke kustodian bank dan dikelola oleh perusahaan berlisensi OJK. Dana hanya dapat dicairkan ke rekening atas nama kamu." /> */}
      <div id="client">
        <Media />
      </div>
      <Footer />
    </>
  );
}

export default App;
