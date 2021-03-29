import Headline from "./components/headline/headline.component"
import Navbar from "./components/navbar/navbar.component"
import OutLine from "./components/outline/outline.component"
import Section from "./components/section/section.component"
import Step from "./components/step/step.component"

const App = () => {
  return (
    <>
      <Navbar />
      <Section />
      <Headline title="TEKNOLOGI YANG DIDUKUNG OLEH RISET PEMENANG NOBEL PRIZE" image="https://bibit.id/img/illustration2.svg" icon="https://bibit.id/img/processorIcon.png" text="Teknologi kami menggunakan pendekatan Teori Modern Portfolio yang diperkenalkan oleh ekonom Harry Markowitz yang sudah terbukti dapat menjaga resiko dan memaksimalkan keuntungan kamu lewat diversifikasi." />
      <Headline turn title="INVESTASI YANG DIRANCANG KHUSUS UNTUK KAMU" image="https://bibit.id/img/illustration3.svg" icon="https://bibit.id/img/formulaIcon.png" text="Setiap orang mempunyai profil yang berbeda. Kita bantu menempatkan uang kamu ke portfolio reksadana yang khusus dibuat untuk kamu sesuai dengan umur, penghasilan dan toleransi kamu terhadap resiko. Secara otomatis." />
      <Headline title="REBALANCING OTOMATIS" image="https://bibit.id/img/illustration4.svg" icon="https://bibit.id/img/machineIcon.png" text="Teknologi kami akan bekerja dan memantau portfolio kamu secara otomatis untuk mempertahankan alokasi optimal kamu." />
      <Headline accent turn title="BUKA AKUN SECARA INSTAN" image="https://bibit.id/img/illustration5.svg" icon="https://bibit.id/img/fastIcon.png" text="Pembukaan rekening secara digital dan dapat diselesaikan dalam hitungan menit. Tanpa formulir, tanpa financial planner, tanpa spreadsheet. Tanpa ribet." />
      <Step />
      <OutLine />
    </>
  );
}

export default App;
