import { test, expect } from "@playwright/test";
import { menus } from "@/data/data"; // menus 데이터를 가져옵니다.

test.describe("Navigation menu", () => {
  test.beforeEach(async ({ page }) => {
    // 페이지를 열기 전에 앱의 기본 URL을 설정합니다.
    await page.goto("http://localhost:3000/portfolio");
  });

  menus.forEach((menu) => {
    test(`should scroll to the ${menu} section when the menu is clicked`, async ({ page }) => {
      // 메뉴 버튼을 클릭합니다.
      const button = page.locator(`button:has-text("${menu}")`);
      await button.click();

      // 클릭된 메뉴에 따라 대상 요소의 ID가 결정됩니다.
      const targetId = menu.toLowerCase().split(" ").join("");
      const targetElement = page.locator(`#${targetId}`);

      // smooth scroll로 해당 요소가 화면에 제대로 표시되었는지 확인합니다.
      await expect(targetElement).toBeVisible();

      // 부드러운 스크롤이 완료될 시간을 확보하기 위해 잠시 대기
      await page.waitForTimeout(1000); // 1000ms 대기

      // 페이지가 해당 섹션으로 스크롤되었는지 위치를 확인할 수 있습니다.
      const boundingBox = await targetElement.boundingBox();
      expect(boundingBox).not.toBeNull();

      // 스크롤이 완료되었을 때 해당 섹션이 화면 내에 있는지 확인합니다.
      const viewportHeight = await page.evaluate(() => window.innerHeight);
      expect(boundingBox!.y).toBeLessThanOrEqual(viewportHeight);
    });
  });
});
