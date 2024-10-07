import { test, expect } from "@playwright/test";

test.describe("Dark Mode Toggle", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/portfolio");
  });

  test("should default to light mode when localStorage is empty", async ({ page }) => {
    // localStorage가 비어있을 때 기본값 확인
    const initialDarkMode = await page.evaluate(() => localStorage.getItem("dark-mode"));
    expect(initialDarkMode).toBeNull(); // 로컬 스토리지가 비어있는지 확인

    // 다크모드 버튼 찾기
    const darkModeButton = page.locator("button:has(div.icon-hover-effect)");

    // 다크모드 활성화 (버튼 클릭)
    await darkModeButton.click();

    // 다크모드가 활성화 되었는지 확인
    await page.waitForSelector("html.dark"); // html 태그에 dark 클래스가 추가됨
    const isDarkModeOn = await page.evaluate(() => document.documentElement.classList.contains("dark"));
    expect(isDarkModeOn).toBeTruthy(); // 다크모드가 활성화 되었는지 확인

    // 로컬 스토리지 상태 확인
    const darkModeInStorage = await page.evaluate(() => localStorage.getItem("dark-mode"));
    expect(darkModeInStorage).toBe("true");

    // 다크모드 비활성화 (버튼 클릭)
    await darkModeButton.click();

    // 다크모드가 비활성화 되었는지 확인
    await page.waitForSelector("html:not(.dark)"); // html 태그에서 dark 클래스가 제거됨
    const isDarkModeOff = await page.evaluate(() => !document.documentElement.classList.contains("dark"));
    expect(isDarkModeOff).toBeTruthy(); // 라이트모드로 돌아왔는지 확인

    // 로컬 스토리지 상태 확인
    const darkModeInStorageAfterOff = await page.evaluate(() => localStorage.getItem("dark-mode"));
    expect(darkModeInStorageAfterOff).toBe("false");
  });
});
