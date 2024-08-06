import Typing from "./Typing";

export default function AboutMeSection() {
  return (
    <section id="aboutme">
      <h2 className="mb-2 text-2xl font-bold">About me</h2>
      <Typing
        text="안녕하세요! 프론트엔드 개발자 이도현입니다.\n사용자 경험 개선과 효율적인 코드를 목표로 합니다."
        speed={100}
        delay={3000}
      />
    </section>
  );
}
