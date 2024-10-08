import { test, expect } from "@playwright/test";

test.describe("Skills Rotation on Hover", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/portfolio");
  });

  test("should rotate each skill icon on hover", async ({ page }) => {
    // 모든 스킬 아이콘을 가져옴
    const skillIcons = page.locator("#skills li.group");

    // 아이콘 개수 확인
    const count = await skillIcons.count();
    expect(count).toBeGreaterThan(0); // 최소 하나 이상의 아이콘이 있어야 함

    // 각 아이콘에 대해 hover를 테스트
    for (let i = 0; i < count; i++) {
      const skillIcon = skillIcons.nth(i);

      // hover 효과를 적용
      await skillIcon.hover();

      // 회전 여부를 확인
      const rotateY = await skillIcon.evaluate((el) => window.getComputedStyle(el).transform);

      // 회전 변환이 적용되었는지 확인 (180도 회전: rotateY(180deg))
      expect(rotateY).toContain("matrix");
    }
  });
});
