import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import Image from "next/image";
import { media } from "@/data/media";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "科研結果" };

const paragraphs = [
  "袁麗萍教授自幼在深山道觀成長，深諳科研養生之道。她曾多次與香港大學合作，研究「氣功對慢性疲勞綜合症及癌症的療效」。作為國際健康養生會主席、港大行為健康教研中心臨床顧問、註冊中醫師及中華傳統醫學研究所所長，袁教授在醫療界享有崇高的聲譽，曾榮獲聯合國特殊醫療貢獻獎和多項國際獎項。",
  "在行醫期間，袁教授觀察到都市人患慢性病多，特別是癌症，年輕化趨勢明顯。她指出，隨著香港社會壓力加劇，許多人身體健康受損。袁教授重點指出氣功可以改善新陳代謝，有助血液循環，提升氧氣供應，平衡五臓健康，並有效紓緩癌症化療的副作用。",
  "為了更深入探討氣功的療效，袁教授與香港大學曾開展一項針對改善失眠及情緒困擾的臨床研究，共招募約380位慢性病患者，接受她的氣功養生課程，學習「五行平衡功」。研究期間進行了兩次大規模隨機對照試驗，結果顯示氣功能顯著減輕疲勞並提升生活質量。研究結果對外公布後，引發了社會的廣泛關注與熱潮，該項研究亦被《世界行為醫學學會年報》選為優異科研文章。",
  "隨著研究成功，袁教授與香港大學再度攜手，邀請防癌會合作，向首次確診癌症的患者及其家屬提供氣功治療，探索氣功對改善癌症患者及其家庭生活質量的影響。袁教授強調：「慢性病和癌症並非絕症，生活質量提升能減少家庭負擔。健康投資是都市人的當務之急，預防勝於治療。」",
  "袁教授於2010年創辦國際健康養生會，旨在提供一個熱心公益的慈善平台，讓參與者能定期練習氣功，進行精神交流，促進健康理念的普及。近年，她多次受邀到世界各地講學，推廣中國傳統醫學，如美国的史密斯女子大學、美國紐約大學醫學院等。",
  "「五行平衡功」這套十式氣功療法，能提升身體對氧氣的吸收，促進五臓健康平衡，結合健康的生活習慣和飲食，對多種病症皆有療效，無論年齡與健康狀況均適合學習。一般而言，練習三周便可見效。",
];

export default function ResearchPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50">
        <PageHero title="科研結果" subtitle="袁麗萍教授與香港大學的氣功臨床研究" />
        <section className="mx-auto max-w-3xl px-4 py-14">
          <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-md">
            <Image src={`${media.r2}/images/photo01.jpg`} alt="科研與課程" fill className="object-cover" />
          </div>
          <article className="space-y-6 text-[16px] leading-8 text-stone-700 md:text-[18px]">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 16)}>{p}</p>
            ))}
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
