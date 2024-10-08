import { test, expect } from "@playwright/test";

test.describe("Project Modal Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/portfolio");
  });

  test("should open and close project modals", async ({ page }) => {
    // 'projects' 섹션 하위의 ProjectItem 요소들 선택
    const projectItems = page.locator("#projects li.group");

    // ProjectItem 요소 개수 확인
    const count = await projectItems.count();
    expect(count).toBeGreaterThan(0); // 최소 하나 이상의 프로젝트가 있어야 함

    // 각 ProjectItem을 클릭하고 모달을 열고 닫기
    for (let i = 0; i < count; i++) {
      const projectItem = projectItems.nth(i);

      // ProjectItem 클릭
      await projectItem.click();

      // 모달이 열렸는지 확인 (모달의 div에 고유한 클래스명 사용)
      const modal = page.locator("div.fixed.inset-0.z-50"); // 모달을 나타내는 요소를 지정
      await expect(modal).toBeVisible(); // 모달이 열렸는지 확인

      // 모달 닫기 버튼 클릭
      const closeButton = modal.locator("button"); // 모달 내 닫기 버튼 선택
      await closeButton.click();

      // 모달이 닫혔는지 확인
      await expect(modal).not.toBeVisible();
    }
  });
});
