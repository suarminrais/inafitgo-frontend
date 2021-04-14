import Footer from "./components/footer/footer.component"
import Headline from "./components/headline/headline.component"
import Media from "./components/media/media.component"
import Navbar from "./components/navbar/navbar.component"
import OutLine from "./components/outline/outline.component"
import Section from "./components/section/section.component"
import Step from "./components/step/step.component"
import ui from "./assets/ui1.png"
import ui2 from "./assets/ui2.png"
import ui3 from "./assets/ui3.png"
import ui4 from "./assets/ui4.png"

const App = () => {
  return (
    <>
      <Navbar />
      <Section />
      <Headline title="INAFITGO PENGGUNA" image={ui2} icon="https://bibit.id/img/processorIcon.png" text="Inafitgo Pengguna merupakan tampilan aplikasi yang digunakan masyarakat dalam melakukan kegiatan konsultasi terhadap ahli gizi dan personal trainer dalam memenuhi gizi seimbang dan tubuh yang ideal." />
      <Headline turn title="INAFITGO AHLI GIZI" image={ui3} icon="https://bibit.id/img/formulaIcon.png" text="Inafitgo Ahli Gizi merupakan tampilan aplikasi yang digunakan Ahli Gizi dalam melakukan kegiatan konsultasi kepada masyarakat secara berkala sesuai dengan waktu yang telah ditetapkan." />
      <Headline title="INAFITGO PERSONAL TRAINER" image={ui4} icon="https://bibit.id/img/machineIcon.png" text="Inafitgo Personal Trainer merupakan tampilan aplikasi yang digunakan Personal Trainer dalam melakukan kegiatan konsultasi ataupun latihan fisik kepada masyarakat secara berkala sesuai dengan waktu yang telah ditentukan." />
      <Headline accent turn title="INAFITGO VIDEO TIPS GIZI & OLAHRAGA" image={ui} icon="https://bibit.id/img/fastIcon.png" text="Inafitgo Video merupakan tampilan literatur/referensi tips untuk memulai gizi seimbang dan latihan fisik/olahraga secara teratur bersama Inafitgo" />
      <Step />
      <OutLine />
      <Headline image="https://bibit.id/img/illustration8.svg" icon="https://bibit.id/img/shieldIcon.png" title="KEAMANAN DANA DARI BANK" text="Bibit tidak menyimpan dana kamu. Dana yang kamu investasikan ditransfer langsung ke kustodian bank dan dikelola oleh perusahaan berlisensi OJK. Dana hanya dapat dicairkan ke rekening atas nama kamu." />
      <Media />
      <Footer />
    </>
  );
}

export default App;
